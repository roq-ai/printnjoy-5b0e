interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Design Contributor'],
  customerRoles: ['End Customer'],
  tenantRoles: ['Design Contributor'],
  tenantName: 'Vendor',
  applicationName: 'PrintnJoy',
  addOns: ['notifications'],
};
