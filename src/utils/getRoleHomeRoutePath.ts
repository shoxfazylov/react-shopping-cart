import { ROUTE_NAMES } from 'core'

import { UserRoleType } from 'types/account'

export const getRoleHomeRoutePath = (role?: UserRoleType) => {
  switch (role) {
    case 'Manager':
      return ROUTE_NAMES.MANAGER_SUPPLIERS
    case 'Supplier':
      return ROUTE_NAMES.SUPPLIER_CATALOG
    case 'Person':
    case 'Entity':
    case 'PersonEntity':
      return ROUTE_NAMES.CUSTOMER_PERSONAL_INFO
    default:
      return '/'
  }
}
