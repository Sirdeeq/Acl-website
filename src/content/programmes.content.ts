import type { ProgrammePhase } from '@/types/content.types'

export const AAIRI_PROGRAMME = {
  name: 'AAIRI',
  fullName: 'Adesewa Agribusiness Investment Readiness Initiative',
  tagline: 'Empowering African Agribusinesses with Capability, Capital Readiness, and Investor Access',
  summary:
    'AAIRI is ACL’s flagship programme, designed to help agribusinesses develop their capabilities, strengthen investment readiness and engage with relevant investors and partners.',
  imageSrc: '/images/programmes/aairi-bootcamp.jpg',
  objectives: [
    'Profile and audit high-potential agribusinesses across diverse agricultural value chains.',
    'Strengthen enterprise management, financial governance, and operational records.',
    'Bridge the communication and risk gap between agribusinesses and commercial/DFI financiers.',
    'Facilitate direct investor engagement through curated, high-level deal forums.',
    'Celebrate impactful agribusiness pioneers through the Agribusiness Heroes recognition platform.',
  ],
  phases: [
    {
      phase: 1,
      title: 'Applications and Business Profiling',
      tagline: 'Identifying Viability & Establishing Baseline Readiness',
      description:
        'A comprehensive application and diagnostic phase where agribusinesses submit operational and financial data. Qualified enterprises undergo thorough business profiling to assess current viability, production capacities, governance structures, and capital requirements.',
      deliverables: [
        'Structured application review and eligibility screening',
        'In-depth operational and financial diagnostics',
        'Enterprise readiness scoring and gap identification',
      ],
      imageSrc: '/images/services/digital-support.jpg',
    },
    {
      phase: 2,
      title: 'Capacity-Building Bootcamp',
      tagline: 'Practical Management, Governance & Financial Literacy',
      description:
        'An intensive capacity-building bootcamp focusing on practical business management, financial literacy, investment preparation, digital recordkeeping, and value-chain scalability. Participants receive structured mentorship from seasoned agribusiness leaders and financial experts.',
      deliverables: [
        'Hands-on financial modeling and bookkeeping masterclasses',
        'Investor pitch deck and bankable business plan formulation',
        'Peer-to-peer collaboration and executive mentorship',
      ],
      statusNote:
        'Programme planning includes a proposed bootcamp for 400 participants. Sponsorship and technical partnership development are ongoing, with delivery arrangements, dates and locations subject to confirmation.',
      imageSrc: '/images/programmes/aairi-bootcamp.jpg',
    },
    {
      phase: 3,
      title: 'Investor Engagement Forums',
      tagline: 'Connecting Deal-Ready Enterprises to Capital',
      description:
        'Curated engagement through two dedicated investor forums, connecting top-performing enterprises selected from the bootcamp directly to commercial banks, development finance institutions, venture syndicates, and impact investors seeking verified agricultural pipelines.',
      deliverables: [
        'Live enterprise pitch presentations to accredited financiers',
        'One-on-one deal room sessions and term sheet negotiations',
        'Due-diligence support and post-forum coordination',
      ],
      imageSrc: '/images/services/funding-readiness.jpg',
    },
    {
      phase: 4,
      title: 'Agribusiness Heroes Recognition',
      tagline: 'Celebrating Resilience & Transformational Impact',
      description:
        'A prestigious recognition initiative celebrating outstanding agribusiness owners, community champions, women innovators, and youth leaders who are driving transformative economic and food-system impact across Africa.',
      deliverables: [
        'Public recognition and ecosystem visibility',
        'Induction into the ACL Alumni Leadership Circle',
        'Direct linkages to ongoing trade and expansion opportunities',
      ],
      imageSrc: '/images/community/avc-community-field.jpg',
    },
  ] as ProgrammePhase[],
  sponsorshipOpportunities: [
    {
      title: 'Participant Sponsorship',
      description:
        'Sponsor agribusiness entrepreneurs, women, and youth to participate in the intensive bootcamp and readiness journey.',
    },
    {
      title: 'Technical Support & Training Delivery',
      description:
        'Partner as a knowledge provider, agronomy specialist, or curriculum co-developer for advanced value-chain modules.',
    },
    {
      title: 'Mentorship & Advisory',
      description:
        'Engage executive agribusiness leaders and finance professionals to mentor emerging agri-enterprises through the pipeline.',
    },
    {
      title: 'Investor & Deal Room Engagement',
      description:
        'Participate as an active capital provider, evaluating pre-screened, audit-ready agribusiness investment opportunities.',
    },
  ],
}

export const AVC_COMMUNITY = {
  name: 'AVC Community',
  fullName: 'Agribusiness and Value Chain Community',
  tagline: 'Connecting over 2,000 Agribusiness Owners Across 18 Nigerian States and Global Markets',
  summary:
    'The Agribusiness and Value Chain (AVC) Community is ACL’s ongoing platform for agribusiness owner engagement, learning and opportunity sharing. It provides a continuing relationship beyond individual events, helping ACL understand members’ needs and connect them with relevant services, expertise and opportunities.',
  memberCount: '2,000+',
  stateCoverage: '18 States',
  summitYear: '2025',
  imageSrc: '/images/community/avc-community-field.jpg',
  pillars: [
    {
      title: 'Structured Value-Chain Clusters',
      description:
        'Targeted subgroups organized around specific commodities (grains, tubers, poultry, aquaculture, horticulture) to share practical market data, pricing intelligence, and aggregation power.',
      icon: 'Layers',
    },
    {
      title: 'AVC Learning Programme',
      description:
        'Planned annual programme running from November 2026 to October 2027, combining value-chain-specific capacity building with bi-weekly WhatsApp learning and engagement activities tailored to members’ operational needs.',
      icon: 'BookOpen',
    },
    {
      title: 'Inclusive Livelihoods & Women in Agribusiness',
      description:
        'Focused advocacy and development pathways for women and youth agribusiness owners, including proposed links with the Women Entrepreneurship Forum Africa (WEFA) Nigeria ecosystem (subject to agreed arrangements).',
      icon: 'HeartHandshake',
    },
    {
      title: 'State-Based Network Leadership',
      description:
        'On-the-ground state coordinator representation across 18 Nigerian states ensuring grassroots mobilization, rapid feedback loops, and localized intervention delivery.',
      icon: 'MapPin',
    },
  ],
  developmentPriorities: [
    {
      title: 'AVC Learning Programme (Nov 2026 – Oct 2027)',
      detail:
        'Delivering bi-weekly interactive WhatsApp micro-learning sessions combined with deep-dive technical webinars to provide continuous, accessible support.',
    },
    {
      title: 'State-Based Capacity Building & Financial Partnerships',
      detail:
        'Coordinated capacity building across the 18 states represented in our network. A proposed partnership with the Development Bank of Nigeria seeks financial sponsorship and technical support for community-focused training. (This remains a prospective partnership).',
    },
    {
      title: 'Structured Membership Pathways',
      detail:
        'Developing both accessible free community access and enriched paid-membership tiers with specialized trade matchmaking and institutional linkages.',
    },
  ],
}
