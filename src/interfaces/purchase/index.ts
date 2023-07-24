import { UserInterface } from 'interfaces/user';
import { DesignInterface } from 'interfaces/design';
import { GetQueryInterface } from 'interfaces';

export interface PurchaseInterface {
  id?: string;
  user_id?: string;
  design_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  design?: DesignInterface;
  _count?: {};
}

export interface PurchaseGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  design_id?: string;
}
