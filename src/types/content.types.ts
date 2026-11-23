export interface ServiceItem {
  id: string
  slug: string
  title: string
  shortDescription: string
  fullDescription: string
  iconName: string
  audience: string[]
  keyDeliverables: string[]
  expectedOutcomes: string[]
  imageSrc?: string
}

export interface ProgrammePhase {
  phase: number
  title: string
  tagline: string
  description: string
  deliverables: string[]
  statusNote?: string
  imageSrc?: string
}

export interface LeadershipMember {
  name: string
  role: string
  honorificTitle?: string
  origin: string
  bio: string[]
  keyHighlights: string[]
  credentials: string[]
  imageSrc?: string
}

export interface InsightItem {
  id: string
  slug: string
  title: string
  category: 'Events' | 'Insights' | 'Programme News'
  date: string
  readTime: string
  summary: string
  content: string[]
  tags: string[]
  imageSrc?: string
  featured?: boolean
}

export interface StateCoordinatorInfo {
  name: string
  region: string
  status: 'Active' | 'Expanding'
}
