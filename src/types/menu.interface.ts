/* eslint-disable @typescript-eslint/ban-types */
import { FunctionalComponent, SVGAttributes } from 'vue'

export interface MenuItem {
  name: string
  isAvailable: boolean
  route: string
  icon: FunctionalComponent<SVGAttributes, {}>
  isMobile?: boolean
  isActive?: boolean
}

export interface MenuSection {
  name?: string
  items: MenuItem[]
}
