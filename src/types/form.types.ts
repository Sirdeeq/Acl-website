export type InquiryCategory =
  | 'Agribusiness Support'
  | 'AAIRI Programme'
  | 'AVC Community Membership'
  | 'Investor & Financial Partnership'
  | 'Development & Donor Collaboration'
  | 'Farm Programme Management'
  | 'General Inquiries'

export interface ContactFormData {
  fullName: string
  email: string
  phoneNumber: string
  organization?: string
  stateOrLocation?: string
  category: InquiryCategory
  message: string
  consentGiven: boolean
}

export interface AairiEoiFormData {
  fullName: string
  agribusinessName: string
  email: string
  phone: string
  state: string
  valueChain: string
  annualTurnoverRange?: string
  operationalDuration?: string
  interestReason: string
}
