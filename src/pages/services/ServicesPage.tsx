import React from 'react'
import { Link } from 'react-router-dom'
import {
  Tractor,
  GraduationCap,
  TrendingUp,
  Store,
  Smartphone,
  Handshake,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { SERVICES_LIST } from '@/content/services.content'

const renderServiceIcon = (name: string) => {
  const className = "w-6 h-6 text-[#359540] dark:text-[#4ade80]"
  switch (name) {
    case 'Tractor': return <Tractor className={className} />
    case 'GraduationCap': return <GraduationCap className={className} />
    case 'TrendingUp': return <TrendingUp className={className} />
    case 'Store': return <Store className={className} />
    case 'Smartphone': return <Smartphone className={className} />
    case 'Handshake': return <Handshake className={className} />
    default: return <Tractor className={className} />
  }
}

export const ServicesPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 transition-colors duration-300">
      {/* Page Header */}
      <section className="pb-16 sm:pb-20 border-b border-[#dce3df] dark:border-[#1d2923]">
        <Container>
          <div className="max-w-3xl space-y-4">
            <Badge variant="green" size="md">
              Our Capabilities & Solutions
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#245240] dark:text-white leading-tight">
              Strategic Agribusiness Services
            </h1>
            <p className="text-lg text-[#4a5751] dark:text-[#a8b8b0] leading-relaxed">
              ACL delivers targeted strategic and operational management support across six core areas, helping agribusiness owners strengthen enterprise foundations, prepare for institutional financing, and secure profitable routes to market.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Detailed List with Photography */}
      <section className="py-16 sm:py-24 bg-[#e8ecea] dark:bg-[#121a15] transition-colors border-b border-[#dce3df] dark:border-[#1d2923]">
        <Container>
          <div className="space-y-12">
            {SERVICES_LIST.map((service, index) => (
              <div
                key={service.id}
                id={service.slug}
                className="bg-white dark:bg-[#141d18] rounded-3xl overflow-hidden border border-[#dce3df] dark:border-[#22332b] shadow-xs scroll-mt-24 transition-colors"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-8 items-stretch">
                  {/* Photo Column */}
                  <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full overflow-hidden bg-[#e8f3ed] dark:bg-[#18261f]">
                    <img
                      src={service.imageSrc}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:hidden" />
                    <div className="absolute top-4 left-4 p-3 rounded-2xl bg-white/90 dark:bg-[#141d18]/90 backdrop-blur-xs text-[#359540] dark:text-[#4ade80] shadow-sm">
                      {renderServiceIcon(service.iconName)}
                    </div>
                    <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-black/60 text-white text-xs font-mono font-bold backdrop-blur-xs">
                      Pillar 0{index + 1}
                    </span>
                  </div>

                  {/* Details Column */}
                  <div className="lg:col-span-7 p-8 sm:p-10 space-y-6 flex flex-col justify-between">
                    <div className="space-y-4">
                      <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#245240] dark:text-white">
                        {service.title}
                      </h2>

                      <p className="text-sm text-[#4a5751] dark:text-[#a8b8b0] leading-relaxed">
                        {service.fullDescription}
                      </p>

                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#359540] dark:text-[#7bb173] block mb-2">
                          Target Beneficiaries
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {service.audience.map((item, i) => (
                            <span
                              key={i}
                              className="text-xs px-3 py-1 rounded-full bg-[#f0f3f1] dark:bg-[#18261f] border border-[#dce3df] dark:border-[#274434] text-[#2d3632] dark:text-[#e4ebe7]"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#7bb173] block mb-2">
                          Core Deliverables
                        </span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#245240] dark:text-[#e4ebe7]">
                          {service.keyDeliverables.slice(0, 4).map((del, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-[#359540] dark:text-[#4ade80] shrink-0 mt-0.5" />
                              <span>{del}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#dce3df] dark:border-[#22332b] flex items-center justify-between">
                      <Link
                        to={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 text-xs font-bold text-[#245240] dark:text-[#7bb173] hover:text-[#359540] dark:hover:text-[#4ade80] transition-colors"
                      >
                        <span>View full service breakdown</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      <Button href="/contact" variant="outline" size="sm">
                        Request Advisory
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Engagement CTA */}
      <section className="py-16 sm:py-24 bg-[#f0f3f1] dark:bg-[#0e1411] transition-colors">
        <Container>
          <div className="bg-[#245240] dark:bg-[#18382c] text-white rounded-3xl p-8 sm:p-14 text-center max-w-4xl mx-auto space-y-6 shadow-md border border-[#2d614d]">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Ready to Strengthen Your Agribusiness Operations?
            </h3>
            <p className="text-sm text-[#bbdecc] max-w-xl mx-auto leading-relaxed">
              Whether you need operational gap diagnostics, investment readiness preparation, or reliable off-taker linkages, our advisory team is ready to assist.
            </p>
            <Button href="/contact" variant="white" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Schedule an Advisory Session
            </Button>
          </div>
        </Container>
      </section>
    </div>
  )
}