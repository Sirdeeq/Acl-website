import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Users,
  MapPin,
  CheckCircle2,
  Calendar,
  Crown,
  Tractor,
  GraduationCap,
  Store,
  Smartphone,
  Handshake,
  Layers,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { COMPANY_PROFILE } from '@/content/company.content'
import { SERVICES_LIST } from '@/content/services.content'
import { AAIRI_PROGRAMME, AVC_COMMUNITY } from '@/content/programmes.content'
import { STRATEGIC_PARTNERS } from '@/content/partners.content'
import { NIGERIAN_STATES_NETWORK, INTERNATIONAL_REACH_COUNTRIES } from '@/data/states'
import { AairiEnquiryModal } from '@/features/programmes/AairiEnquiryModal'

const renderServiceIcon = (name: string) => {
  const className = "w-5 h-5 text-[#359540] dark:text-[#4ade80]"
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

export const HomePage: React.FC = () => {
  const [aairiModalOpen, setAairiModalOpen] = useState(false)

  return (
    <div className="relative overflow-hidden transition-colors duration-300">
      {/* 1. HERO SECTION WITH SOPHISTICATED GREY CANVAS */}
      <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-32 bg-gradient-to-b from-[#e8eeea] via-[#f0f3f1] to-[#e8eeea] dark:from-[#0e1411] dark:via-[#121a16] dark:to-[#0e1411] border-b border-[#dce3df] dark:border-[#1d2923] transition-colors duration-300">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Editorial Headline & Actions */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 dark:bg-[#18261f] border border-[#bbdecc]/70 dark:border-[#274434] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#359540] animate-ping" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#245240] dark:text-[#7bb173]">
                  Strategic Agribusiness Advisory & Programme Management
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#245240] dark:text-white leading-[1.1] tracking-tight">
                Building Stronger Agribusinesses.{' '}
                <span className="text-[#359540] dark:text-[#4ade80] italic block sm:inline">
                  Connecting Africa to Opportunity.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#4a5751] dark:text-[#a8b8b0] leading-relaxed max-w-2xl">
                Adesewa Concept Ltd (ACL) provides strategic and operational management support to agribusiness owners—bridging the critical gap to capability, capital, markets, and sustainable partnerships.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
                <Button
                  onClick={() => setAairiModalOpen(true)}
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Explore AAIRI Flagship
                </Button>
                <Button
                  href="/contact"
                  variant="outline"
                  size="lg"
                  className="dark:border-[#7bb173] dark:text-[#7bb173] dark:hover:bg-[#7bb173] dark:hover:text-[#0e1411]"
                >
                  Partner With Us
                </Button>
              </div>

              {/* Proof badges list */}
              <div className="pt-4 border-t border-[#dce3df] dark:border-[#1d2923] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-[#245240] dark:text-[#bbdecc]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#359540] shrink-0" />
                  <span className="font-medium">Farm Programme Manager</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#359540] shrink-0" />
                  <span className="font-medium">2,000+ AVC Community</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <CheckCircle2 className="w-4 h-4 text-[#359540] shrink-0" />
                  <span className="font-medium">19-State Coordinator Reach</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Photographic Composition with Floating Badge */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-[#22332b] aspect-4/3 sm:aspect-square">
                <img
                  src="/images/hero/hero-agritech.jpg"
                  alt="Modern African agribusiness management and agronomy"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141716]/90 via-transparent to-black/20" />

                {/* Overlay Text Content */}
                <div className="absolute bottom-0 inset-x-0 p-6 text-white space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#359540] text-white text-[11px] font-semibold uppercase tracking-wider">
                      Commercial Farm Advisory
                    </span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-white leading-snug">
                    Bridging Farmers to Capital, Technology & Trade
                  </h3>
                  <p className="text-xs text-[#bbdecc] line-clamp-2">
                    Operational gap diagnostics, inventory digitization, and bankable governance across 19 Nigerian states.
                  </p>
                </div>
              </div>

              {/* Floating Stat Pill Top Left */}
              <div className="absolute -top-5 -left-5 bg-white dark:bg-[#16211c] rounded-2xl p-4 shadow-xl border border-[#dce3df] dark:border-[#25362d] hidden sm:flex items-center gap-3 z-10 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#e8f1ec] dark:bg-[#1a2d23] flex items-center justify-center text-[#359540]">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-sm font-bold text-[#245240] dark:text-[#7bb173] block">2,000+ Members</span>
                  <span className="text-[11px] text-[#4a5751] dark:text-[#94a89e]">Active AVC Community</span>
                </div>
              </div>

              {/* Floating Stat Pill Bottom Right */}
              <div className="absolute -bottom-5 -right-5 bg-white dark:bg-[#16211c] rounded-2xl p-4 shadow-xl border border-[#dce3df] dark:border-[#25362d] hidden sm:flex items-center gap-3 z-10 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#e8f1ec] dark:bg-[#1a2d23] flex items-center justify-center text-[#359540]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-sm font-bold text-[#245240] dark:text-[#7bb173] block">19 Nigerian States</span>
                  <span className="text-[11px] text-[#4a5751] dark:text-[#94a89e]">State Coordinators</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. CREDIBILITY & PROOF INDICATORS BAR */}
      <section className="py-12 bg-[#e8ecea] dark:bg-[#101713] border-b border-[#dce3df] dark:border-[#1d2923] transition-colors duration-300">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#141d18] border border-[#dce3df] dark:border-[#22332b] shadow-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-[#e8f1ec] dark:bg-[#1c2c23] text-[#245240] dark:text-[#7bb173]">
                  <Users className="w-5 h-5" />
                </div>
                <span className="text-3xl font-serif font-bold text-[#245240] dark:text-white">2,000+</span>
              </div>
              <h4 className="text-sm font-semibold text-[#141716] dark:text-[#e4ebe7]">Agribusiness Owners</h4>
              <p className="text-xs text-[#4a5751] dark:text-[#94a89e] mt-1">Active AVC Community members.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#141d18] border border-[#dce3df] dark:border-[#22332b] shadow-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-[#e8f1ec] dark:bg-[#1c2c23] text-[#245240] dark:text-[#7bb173]">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-3xl font-serif font-bold text-[#245240] dark:text-white">19</span>
              </div>
              <h4 className="text-sm font-semibold text-[#141716] dark:text-[#e4ebe7]">Nigerian States</h4>
              <p className="text-xs text-[#4a5751] dark:text-[#94a89e] mt-1">Dedicated State Coordinator network.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#141d18] border border-[#dce3df] dark:border-[#22332b] shadow-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-[#e8f1ec] dark:bg-[#1c2c23] text-[#245240] dark:text-[#7bb173]">
                  <Layers className="w-5 h-5" />
                </div>
                <span className="text-3xl font-serif font-bold text-[#245240] dark:text-white">6</span>
              </div>
              <h4 className="text-sm font-semibold text-[#141716] dark:text-[#e4ebe7]">Core Service Areas</h4>
              <p className="text-xs text-[#4a5751] dark:text-[#94a89e] mt-1">End-to-end management support.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#141d18] border border-[#dce3df] dark:border-[#22332b] shadow-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-[#e8f1ec] dark:bg-[#1c2c23] text-[#245240] dark:text-[#7bb173]">
                  <Calendar className="w-5 h-5" />
                </div>
                <span className="text-3xl font-serif font-bold text-[#245240] dark:text-white">2025</span>
              </div>
              <h4 className="text-sm font-semibold text-[#141716] dark:text-[#e4ebe7]">AVC Summit Convened</h4>
              <p className="text-xs text-[#4a5751] dark:text-[#94a89e] mt-1">Catalyzing ecosystem dialogues.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. WHO WE ARE & PURPOSE (WITH PHOTOGRAPHY) */}
      <section className="py-20 sm:py-28 bg-[#f0f3f1] dark:bg-[#0e1411] transition-colors duration-300">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <Badge variant="green" size="md">
                Who We Are
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#245240] dark:text-white leading-tight">
                Bridging the Gap Between Agricultural Need and Ecosystem Resources
              </h2>
              <p className="text-base text-[#4a5751] dark:text-[#a8b8b0] leading-relaxed">
                {COMPANY_PROFILE.summary}
              </p>
              <p className="text-base text-[#4a5751] dark:text-[#a8b8b0] leading-relaxed">
                {COMPANY_PROFILE.ecosystemRole}
              </p>

              {/* Purpose Callout Card */}
              <div className="p-6 rounded-2xl bg-white dark:bg-[#141d18] border border-[#bbdecc]/70 dark:border-[#243a2e] shadow-xs">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#359540] dark:text-[#4ade80] block mb-1">
                  Our Purpose
                </span>
                <p className="text-sm text-[#245240] dark:text-[#d3e3db] font-medium leading-relaxed italic">
                  "{COMPANY_PROFILE.purpose}"
                </p>
              </div>

              <div className="pt-2">
                <Button href="/about" variant="outline" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Learn More About ACL
                </Button>
              </div>
            </div>

            {/* Right: Photographic Composition with Vision & Mission */}
            <div className="lg:col-span-6 space-y-6">
              <div className="rounded-3xl overflow-hidden shadow-md aspect-16/9 border border-[#dce3df] dark:border-[#22332b]">
                <img
                  src="/images/hero/hero-farm-aerial.jpg"
                  alt="Fertile African agricultural farmlands"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card variant="white" className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldCheck className="w-4 h-4 text-[#359540]" />
                    <h3 className="text-base font-serif font-bold text-[#245240] dark:text-white">Our Vision</h3>
                  </div>
                  <p className="text-xs text-[#4a5751] dark:text-[#a8b8b0] leading-relaxed">
                    {COMPANY_PROFILE.vision}
                  </p>
                </Card>

                <Card variant="white" className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-[#359540]" />
                    <h3 className="text-base font-serif font-bold text-[#245240] dark:text-white">Our Mission</h3>
                  </div>
                  <p className="text-xs text-[#4a5751] dark:text-[#a8b8b0] leading-relaxed">
                    {COMPANY_PROFILE.mission}
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. THE SIX CORE SERVICE PILLARS (WITH DEDICATED PHOTOGRAPHY) */}
      <section className="py-20 sm:py-28 bg-[#e8ecea] dark:bg-[#101713] border-t border-[#dce3df] dark:border-[#1d2923] transition-colors duration-300">
        <Container>
          <SectionHeading
            badge="What We Do"
            title="Six Strategic Agribusiness Service Areas"
            subtitle="Targeted operational support designed to build institutional capability, optimize farm yields, and prepare African enterprises for commercial growth."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES_LIST.map((service, index) => (
              <div
                key={service.id}
                className="bg-white dark:bg-[#141d18] rounded-3xl border border-[#dce3df] dark:border-[#22332b] overflow-hidden hover:border-[#359540]/60 dark:hover:border-[#7bb173]/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Service Image Header */}
                <div className="relative h-48 overflow-hidden bg-[#e8f1ec] dark:bg-[#1b2b23]">
                  <img
                    src={service.imageSrc}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-white/90 dark:bg-[#141d18]/90 backdrop-blur-xs text-[#359540] dark:text-[#4ade80] shadow-sm">
                    {renderServiceIcon(service.iconName)}
                  </div>
                  <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-black/60 text-white text-[10px] font-mono font-bold backdrop-blur-xs">
                    0{index + 1}
                  </span>
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="text-lg font-serif font-bold text-white leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Service Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs sm:text-sm text-[#4a5751] dark:text-[#a8b8b0] leading-relaxed">
                    {service.shortDescription}
                  </p>

                  <div className="border-t border-[#dce3df] dark:border-[#1d2923] pt-3">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#7bb173] block mb-1.5">
                      Core Deliverables
                    </span>
                    <ul className="space-y-1 text-xs text-[#2d3632] dark:text-[#c4d2cb]">
                      {service.keyDeliverables.slice(0, 2).map((item, i) => (
                        <li key={i} className="flex items-start gap-1.5 line-clamp-1">
                          <span className="text-[#359540] font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#245240] dark:text-[#7bb173] group-hover:text-[#359540] dark:group-hover:text-white transition-colors"
                    >
                      <span>Read service details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button href="/services" variant="secondary" size="md">
              Explore All Services & Frameworks
            </Button>
          </div>
        </Container>
      </section>

      {/* 5. FLAGSHIP PROGRAMME SPOTLIGHT: AAIRI (WITH PHOTOGRAPHY) */}
      <section className="py-20 sm:py-28 bg-[#1b4332] dark:bg-[#10241b] text-white relative overflow-hidden transition-colors duration-300">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#359540]/10 rounded-full blur-3xl pointer-events-none" />
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-14">
            <div className="lg:col-span-7 space-y-4">
              <Badge variant="sand" size="md" className="bg-white/10 text-white border-white/20">
                Flagship Programme
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
                African Agribusiness Investment Readiness and Recognition Initiative (AAIRI)
              </h2>
              <p className="text-base text-[#bbdecc] leading-relaxed">
                {AAIRI_PROGRAMME.summary}
              </p>
            </div>

            <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-xl border border-white/15 aspect-16/9">
              <img
                src="/images/programmes/aairi-bootcamp.jpg"
                alt="Agribusiness capacity building bootcamp in session"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Four-Phase Journey Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {AAIRI_PROGRAMME.phases.map((phase) => (
              <div
                key={phase.phase}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-full bg-[#359540] text-white flex items-center justify-center font-bold text-sm">
                      {phase.phase}
                    </span>
                    <span className="text-xs text-[#7bb173] font-mono uppercase tracking-wider">
                      Phase 0{phase.phase}
                    </span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-white mb-2 leading-snug">
                    {phase.title}
                  </h3>

                  <p className="text-xs text-[#bbdecc] leading-relaxed mb-4">
                    {phase.description}
                  </p>

                  {phase.statusNote && (
                    <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-200 leading-tight">
                      * {phase.statusNote}
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-white/10 mt-4 text-[11px] text-[#7bb173]">
                  {phase.deliverables[0]}
                </div>
              </div>
            ))}
          </div>

          {/* Action Row */}
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-serif font-bold text-white mb-1">
                Interested in Sponsoring or Participating in AAIRI?
              </h4>
              <p className="text-xs text-[#bbdecc]">
                Partner with us across participant sponsorship, curriculum delivery, mentorship, or deal-room investor engagement.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button
                onClick={() => setAairiModalOpen(true)}
                variant="white"
                size="md"
              >
                Register Interest (EOI)
              </Button>
              <Button
                href="/programmes/aairi"
                variant="outline"
                size="md"
                className="border-white text-white hover:bg-white hover:text-[#245240]"
              >
                Read Full Details
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. AVC COMMUNITY & REGIONAL FOOTPRINT (WITH PHOTOGRAPHY) */}
      <section className="py-20 sm:py-28 bg-[#f0f3f1] dark:bg-[#0e1411] border-b border-[#dce3df] dark:border-[#1d2923] transition-colors duration-300">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <Badge variant="green" size="md">
                Grassroots & Continental Network
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#245240] dark:text-white leading-tight">
                The Agribusiness and Value Chain (AVC) Community
              </h2>
              <p className="text-base text-[#4a5751] dark:text-[#a8b8b0] leading-relaxed">
                {AVC_COMMUNITY.summary}
              </p>

              {/* Community photo */}
              <div className="rounded-2xl overflow-hidden shadow-sm border border-[#dce3df] dark:border-[#22332b] aspect-16/9">
                <img
                  src="/images/community/avc-community-field.jpg"
                  alt="African agribusiness owners in value chain cooperation"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="pt-2">
                <Button href="/avc-community" variant="secondary" size="md">
                  Join the AVC Community
                </Button>
              </div>
            </div>

            {/* Right: State Coordinators Interactive Grid */}
            <div className="lg:col-span-7">
              <div className="bg-white dark:bg-[#141d18] rounded-3xl p-6 sm:p-8 border border-[#dce3df] dark:border-[#22332b] shadow-xs space-y-6">
                <div className="flex items-center justify-between border-b border-[#dce3df] dark:border-[#1d2923] pb-4">
                  <div>
                    <h3 className="text-lg font-serif font-bold text-[#245240] dark:text-white">
                      19 Nigerian States Represented
                    </h3>
                    <p className="text-xs text-[#4a5751] dark:text-[#a8b8b0]">
                      On-the-ground state coordinator leadership identifying local needs and mobilizing participants.
                    </p>
                  </div>
                  <Badge variant="green" size="sm">
                    Active Network
                  </Badge>
                </div>

                {/* States Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {NIGERIAN_STATES_NETWORK.map((state) => (
                    <div
                      key={state.name}
                      className="p-3 rounded-xl bg-[#f0f3f1] dark:bg-[#18231e] border border-[#dce3df]/70 dark:border-[#24352b] hover:border-[#359540]/60 hover:bg-[#e8ecea] dark:hover:bg-[#1f2e27] transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#245240] dark:text-[#7bb173]">{state.name}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#359540]" />
                      </div>
                      <span className="text-[10px] text-[#4a5751] dark:text-[#94a89e] block mt-0.5">{state.region}</span>
                    </div>
                  ))}
                </div>

                {/* International reach */}
                <div className="pt-4 border-t border-[#dce3df] dark:border-[#1d2923]">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#7bb173] block mb-2">
                    International & Continental Reach
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {INTERNATIONAL_REACH_COUNTRIES.map((country) => (
                      <span
                        key={country.name}
                        className="px-2.5 py-1 rounded-full bg-[#f0f3f1] dark:bg-[#18231e] border border-[#bbdecc]/40 dark:border-[#25392e] text-xs text-[#245240] dark:text-[#c4d2cb] font-medium"
                      >
                        {country.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 7. HOW WE WORK: THE 4-STEP METHODOLOGY */}
      <section className="py-20 sm:py-28 bg-[#e8ecea] dark:bg-[#101713] transition-colors duration-300">
        <Container>
          <SectionHeading
            badge="Our Approach"
            title="How We Work: From Assessment to Sustainable Growth"
            subtitle="Agribusiness growth requires several forms of support working together. Our methodology begins with the enterprise and its desired outcome."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {COMPANY_PROFILE.methodology.map((m) => (
              <div
                key={m.step}
                className="relative p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#141d18] border border-[#dce3df] dark:border-[#22332b] hover:shadow-md hover:border-[#359540]/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#e8f1ec] dark:bg-[#1c2c23] text-[#245240] dark:text-[#7bb173] flex items-center justify-center font-serif font-bold text-lg mb-4 group-hover:bg-[#245240] group-hover:text-white transition-colors">
                  {m.step}
                </div>
                <h3 className="text-xl font-serif font-bold text-[#245240] dark:text-white mb-2">
                  {m.title}
                </h3>
                <p className="text-xs font-semibold text-[#359540] dark:text-[#4ade80] mb-3">
                  {m.description}
                </p>
                <p className="text-xs text-[#4a5751] dark:text-[#a8b8b0] leading-relaxed">
                  {m.detail}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 8. LEADERSHIP PROFILE (ROYAL CREST EXECUTIVE PRESENTATION) */}
      <section className="py-20 sm:py-28 bg-[#f0f3f1] dark:bg-[#0e1411] border-y border-[#dce3df] dark:border-[#1d2923] transition-colors duration-300">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-[#22332b] bg-[#143628] group">
                {/* Official Portrait of Princess Adesola Debbie Daramola */}
                <div className="aspect-[4/5] sm:aspect-[3/4] relative overflow-hidden bg-[#245240]">
                  <img
                    src="/images/adesewa.png"
                    alt={COMPANY_PROFILE.leadership.name}
                    className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-700"
                  />
                  {/* Gradient vignette at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1411] via-[#0e1411]/50 to-transparent" />

                  {/* Regal Badge Floating Top Right */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-semibold shadow-md">
                      <Crown className="w-3.5 h-3.5 text-[#facc15]" />
                      <span>Crowned Princess</span>
                    </div>
                  </div>

                  {/* Identification and Appointments Overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 text-white space-y-2 z-10">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#7bb173] block">
                      Founder & Executive Creator
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
                      {COMPANY_PROFILE.leadership.name}
                    </h3>
                    <p className="text-xs text-[#bbdecc]">
                      {COMPANY_PROFILE.leadership.origin}
                    </p>

                    {/* Mandates Mini-badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="text-[11px] px-2.5 py-1 rounded-lg bg-white/10 backdrop-blur-xs border border-white/15 text-[#e2e7e4]">
                        President, Agribusiness at WEFA Nigeria
                      </span>
                      <span className="text-[11px] px-2.5 py-1 rounded-lg bg-white/10 backdrop-blur-xs border border-white/15 text-[#e2e7e4]">
                        Non-Exec Director, Cubeseed Africa
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <Badge variant="green" size="md">
                Leadership Profile
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#245240] dark:text-white leading-tight">
                Two Decades of Enterprise, Agribusiness & Humanitarian Leadership
              </h2>
              <div className="space-y-4 text-sm text-[#4a5751] dark:text-[#a8b8b0] leading-relaxed">
                <p>{COMPANY_PROFILE.leadership.bio[0]}</p>
                <p>{COMPANY_PROFILE.leadership.bio[1]}</p>
                <p>{COMPANY_PROFILE.leadership.bio[4]}</p>
              </div>

              <div className="pt-2">
                <Button href="/about#leadership" variant="primary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Read Full Leadership Biography
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 9. STRATEGIC PARTNERS & ECOSYSTEM SHOWCASE */}
      <section className="py-20 sm:py-28 bg-[#f0f3f1] dark:bg-[#0e1411] transition-colors duration-300">
        <Container>
          <SectionHeading
            badge="Strategic Alliances"
            title="Strategic Partners & Global Ecosystem"
            subtitle="Adesewa Concept Ltd collaborates with institutional bodies, transatlantic trade councils, and enterprise technology innovators to build resilient African agribusiness value chains."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-12">
            {STRATEGIC_PARTNERS.map((partner) => (
              <div
                key={partner.id}
                className="bg-white dark:bg-[#141d18] rounded-3xl p-6 sm:p-8 border border-[#dce3df] dark:border-[#22332b] shadow-xs flex flex-col justify-between transition-all hover:border-[#359540]/60 hover:shadow-md"
              >
                <div>
                  {/* Clean white badge for logo to ensure high contrast across Dark, Dark Grey, and Light */}
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

          <div className="text-center">
            <Button href="/partners" variant="outline" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Explore Full Partnership Framework
            </Button>
          </div>
        </Container>
      </section>

      {/* 10. PARTNERSHIP OPPORTUNITIES (WITH PHOTOGRAPHY) */}
      <section className="py-20 sm:py-28 bg-[#e8ecea] dark:bg-[#101713] transition-colors duration-300">
        <Container>
          <div className="bg-[#e2ebe6] dark:bg-[#14231b] rounded-3xl p-8 sm:p-14 border border-[#bbdecc]/70 dark:border-[#22392c]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-10">
              <div className="lg:col-span-7 space-y-4">
                <Badge variant="green" size="md">
                  Institutional Collaboration
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#245240] dark:text-white leading-tight">
                  Partner With ACL to Accelerate African Food Systems
                </h2>
                <p className="text-sm sm:text-base text-[#4a5751] dark:text-[#a8b8b0] leading-relaxed">
                  We invite commercial banks, development finance institutions, off-takers, and technical organisations to leverage our community engagement platform and 19-state network to deliver high-impact interventions.
                </p>
              </div>
              <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-md border border-[#bbdecc]/80 dark:border-[#2a4535] aspect-16/9">
                <img
                  src="/images/services/partnerships.jpg"
                  alt="Agricultural enterprise partnership and collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white dark:bg-[#17271e] p-6 rounded-2xl border border-[#dce3df] dark:border-[#22332b] text-center shadow-xs">
                <h4 className="text-base font-bold text-[#245240] dark:text-[#7bb173] mb-2">Financial Institutions</h4>
                <p className="text-xs text-[#4a5751] dark:text-[#a8b8b0] leading-relaxed">
                  Engage audit-ready agribusinesses profiled through our structured capacity frameworks.
                </p>
              </div>
              <div className="bg-white dark:bg-[#17271e] p-6 rounded-2xl border border-[#dce3df] dark:border-[#22332b] text-center shadow-xs">
                <h4 className="text-base font-bold text-[#245240] dark:text-[#7bb173] mb-2">Development Agencies</h4>
                <p className="text-xs text-[#4a5751] dark:text-[#a8b8b0] leading-relaxed">
                  Deploy targeted women and youth inclusion programmes with grassroots state-coordinator execution.
                </p>
              </div>
              <div className="bg-white dark:bg-[#17271e] p-6 rounded-2xl border border-[#dce3df] dark:border-[#22332b] text-center shadow-xs">
                <h4 className="text-base font-bold text-[#245240] dark:text-[#7bb173] mb-2">Commercial Off-Takers</h4>
                <p className="text-xs text-[#4a5751] dark:text-[#a8b8b0] leading-relaxed">
                  Establish reliable supply linkages and outgrower schemes across primary Nigerian food baskets.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Button href="/contact" variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Submit a Partnership Inquiry
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* AAIRI Expression of Interest Modal */}
      <AairiEnquiryModal
        isOpen={aairiModalOpen}
        onClose={() => setAairiModalOpen(false)}
      />
    </div>
  )
}
