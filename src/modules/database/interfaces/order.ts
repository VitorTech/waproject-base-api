export interface IOrder {
  id?: number;
  description: string;
  quantity: number;
  value: number;
  createdDate?: Date;
  updatedDate?: Date;
}

export enum enRoles {
  sysAdmin = 'sysAdmin',
  admin = 'admin',
  order = 'order'
}

export function listPublicRoles(): enRoles[] {
  return [enRoles.admin, enRoles.order];
}
