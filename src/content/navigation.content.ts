import type { FooterLinkGroup, NavItem } from '@/types/navigation.types'

export const OFFICIAL_CONTACT_INFO = {
  companyName: 'Adesewa Concept Ltd',
  abbreviation: 'ACL',
  primaryPhone: '+234 803 349 8179',
  secondaryPhone: '+234 913 078 3287',
  primaryEmail: 'adesewaconcept@gmail.com',
  websiteDomain: 'www.aairi.africa',
  whatsappNumber: '+2348033498179',
  whatsappUrl: 'https://wa.me/2348033498179?text=Hello%20Adesewa%20Concept%20Ltd,%20I%20would%20like%20to%20inquire%20about%20your%20services%20and%20programmes.',
  whatsappGroupUrl: 'https://chat.whatsapp.com/invite/ADESWACONCEPT-AVC-COMMUNITY',
  headquarters: 'Ekiti State & Nationwide Network (19 States Coordinator Network), Nigeria',
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About ACL',
    href: '/about',
  },
  {
    title: 'Services',
    href: '/services',
    items: [
      {
        title: 'Agribusiness & Farm Management',
        href: '/services/agribusiness-farm-programme-management',
        description: 'Operational coordination, gap diagnostics, and hands-on farm programme management.',
      },
      {
        title: 'Capacity Building & Development',
        href: '/services/capacity-building-enterprise-development',
        description: 'Practical business management, financial literacy, and value-chain masterclasses.',
      },
      {
        title: 'Funding & Investment Readiness',
        href: '/services/funding-investment-readiness',
        description: 'Business profiling, bankable documentation, and investor matchmaking.',
      },
      {
        title: 'Market Access & Trade Matchmaking',
        href: '/services/market-access-trade-matchmaking',
        description: 'Direct linkages to institutional buyers, off-takers, and commercial trade routes.',
      },
      {
        title: 'Digital Business Support',
        href: '/services/digital-business-support',
        description: 'Inventory digitization, cloud bookkeeping, and farm-gate technology adoption.',
      },
      {
        title: 'Strategic Partnerships',
        href: '/services/strategic-partnerships-programme-development',
        description: 'Multi-stakeholder initiative design with DFIs, banks, and development agencies.',
      },
    ],
  },
  {
    title: 'Programmes',
    href: '/programmes/aairi',
    items: [
      {
        title: 'AAIRI Flagship Programme',
        href: '/programmes/aairi',
        description: 'African Agribusiness Investment and Recognition Initiative (4-phase journey & deal forums).',
        badge: 'Flagship',
      },
      {
        title: 'AVC Community',
        href: '/avc-community',
        description: '2,000+ agribusiness owners across 19 Nigerian states and African markets.',
      },
    ],
  },
  {
    title: 'Partners & Investors',
    href: '/partners',
  },
  {
    title: 'Insights & Events',
    href: '/insights',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
]

export const FOOTER_LINK_GROUPS: FooterLinkGroup[] = [
  {
    title: 'Core Services',
    links: [
      { label: 'Farm Programme Management', href: '/services/agribusiness-farm-programme-management' },
      { label: 'Capacity Building', href: '/services/capacity-building-enterprise-development' },
      { label: 'Investment Readiness', href: '/services/funding-investment-readiness' },
      { label: 'Market Access & Off-Takers', href: '/services/market-access-trade-matchmaking' },
      { label: 'Digital Business Support', href: '/services/digital-business-support' },
      { label: 'Strategic Partnerships', href: '/services/strategic-partnerships-programme-development' },
    ],
  },
  {
    title: 'Programmes & Community',
    links: [
      { label: 'AAIRI Investment Readiness', href: '/programmes/aairi' },
      { label: 'AVC Community (2,000+)', href: '/avc-community' },
      { label: 'State Coordinator Network (19 States)', href: '/avc-community#state-network' },
      { label: 'AVC Learning Programme (2026-2027)', href: '/avc-community#learning-programme' },
      { label: 'AVC Summit 2025 Retrospective', href: '/insights/avc-summit-2025-convening-africas-agribusiness-ecosystem' },
    ],
  },
  {
    title: 'Company & Governance',
    links: [
      { label: 'About Adesewa Concept Ltd', href: '/about' },
      { label: 'Vision, Mission & Purpose', href: '/about#vision-mission' },
      { label: 'Our 4-Step Methodology', href: '/about#how-we-work' },
      { label: 'Leadership Profile', href: '/about#leadership' },
      { label: 'Partnership Framework', href: '/partners' },
      { label: 'Official Contact', href: '/contact' },
    ],
  },
  {
    title: 'Legal & Compliance',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Data Protection & Consent', href: '/contact#consent' },
    ],
  },
]
