import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import {
  Tractor,
  GraduationCap,
  TrendingUp,
  Store,
  Smartphone,
  Handshake,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { SERVICES_LIST } from '@/content/services.content'

const renderServiceIcon = (name: string) => {
  const className = "w-8 h-8 text-[#359540] dark:text-[#4ade80]"
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

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const service = SERVICES_LIST.find((s) => s.slug === slug)

  if (!service) {
    return <Navigate to="/services" replace />
  }

  const currentIndex = SERVICES_LIST.findIndex((s) => s.slug === slug)
  const nextService = SERVICES_LIST[(currentIndex + 1) % SERVICES_LIST.length]

  return (
    <div className="py-12 sm:py-20 transition-colors duration-300">
      <Container>
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#359540] dark:text-[#7bb173] hover:text-[#245240] dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Services</span>
          </Link>
        </div>

        {/* Header Hero with Photography */}
        <div className="bg-white dark:bg-[#141d18] rounded-3xl overflow-hidden border border-[#dce3df] dark:border-[#22332b] mb-12 shadow-xs transition-colors">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
            <div className="lg:col-span-7 p-8 sm:p-14 space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-[#e8f3ed] dark:bg-[#18261f]">
                  {renderServiceIcon(service.iconName)}
                </div>
                <Badge variant="green" size="md">
                  Service Pillar 0{currentIndex + 1}
                </Badge>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#245240] dark:text-white leading-tight">
                {service.title}
              </h1>

              <p className="text-base sm:text-lg text-[#4a5751] dark:text-[#a8b8b0] leading-relaxed">
                {service.fullDescription}
              </p>
            </div>

            <div className="lg:col-span-5 h-72 lg:h-full min-h-[300px] overflow-hidden bg-[#e8f3ed] dark:bg-[#18261f]">
              <img
                src={service.imageSrc}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Deliverables and Outcomes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Key Deliverables */}
          <div className="lg:col-span-7 bg-white dark:bg-[#141d18] rounded-3xl p-8 border border-[#dce3df] dark:border-[#22332b] shadow-xs space-y-6 transition-colors">
            <h3 className="text-xl font-serif font-bold text-[#245240] dark:text-white">
              Operational Deliverables & Scope
            </h3>
            <ul className="space-y-4">
              {service.keyDeliverables.map((del, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#359540] dark:text-[#4ade80] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#2d3632] dark:text-[#e4ebe7] leading-relaxed">{del}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-[#dce3df] dark:border-[#22332b]">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-[#7bb173] mb-3">
                Expected Strategic Outcomes
              </h4>
              <ul className="space-y-2">
                {service.expectedOutcomes.map((out, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-[#4a5751] dark:text-[#a8b8b0]">
                    <span className="text-[#359540] dark:text-[#4ade80] font-bold">•</span>
                    <span>{out}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Target Audience & Direct Engagement */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#e8ecea] dark:bg-[#16211b] rounded-3xl p-8 border border-[#dce3df] dark:border-[#274434] space-y-4 transition-colors">
              <h3 className="text-lg font-serif font-bold text-[#245240] dark:text-white">
                Who This Service Is For
              </h3>
              <ul className="space-y-2.5">
                {service.audience.map((aud, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-[#245240] dark:text-[#bbdecc]">
                    <ShieldCheck className="w-4 h-4 text-[#359540] dark:text-[#4ade80] shrink-0 mt-0.5" />
                    <span>{aud}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#245240] dark:bg-[#18382c] text-white rounded-3xl p-8 space-y-4 text-center border border-[#2d614d] shadow-md">
              <h3 className="text-xl font-serif font-bold text-white">
                Engage ACL on This Service
              </h3>
              <p className="text-xs text-[#bbdecc] leading-relaxed">
                Connect directly with our agribusiness advisory team to discuss specific operational requirements.
              </p>
              <Button href="/contact" variant="white" size="md" className="w-full">
                Request Advisory Consultation
              </Button>
            </div>
          </div>
        </div>

        {/* Next Service Navigation */}
        <div className="p-6 rounded-2xl bg-white dark:bg-[#141d18] border border-[#dce3df] dark:border-[#22332b] flex items-center justify-between transition-colors">
          <span className="text-xs text-[#4a5751] dark:text-[#a8b8b0]">Next Service Area</span>
          <Link
            to={`/services/${nextService.slug}`}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#245240] dark:text-[#7bb173] hover:text-[#359540] dark:hover:text-[#4ade80] transition-colors"
          >
            <span>{nextService.title}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </div>
  )
}