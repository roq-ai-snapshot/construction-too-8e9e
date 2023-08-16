import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface InvitationInterface {
  id?: string;
  company_id?: string;
  email: string;
  status: string;
  created_at?: any;
  updated_at?: any;

  company?: CompanyInterface;
  _count?: {};
}

export interface InvitationGetQueryInterface extends GetQueryInterface {
  id?: string;
  company_id?: string;
  email?: string;
  status?: string;
}
