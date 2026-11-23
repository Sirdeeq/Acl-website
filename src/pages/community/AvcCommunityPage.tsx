import React from 'react'
import {
  Calendar,
  ArrowRight,
  MessageSquare,
  ShieldCheck,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { AVC_COMMUNITY } from '@/content/programmes.content'
import { NIGERIAN_STATES_NETWORK, INTERNATIONAL_REACH_COUNTRIES } from '@/data/states'
import { OFFICIAL_CONTACT_INFO } from '@/content/navigation.content'

export const AvcCommunityPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 transition-colors duration-300">
      {/* Header */}
      <section className="pb-16 sm:pb-20 border-b border-[#dce3df] dark:border-[#1d2923]">
        <Container>
          <div className="max-w-4xl space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="green" size="md">
                Ongoing Ecosystem Platform
              </Badge>
              <span className="text-xs font-semibold text-[#359540] dark:text-[#7bb173]">
                Agribusiness and Value Chain (AVC) Community
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#245240] dark:text-white leading-tight">
              An Active Network of Over 2,000 Agribusiness Owners Across Africa
            </h1>

            <p className="text-base sm:text-xl text-[#4a5751] dark:text-[#a8b8b0] leading-relaxed">
              {AVC_COMMUNITY.summary}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Button
                href="/contact?category=AVC%20Community%20Membership"
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Join the Community
              </Button>
              <a
                href={OFFICIAL_CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#25D366] text-[#25D366] font-medium text-sm hover:bg-[#25D366]/10 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Connect via WhatsApp</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Community Key Pillars */}
      <section className="py-16 sm:py-24 bg-[#e8ecea] dark:bg-[#121a15] transition-colors border-b border-[#dce3df] dark:border-[#1d2923]">
        <Container>
          <SectionHeading
            badge="Community Structure"
            title="How the AVC Community Delivers Value"
            subtitle="Providing a continuing relationship beyond individual events, connecting members with services, peer learning, and commercial opportunities."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {AVC_COMMUNITY.pillars.map((pillar, index) => (
              <Card key={index} variant="white" className="p-8 space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-[#e8f3ed] dark:bg-[#18261f] text-[#359540] dark:text-[#4ade80] flex items-center justify-center font-bold">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-serif font-bold text-[#245240] dark:text-white">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#4a5751] dark:text-[#a8b8b0] leading-relaxed">
                  {pillar.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* 19 Nigerian States Network */}
      <section id="state-network" className="py-16 sm:py-24 bg-[#f0f3f1] dark:bg-[#0e1411] border-b border-[#dce3df] dark:border-[#1d2923] transition-colors">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <Badge variant="green" size="md">
                Grassroots Coverage
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#245240] dark:text-white leading-tight">
                State Coordinator Representation Across 19 Nigerian States
              </h2>
              <p className="text-sm sm:text-base text-[#4a5751] dark:text-[#a8b8b0] leading-relaxed">
                ACL’s AVC community is supported by state coordinator representation across 19 states in Nigeria. This on-the-ground network provides an active foundation for identifying local farming challenges, mobilizing participants, and coordinating targeted interventions.
              </p>
              <div className="p-4 rounded-xl bg-[#e8f3ed] dark:bg-[#16271e] border border-[#bbdecc]/50 dark:border-[#274434] text-xs text-[#245240] dark:text-[#bbdecc] flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#359540] dark:text-[#4ade80] shrink-0 mt-0.5" />
                <span>
                  Our state coordinators work closely with farmer cooperatives, commodity clusters, and state agricultural bureaus.
                </span>
              </div>
            </div>

            {/* States Matrix */}
            <div className="lg:col-span-7 bg-white dark:bg-[#141d18] rounded-3xl p-8 border border-[#dce3df] dark:border-[#22332b] space-y-6 shadow-xs">
              <div className="flex items-center justify-between border-b border-[#dce3df] dark:border-[#22332b] pb-4">
                <h3 className="text-lg font-serif font-bold text-[#245240] dark:text-white">
                  Active State Network
                </h3>
                <span className="text-xs text-[#359540] dark:text-[#4ade80] font-semibold">
                  19 States Fully Represented
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {NIGERIAN_STATES_NETWORK.map((state) => (
                  <div
                    key={state.name}
                    className="p-3.5 rounded-xl bg-[#f8faf8] dark:bg-[#101713] border border-[#dce3df] dark:border-[#22332b] flex items-center justify-between"
                  >
                    <div>
                      <span className="text-xs font-bold text-[#245240] dark:text-white block">
                        {state.name} State
                      </span>
                      <span className="text-[10px] text-[#4a5751] dark:text-[#a8b8b0]">{state.region}</span>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-[#359540] dark:bg-[#4ade80]" />
                  </div>
                ))}
              </div>

              {/* International Reach */}
              <div className="pt-4 border-t border-[#dce3df] dark:border-[#22332b]">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#7bb173] block mb-2">
                  Continental & Diaspora Representation
                </span>
                <p className="text-xs text-[#4a5751] dark:text-[#a8b8b0] mb-3">
                  Representation extends across key African markets and international trade hubs:
                </p>
                <div className="flex flex-wrap gap-2">
                  {INTERNATIONAL_REACH_COUNTRIES.map((country) => (
                    <span
                      key={country.name}
                      className="px-3 py-1 rounded-full bg-[#f8faf8] dark:bg-[#101713] border border-[#dce3df] dark:border-[#22332b] text-xs text-[#245240] dark:text-[#bbdecc] font-medium"
                    >
                      {country.name} ({country.region})
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Upcoming Learning Programme & Development Priorities */}
      <section id="learning-programme" className="py-16 sm:py-24 bg-[#e8ecea] dark:bg-[#121a15] transition-colors">
        <Container>
          <SectionHeading
            badge="Ongoing Roadmap"
            title="AVC Development Priorities & Learning Rhythm"
            subtitle="Structured activities and continuous capacity development for community members."
          />

          <div className="max-w-4xl mx-auto space-y-6">
            {AVC_COMMUNITY.developmentPriorities.map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#141d18] rounded-2xl p-6 sm:p-8 border border-[#dce3df] dark:border-[#22332b] shadow-xs space-y-2 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-[#359540] dark:text-[#4ade80]" />
                  <h4 className="text-lg font-serif font-bold text-[#245240] dark:text-white">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#4a5751] dark:text-[#a8b8b0] leading-relaxed pl-8">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center pt-12">
            <Button
              href="/contact?category=AVC%20Community%20Membership"
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Express Interest in Joining AVC Community
            </Button>
          </div>
        </Container>
      </section>
    </div>
  )
}