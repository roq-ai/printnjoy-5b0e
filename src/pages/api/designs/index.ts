import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { authorizationValidationMiddleware, errorHandlerMiddleware } from 'server/middlewares';
import { designValidationSchema } from 'validationSchema/designs';
import { convertQueryToPrismaUtil, getOrderByOptions, parseQueryParams } from 'server/utils';
import { getServerSession } from '@roq/nextjs';
import { GetManyQueryOptions } from 'interfaces';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  switch (req.method) {
    case 'GET':
      return getDesigns();
    case 'POST':
      return createDesign();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getDesigns() {
    const {
      limit: _limit,
      offset: _offset,
      order,
      ...query
    } = parseQueryParams(req.query) as Partial<GetManyQueryOptions>;
    const limit = parseInt(_limit as string, 10) || 20;
    const offset = parseInt(_offset as string, 10) || 0;
    const response = await prisma.design
      .withAuthorization({
        roqUserId,
        tenantId: user.tenantId,
        roles: user.roles,
      })
      .findManyPaginated({
        ...convertQueryToPrismaUtil(query, 'design'),
        take: limit,
        skip: offset,
        ...(order?.length && {
          orderBy: getOrderByOptions(order),
        }),
      });
    return res.status(200).json(response);
  }

  async function createDesign() {
    await designValidationSchema.validate(req.body);
    const body = { ...req.body };
    if (body?.feedback?.length > 0) {
      const create_feedback = body.feedback;
      body.feedback = {
        create: create_feedback,
      };
    } else {
      delete body.feedback;
    }
    if (body?.purchase?.length > 0) {
      const create_purchase = body.purchase;
      body.purchase = {
        create: create_purchase,
      };
    } else {
      delete body.purchase;
    }
    const data = await prisma.design.create({
      data: body,
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(authorizationValidationMiddleware(handler))(req, res);
}
