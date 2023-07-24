const mapping: Record<string, string> = {
  designs: 'design',
  feedbacks: 'feedback',
  purchases: 'purchase',
  users: 'user',
  vendors: 'vendor',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
