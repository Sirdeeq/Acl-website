import React from 'react'
import {
  Building2,
  Globe,
  Truck,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PARTNERS_CONTENT, STRATEGIC_PARTNERS } from '@/content/partners.content'

export const PartnersPage: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Building2: <Building2 className="w-8 h-8 text-[#359540] dark:text-[#4ade80]" />,
    Globe: <Globe className="w-8 h-8 text-[#359540] dark:text-[#4ade80]" />,
    Truck: <Truck className="w-8 h-8 text-[#359540] dark:text-[#4ade80]" />,
    GraduationCap: <GraduationCap className="w-8 h-8 text-[#359540] dark:text-[#4ade80]" />,
  }

  return (
    <div className="py-12 sm:py-20 transition-colors duration-300">
      {/* Header */}
      <section className="pb-16 sm:pb-20 border-b border-[#dce3df] dark:border-[#1d2923]">
        <Container>
          <div className="max-w-4xl space-y-6">
            <Badge variant="green" size="md">
              Institutional Engagement
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#245240] dark:text-white leading-tight">
              {PARTNERS_CONTENT.headline}
            </h1>

            <p className="text-base sm:text-xl text-[#4a5751] dark:text-[#a8b8b0] leading-relaxed">
              {PARTNERS_CONTENT.subheadline}
            </p>

            <div className="pt-2">
              <Button href="/contact?category=Investor%20%26%20Financial%20Partnership" variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Initiate Partnership Discussion
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Strategic Partners & Global Ecosystem */}
      <section className="py-16 sm:py-24 bg-[#f0f3f1] dark:bg-[#0e1411] transition-colors border-b border-[#dce3df] dark:border-[#1d2923]">
        <Container>
          <SectionHeading
            badge="Strategic Alliances"
            title="Strategic Partners & Global Ecosystem"
            subtitle="Adesewa Concept Ltd collaborates with accredited government institutions, international trade councils, and technology leaders to build resilient African agribusiness value chains."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {STRATEGIC_PARTNERS.map((partner) => (
              <div
                key={partner.id}
                className="bg-white dark:bg-[#141d18] rounded-3xl p-6 sm:p-8 border border-[#dce3df] dark:border-[#22332b] shadow-xs flex flex-col justify-between transition-all hover:border-[#359540]/60 hover:shadow-md"
              >
                <div>
                  {/* Clean white badge for logo to ensure optimal contrast across Dark, Dark Grey, and Light themes */}
                  <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#e5ebe7] dark:border-white/10 shadow-xs h-32 flex items-center justify-center mb-6 overflow-hidden">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="max-h-20 max-w-full object-contain"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#359540] dark:text-[#4ade80]">
                      {partner.role}
                    </span>
                    {partner.regOrLocation && (
                      <span className="text-[10px] px-2 py-0.5 rounded-md bg-[#e8ecea] dark:bg-[#1c2c22] text-[#4a5751] dark:text-[#9bb0a4] font-mono">
                        {partner.regOrLocation}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-serif font-bold text-[#245240] dark:text-white mb-3">
                    {partner.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4a5751] dark:text-[#a8b8b0] leading-relaxed mb-6">
                    {partner.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#dce3df] dark:border-[#22332b]">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#7bb173] block mb-2.5">
                    Collaboration Focus
                  </span>
                  <ul className="space-y-2 text-xs text-[#245240] dark:text-[#e4ebe7]">
                    {partner.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#359540] dark:text-[#4ade80] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Partner Categories */}
      <section className="py-16 sm:py-24 bg-[#e8ecea] dark:bg-[#121a15] transition-colors border-b border-[#dce3df] dark:border-[#1d2923]">
        <Container>
          <SectionHeading
            badge="Collaboration Models"
            title="Who Adesewa Concept Ltd Works With"
            subtitle="Coordinating complementary resources, technical expertise, and financing pathways around the varied needs of agribusiness owners."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PARTNERS_CONTENT.partnerCategories.map((partner) => (
              <div
                key={partner.id}
                className="bg-white dark:bg-[#141d18] rounded-3xl p-8 sm:p-10 border border-[#dce3df] dark:border-[#22332b] shadow-xs flex flex-col justify-between transition-colors"
              >
                <div>
                  <div className="p-3.5 rounded-2xl bg-[#e8f3ed] dark:bg-[#18261f] w-fit mb-4">
                    {iconMap[partner.icon] || <Building2 className="w-8 h-8 text-[#359540] dark:text-[#4ade80]" />}
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-[#245240] dark:text-white mb-3">
                    {partner.title}
                  </h3>

                  <p className="text-sm text-[#4a5751] dark:text-[#a8b8b0] leading-relaxed mb-6">
                    {partner.description}
                  </p>

                  <div className="pt-4 border-t border-[#dce3df] dark:border-[#22332b]">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#7bb173] block mb-3">
                      Mutual Value & Outcomes
                    </span>
                    <ul className="space-y-2 text-xs text-[#245240] dark:text-[#e4ebe7]">
                      {partner.benefits.map((b, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#359540] dark:text-[#4ade80] shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Prospective Initiatives Callout */}
      <section className="py-16 sm:py-24 bg-[#f0f3f1] dark:bg-[#0e1411] transition-colors">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <Badge variant="amber" size="md">
                Development Priorities
              </Badge>
              <h2 className="text-3xl font-serif font-bold text-[#245240] dark:text-white">
                Prospective & Ecosystem Alignments
              </h2>
              <p className="text-sm text-[#4a5751] dark:text-[#a8b8b0]">
                Expanding capacity-building and inclusive value-chain opportunities across Nigeria.
              </p>
            </div>

            <div className="space-y-6">
              {PARTNERS_CONTENT.prospectiveInitiatives.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-[#141d18] rounded-2xl p-6 sm:p-8 border border-[#dce3df] dark:border-[#22332b] space-y-3 shadow-xs transition-colors"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#dce3df] dark:border-[#22332b] pb-3">
                    <h3 className="text-lg font-serif font-bold text-[#245240] dark:text-white">
                      {item.partner}
                    </h3>
                    <Badge variant={item.status.includes('Prospective') ? 'amber' : 'green'} size="sm">
                      {item.status}
                    </Badge>
                  </div>
                  <span className="text-xs font-semibold text-[#359540] dark:text-[#4ade80] block">
                    {item.focus}
                  </span>
                  <p className="text-xs sm:text-sm text-[#4a5751] dark:text-[#a8b8b0] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Direct Intake CTA */}
      <section className="py-16 sm:py-24 bg-[#1b4332] text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Explore Collaborative Agribusiness Development
            </h2>
            <p className="text-sm sm:text-base text-[#bbdecc] leading-relaxed">
              Join us in building inclusive agribusiness capability, bankable deal pipelines, and resilient food supply chains.
            </p>
            <Button
              href="/contact?category=Investor%20%26%20Financial%20Partnership"
              variant="white"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Submit Partnership Proposal
            </Button>
          </div>
        </Container>
      </section>
    </div>
  )
}