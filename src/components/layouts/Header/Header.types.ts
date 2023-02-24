import { ROUTE_NAMES } from 'core'

export interface NavItem {
  label: string
  link: typeof ROUTE_NAMES[keyof typeof ROUTE_NAMES]
}
