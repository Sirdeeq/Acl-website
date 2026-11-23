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
import { PARTNERS_CONTENT } from '@/content/partners.content'

export const PartnersPage: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Building2: <Building2 className="w-8 h-8 text-[#359540]" />,
    Globe: <Globe className="w-8 h-8 text-[#359540]" />,
    Truck: <Truck className="w-8 h-8 text-[#359540]" />,
    GraduationCap: <GraduationCap className="w-8 h-8 text-[#359540]" />,
  }

  return (
    <div className="py-12 sm:py-20">
      {/* Header */}
      <section className="pb-16 sm:pb-20 border-b border-[#e2e7e4]">
        <Container>
          <div className="max-w-4xl space-y-6">
            <Badge variant="green" size="md">
              Institutional Engagement
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#245240] leading-tight">
              {PARTNERS_CONTENT.headline}
            </h1>

            <p className="text-base sm:text-xl text-[#4a5751] leading-relaxed">
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

      {/* Partner Categories */}
      <section className="py-16 sm:py-24 bg-[#fcfcfb]">
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
                className="bg-white rounded-3xl p-8 sm:p-10 border border-[#e2e7e4] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="p-3.5 rounded-2xl bg-[#f0f7f2] w-fit mb-4">
                    {iconMap[partner.icon] || <Building2 className="w-8 h-8 text-[#359540]" />}
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-[#245240] mb-3">
                    {partner.title}
                  </h3>

                  <p className="text-sm text-[#4a5751] leading-relaxed mb-6">
                    {partner.description}
                  </p>

                  <div className="pt-4 border-t border-[#e2e7e4]">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#7bb173] block mb-3">
                      Mutual Value & Outcomes
                    </span>
                    <ul className="space-y-2 text-xs text-[#245240]">
                      {partner.benefits.map((b, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#359540] shrink-0 mt-0.5" />
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
      <section className="py-16 sm:py-24 bg-white border-t border-[#e2e7e4]">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <Badge variant="amber" size="md">
                Development Priorities
              </Badge>
              <h2 className="text-3xl font-serif font-bold text-[#245240]">
                Prospective & Ecosystem Alignments
              </h2>
              <p className="text-sm text-[#4a5751]">
                Expanding capacity-building and inclusive value-chain opportunities across Nigeria.
              </p>
            </div>

            <div className="space-y-6">
              {PARTNERS_CONTENT.prospectiveInitiatives.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#fcfcfb] rounded-2xl p-6 sm:p-8 border border-[#e2e7e4] space-y-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e2e7e4] pb-3">
                    <h3 className="text-lg font-serif font-bold text-[#245240]">
                      {item.partner}
                    </h3>
                    <Badge variant={item.status.includes('Prospective') ? 'amber' : 'green'} size="sm">
                      {item.status}
                    </Badge>
                  </div>
                  <span className="text-xs font-semibold text-[#359540] block">
                    {item.focus}
                  </span>
                  <p className="text-xs sm:text-sm text-[#4a5751] leading-relaxed">
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
