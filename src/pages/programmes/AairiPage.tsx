import React, { useState } from 'react'
import {
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { AAIRI_PROGRAMME } from '@/content/programmes.content'
import { AairiEnquiryModal } from '@/features/programmes/AairiEnquiryModal'

export const AairiPage: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="py-12 sm:py-20 transition-colors duration-300">
      {/* Header Banner */}
      <section className="pb-16 sm:pb-24 border-b border-[#dce3df] dark:border-[#1d2923]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="green" size="md">
                  Flagship Initiative
                </Badge>
                <span className="text-xs font-semibold text-[#359540] dark:text-[#7bb173]">
                  Adesewa Agribusiness Investment Readiness Initiative
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#245240] dark:text-white leading-tight">
                Preparing African Agribusinesses for Investment & Sustainable Growth
              </h1>

              <p className="text-base sm:text-xl text-[#4a5751] dark:text-[#a8b8b0] leading-relaxed">
                {AAIRI_PROGRAMME.summary}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <Button
                  onClick={() => setModalOpen(true)}
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Register Expression of Interest (EOI)
                </Button>
                <Button
                  href="/contact"
                  variant="outline"
                  size="lg"
                >
                  Inquire on Sponsorship
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-3xl overflow-hidden shadow-xl border-4 border-white/80 dark:border-[#22332b] aspect-4/3">
              <img
                src={AAIRI_PROGRAMME.imageSrc}
                alt="AAIRI Bootcamp and deal forums"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Programme Objectives */}
      <section className="py-16 sm:py-24 bg-[#e8ecea] dark:bg-[#121a15] transition-colors border-b border-[#dce3df] dark:border-[#1d2923]">
        <Container>
          <SectionHeading
            badge="Strategic Mandate"
            title="Core Programme Objectives"
            subtitle="Bridging the gap between viable agricultural producers and the stringent capital requirements of commercial and development financiers."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AAIRI_PROGRAMME.objectives.map((obj, i) => (
              <Card key={i} variant="white" className="p-6 sm:p-8">
                <div className="w-8 h-8 rounded-full bg-[#e8f3ed] dark:bg-[#18261f] text-[#359540] dark:text-[#4ade80] flex items-center justify-center font-bold text-xs mb-4">
                  0{i + 1}
                </div>
                <p className="text-sm text-[#245240] dark:text-[#e4ebe7] font-medium leading-relaxed">
                  {obj}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* The Four-Phase Journey */}
      <section className="py-16 sm:py-24 bg-[#f0f3f1] dark:bg-[#0e1411] border-b border-[#dce3df] dark:border-[#1d2923] transition-colors">
        <Container>
          <SectionHeading
            badge="The 4-Phase Pathway"
            title="The AAIRI Programme Journey"
            subtitle="A structured, sequential methodology guiding enterprises from diagnostic profiling to live investor deal forums."
          />

          <div className="space-y-8 max-w-4xl mx-auto">
            {AAIRI_PROGRAMME.phases.map((phase) => (
              <div
                key={phase.phase}
                className="bg-white dark:bg-[#141d18] rounded-3xl p-8 sm:p-10 border border-[#dce3df] dark:border-[#22332b] hover:border-[#359540]/60 dark:hover:border-[#4ade80]/60 transition-all duration-300 shadow-xs"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-[#dce3df] dark:border-[#22332b]">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-[#245240] dark:bg-[#1f4a39] text-white flex items-center justify-center font-bold text-base">
                      {phase.phase}
                    </span>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#245240] dark:text-white">
                        {phase.title}
                      </h3>
                      <span className="text-xs font-semibold text-[#359540] dark:text-[#4ade80]">
                        {phase.tagline}
                      </span>
                    </div>
                  </div>
                  <Badge variant="sand" size="sm">
                    Phase 0{phase.phase}
                  </Badge>
                </div>

                <p className="text-sm text-[#4a5751] dark:text-[#a8b8b0] leading-relaxed mb-6">
                  {phase.description}
                </p>

                {phase.statusNote && (
                  <div className="mb-6 p-4 rounded-xl bg-amber-50/80 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 text-xs text-amber-800 dark:text-amber-300 flex items-start gap-2.5">
                    <ShieldAlert className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>Proposed Initiative Note:</strong> {phase.statusNote}
                    </span>
                  </div>
                )}

                <div className="bg-[#f8faf8] dark:bg-[#101713] rounded-2xl p-5 border border-[#dce3df] dark:border-[#22332b]">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#7bb173] block mb-2">
                    Key Programme Milestones
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#245240] dark:text-[#e4ebe7]">
                    {phase.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#359540] dark:text-[#4ade80] shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Sponsorship Opportunities */}
      <section className="py-16 sm:py-24 bg-[#1b4332] text-white">
        <Container>
          <div className="max-w-3xl mb-12">
            <Badge variant="sand" size="md" className="bg-white/10 text-white border-white/20 mb-3">
              Partnership & Co-Creation
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
              AAIRI Programme Sponsorship & Support Pathways
            </h2>
            <p className="text-sm sm:text-base text-[#bbdecc] leading-relaxed">
              We invite financial institutions, development finance organisations (DFIs), and corporate partners to collaborate with us across four high-impact sponsorship avenues:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {AAIRI_PROGRAMME.sponsorshipOpportunities.map((sp, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-colors"
              >
                <h4 className="text-lg font-serif font-bold text-white mb-2">
                  {sp.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#bbdecc] leading-relaxed">
                  {sp.description}
                </p>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-serif font-bold text-white mb-1">
                Express Interest in AAIRI Today
              </h4>
              <p className="text-xs text-[#bbdecc]">
                Applications and partnership opportunities are open for expression of interest.
              </p>
            </div>
            <Button onClick={() => setModalOpen(true)} variant="white" size="lg">
              Submit Expression of Interest
            </Button>
          </div>
        </Container>
      </section>

      {/* Modal */}
      <AairiEnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  )
}