import { FeedbackInterface } from 'interfaces/feedback';
import { PurchaseInterface } from 'interfaces/purchase';
import { VendorInterface } from 'interfaces/vendor';
import { GetQueryInterface } from 'interfaces';

export interface DesignInterface {
  id?: string;
  name: string;
  category: string;
  vendor_id?: string;
  created_at?: any;
  updated_at?: any;
  feedback?: FeedbackInterface[];
  purchase?: PurchaseInterface[];
  vendor?: VendorInterface;
  _count?: {
    feedback?: number;
    purchase?: number;
  };
}

export interface DesignGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  category?: string;
  vendor_id?: string;
}
