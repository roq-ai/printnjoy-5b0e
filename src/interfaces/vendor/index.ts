import { DesignInterface } from 'interfaces/design';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface VendorInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  design?: DesignInterface[];
  user?: UserInterface;
  _count?: {
    design?: number;
  };
}

export interface VendorGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
