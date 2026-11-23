export interface NavSubItem {
  title: string
  href: string
  description: string
  badge?: string
}

export interface NavItem {
  title: string
  href: string
  items?: NavSubItem[]
}

export interface FooterLinkGroup {
  title: string
  links: {
    label: string
    href: string
    isExternal?: boolean
  }[]
}
