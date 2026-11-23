import type { ServiceItem } from '@/types/content.types'

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'farm-programme-management',
    slug: 'agribusiness-farm-programme-management',
    title: 'Agribusiness and Farm Programme Management',
    shortDescription:
      'Identifying growth barriers, establishing operational priorities, and coordinating hands-on management support to achieve enterprise goals.',
    fullDescription:
      'ACL acts as a dedicated Farm Programme Manager, helping farmers and agribusiness owners identify critical growth barriers, establish realistic operational milestones, and coordinate the strategic execution needed to turn agricultural potential into profitable, sustainable reality.',
    iconName: 'Tractor',
    imageSrc: '/images/services/farm-management.jpg',
    audience: [
      'Commercial farm owners seeking operational efficiency',
      'Agricultural cooperatives requiring governance structure',
      'Agricultural investors needing on-ground farm oversight',
      'Outgrower programme promoters',
    ],
    keyDeliverables: [
      'Operational gap diagnostics and baseline assessments',
      'Farm cycle planning, budgeting, and resource allocation',
      'Standard Operating Procedures (SOPs) for crop and livestock production',
      'Input procurement and supply-chain coordination',
      'Yield tracking, post-harvest loss management, and reporting',
    ],
    expectedOutcomes: [
      'Reduced operational waste and optimized input utilization',
      'Predictable farm cycles and improved production yields',
      'Institutionalized governance and operational accountability',
    ],
  },
  {
    id: 'capacity-building',
    slug: 'capacity-building-enterprise-development',
    title: 'Capacity Building and Enterprise Development',
    shortDescription:
      'Practical training in agribusiness management, financial literacy, export readiness, and value-chain development.',
    fullDescription:
      'ACL develops targeted, practical learning opportunities centered around the real-world operational challenges of African agribusiness owners. Our modules bridge technical agronomy with commercial business discipline, ensuring sustainable enterprise scalability.',
    iconName: 'GraduationCap',
    imageSrc: '/images/services/capacity-building.jpg',
    audience: [
      'Emerging agribusiness entrepreneurs and SME operators',
      'Women and youth-led agricultural ventures',
      'State cooperative leadership teams',
      'Value-chain processors and aggregators',
    ],
    keyDeliverables: [
      'Executive agribusiness management masterclasses',
      'Financial recordkeeping and cash-flow management workshops',
      'Export documentation, standards, and packaging requirements',
      'Value-addition and post-harvest handling frameworks',
      'Continuous peer-learning forums and mentorship pairings',
    ],
    expectedOutcomes: [
      'Enhanced enterprise financial literacy and commercial competence',
      'Improved product quality meeting national and international benchmarks',
      'Empowerment of women and youth agri-entrepreneurs',
    ],
  },
  {
    id: 'funding-readiness',
    slug: 'funding-investment-readiness',
    title: 'Funding and Investment Readiness',
    shortDescription:
      'Business profiling, financial documentation, and strategic preparation for engagement with banks, DFIs, and private investors.',
    fullDescription:
      'ACL supports business profiling and rigorous preparation for engagement with commercial financial institutions, development finance organisations (DFIs), and private investors. Our role is to bridge the readiness gap and facilitate relevant connections, positioning agribusinesses for credible investment evaluation.',
    iconName: 'TrendingUp',
    imageSrc: '/images/services/funding-readiness.jpg',
    audience: [
      'Agribusinesses preparing for commercial debt or equity financing',
      'Enterprises seeking DFI concessional loans or catalytic grants',
      'Impact investors evaluating pipeline deal flows',
    ],
    keyDeliverables: [
      'Agribusiness investment readiness profiling and audit',
      'Financial model development and cash-flow forecasts',
      'Bankable business plans and pitch documentation',
      'Data room preparation and corporate governance review',
      'Bespoke matchmaking with financial institutions and impact funds',
    ],
    expectedOutcomes: [
      'Substantially elevated institutional creditworthiness and deal readiness',
      'Structured presentation that accelerates due-diligence cycles',
      'Access to diversified capital channels (debt, equity, grants)',
    ],
  },
  {
    id: 'market-access',
    slug: 'market-access-trade-matchmaking',
    title: 'Market Access and Trade Matchmaking',
    shortDescription:
      'Direct facilitation of connections with institutional buyers, commercial off-takers, and export routes to market.',
    fullDescription:
      'ACL connects primary producers and food processors with commercial off-takers, corporate buyers, supermarket chains, industrial processors, and international trade routes, de-risking trade transactions and securing guaranteed demand.',
    iconName: 'Store',
    imageSrc: '/images/services/market-access.jpg',
    audience: [
      'Commercial grain, tuber, and horticulture producers',
      'Agro-processing SMEs seeking retail or wholesale contracts',
      'Institutional off-takers requiring consistent supply volumes',
      'Export syndicates and regional cross-border traders',
    ],
    keyDeliverables: [
      'Off-taker contract negotiation and supply agreements',
      'Trade matchmaking sessions and buyer-seller forums',
      'Quality control, certification alignment, and traceability support',
      'Aggregation logistics and fulfillment advisory',
      'Cross-border and regional trade facilitation across Africa',
    ],
    expectedOutcomes: [
      'Guaranteed market off-take and reduced post-harvest spoilage',
      'Improved price stability and cash-flow predictability',
      'Integration into formal national and continental food supply chains',
    ],
  },
  {
    id: 'digital-business',
    slug: 'digital-business-support',
    title: 'Digital Business Support',
    shortDescription:
      'Inventory digitisation, digital literacy, organised records, and modern tech adoption for streamlined farm administration.',
    fullDescription:
      'ACL modernizes agricultural administration by driving inventory digitization, digital recordkeeping, cloud accounting adoption, and farm-gate data collection. We help enterprises migrate from informal records to structured digital data that unlocks financing and operational clarity.',
    iconName: 'Smartphone',
    imageSrc: '/images/services/digital-support.jpg',
    audience: [
      'Agribusinesses transitioning from paper records to digital systems',
      'Farms needing inventory, payroll, and stock management solutions',
      'Aggregators managing multi-location buying points',
    ],
    keyDeliverables: [
      'Digital inventory and input tracking tool deployment',
      'Point-of-sale and digitized farm-gate payment systems',
      'Digital literacy training for farm administrative staff',
      'Cloud recordkeeping and financial reporting integration',
      'Data-driven operational dashboards for enterprise owners',
    ],
    expectedOutcomes: [
      'Real-time visibility over inventory, sales, and operational costs',
      'Transparent audit trails that satisfy commercial financiers',
      'Enhanced operational efficiency and reduced stock leakage',
    ],
  },
  {
    id: 'strategic-partnerships',
    slug: 'strategic-partnerships-programme-development',
    title: 'Strategic Partnerships and Programme Development',
    shortDescription:
      'Designing collaborative multi-stakeholder initiatives with banks, development agencies, academic bodies, and government.',
    fullDescription:
      'ACL conceptualizes, coordinates, and executes collaborative agribusiness initiatives bringing together commercial financiers, international development agencies, governmental departments, technical institutions, and the private sector for high-impact food security programmes.',
    iconName: 'Handshake',
    imageSrc: '/images/services/partnerships.jpg',
    audience: [
      'Development finance institutions (DFIs) and donor agencies',
      'State and federal agricultural ministries and agencies',
      'Corporate social investment (CSI) and ESG initiatives',
      'Agricultural research institutes and academic partners',
    ],
    keyDeliverables: [
      'Multi-stakeholder programme design, scoping, and governance',
      'Grassroots mobilization leveraging our 19-state network',
      'Programme monitoring, evaluation, and impact documentation',
      'Sponsorship frameworks and co-funding structures',
      'Policy advocacy and public-private dialogue platforms',
    ],
    expectedOutcomes: [
      'Maximized development impact through coordinated interventions',
      'Scalable programme delivery across Nigeria and Africa',
      'Transparent, audit-ready reporting for donor and partner boards',
    ],
  },
]
