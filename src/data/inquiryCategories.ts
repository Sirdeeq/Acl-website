import type { InquiryCategory } from '@/types/form.types'

export const INQUIRY_CATEGORIES: { value: InquiryCategory; label: string; description: string }[] = [
  {
    value: 'Agribusiness Support',
    label: 'Agribusiness Advisory & Enterprise Support',
    description: 'Direct operational, financial, and strategic management support for farm owners.',
  },
  {
    value: 'AAIRI Programme',
    label: 'AAIRI Programme Expression of Interest',
    description: 'Participation inquiry for the 4-phase investment readiness initiative.',
  },
  {
    value: 'AVC Community Membership',
    label: 'AVC Community Membership',
    description: 'Joining the network of 2,000+ agribusiness owners and state clusters.',
  },
  {
    value: 'Investor & Financial Partnership',
    label: 'Investor & Financial Institution Partnership',
    description: 'Financing pathways, co-investment, or deal pipeline engagement.',
  },
  {
    value: 'Development & Donor Collaboration',
    label: 'Development Agency & Donor Collaboration',
    description: 'Grant management, community empowerment, and state-level programmes.',
  },
  {
    value: 'Farm Programme Management',
    label: 'Farm Programme Management Services',
    description: 'Comprehensive design and execution of commercial agricultural programmes.',
  },
  {
    value: 'General Inquiries',
    label: 'General Inquiries',
    description: 'Media, speaking engagements, and general correspondence.',
  },
]
