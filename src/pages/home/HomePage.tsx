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
import { NIGERIAN_STATES_NETWORK, INTERNATIONAL_REACH_COUNTRIES } from '@/data/states'
import { AairiEnquiryModal } from '@/features/programmes/AairiEnquiryModal'

const renderServiceIcon = (name: string) => {
  const className = "w-5 h-5 text-[#359540]"
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
    <div className="relative overflow-hidden">
      {/* 1. HERO SECTION WITH RICH PHOTOGRAPHY */}
      <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-32 bg-gradient-to-b from-[#f0f7f2]/60 via-[#fcfcfb] to-white border-b border-[#e2e7e4]/60">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Editorial Headline & Actions */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#f0f7f2] border border-[#bbdecc]/60 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#359540] animate-ping" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#245240]">
                  Strategic Agribusiness Advisory & Programme Management
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#245240] leading-[1.1] tracking-tight">
                Building Stronger Agribusinesses.{' '}
                <span className="text-[#359540] italic block sm:inline">
                  Connecting Africa to Opportunity.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#4a5751] leading-relaxed max-w-2xl">
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
                >
                  Partner With Us
                </Button>
              </div>

              {/* Proof badges list */}
              <div className="pt-4 border-t border-[#e2e7e4] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-[#245240]">
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
                  <span className="font-medium">18-State Coordinator Reach</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Photographic Composition with Floating Badge */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-4/3 sm:aspect-square">
                <img
                  src="/images/hero/hero-agritech.jpg"
                  alt="Modern African agribusiness management and agronomy"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141716]/80 via-transparent to-black/20" />

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
                    Operational gap diagnostics, inventory digitization, and bankable governance across 18 Nigerian states.
                  </p>
                </div>
              </div>

              {/* Floating Stat Pill Top Left */}
              <div className="absolute -top-5 -left-5 bg-white rounded-2xl p-4 shadow-xl border border-[#e2e7e4] hidden sm:flex items-center gap-3 z-10">
                <div className="w-10 h-10 rounded-xl bg-[#f0f7f2] flex items-center justify-center text-[#359540]">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-sm font-bold text-[#245240] block">2,000+ Members</span>
                  <span className="text-[11px] text-[#4a5751]">Active AVC Community</span>
                </div>
              </div>

              {/* Floating Stat Pill Bottom Right */}
              <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl p-4 shadow-xl border border-[#e2e7e4] hidden sm:flex items-center gap-3 z-10">
                <div className="w-10 h-10 rounded-xl bg-[#f0f7f2] flex items-center justify-center text-[#359540]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-sm font-bold text-[#245240] block">18 Nigerian States</span>
                  <span className="text-[11px] text-[#4a5751]">State Coordinators</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. CREDIBILITY & PROOF INDICATORS BAR */}
      <section className="py-12 bg-white border-b border-[#e2e7e4]">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="p-6 rounded-2xl bg-[#fcfcfb] border border-[#e2e7e4]/80">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-[#f0f7f2] text-[#245240]">
                  <Users className="w-5 h-5" />
                </div>
                <span className="text-3xl font-serif font-bold text-[#245240]">2,000+</span>
              </div>
              <h4 className="text-sm font-semibold text-[#141716]">Agribusiness Owners</h4>
              <p className="text-xs text-[#4a5751] mt-1">Active AVC Community members.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#fcfcfb] border border-[#e2e7e4]/80">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-[#f0f7f2] text-[#245240]">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-3xl font-serif font-bold text-[#245240]">18</span>
              </div>
              <h4 className="text-sm font-semibold text-[#141716]">Nigerian States</h4>
              <p className="text-xs text-[#4a5751] mt-1">Dedicated State Coordinator network.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#fcfcfb] border border-[#e2e7e4]/80">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-[#f0f7f2] text-[#245240]">
                  <Layers className="w-5 h-5" />
                </div>
                <span className="text-3xl font-serif font-bold text-[#245240]">6</span>
              </div>
              <h4 className="text-sm font-semibold text-[#141716]">Core Service Areas</h4>
              <p className="text-xs text-[#4a5751] mt-1">End-to-end management support.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#fcfcfb] border border-[#e2e7e4]/80">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-[#f0f7f2] text-[#245240]">
                  <Calendar className="w-5 h-5" />
                </div>
                <span className="text-3xl font-serif font-bold text-[#245240]">2025</span>
              </div>
              <h4 className="text-sm font-semibold text-[#141716]">AVC Summit Convened</h4>
              <p className="text-xs text-[#4a5751] mt-1">Catalyzing ecosystem dialogues.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. WHO WE ARE & PURPOSE (WITH PHOTOGRAPHY) */}
      <section className="py-20 sm:py-28 bg-[#fcfcfb]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <Badge variant="green" size="md">
                Who We Are
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#245240] leading-tight">
                Bridging the Gap Between Agricultural Need and Ecosystem Resources
              </h2>
              <p className="text-base text-[#4a5751] leading-relaxed">
                {COMPANY_PROFILE.summary}
              </p>
              <p className="text-base text-[#4a5751] leading-relaxed">
                {COMPANY_PROFILE.ecosystemRole}
              </p>

              {/* Purpose Callout Card */}
              <div className="p-6 rounded-2xl bg-white border border-[#bbdecc]/60 shadow-xs">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#359540] block mb-1">
                  Our Purpose
                </span>
                <p className="text-sm text-[#245240] font-medium leading-relaxed italic">
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
              <div className="rounded-3xl overflow-hidden shadow-md aspect-16/9 border border-[#e2e7e4]">
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
                    <h3 className="text-base font-serif font-bold text-[#245240]">Our Vision</h3>
                  </div>
                  <p className="text-xs text-[#4a5751] leading-relaxed">
                    {COMPANY_PROFILE.vision}
                  </p>
                </Card>

                <Card variant="white" className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-[#359540]" />
                    <h3 className="text-base font-serif font-bold text-[#245240]">Our Mission</h3>
                  </div>
                  <p className="text-xs text-[#4a5751] leading-relaxed">
                    {COMPANY_PROFILE.mission}
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. THE SIX CORE SERVICE PILLARS (WITH DEDICATED PHOTOGRAPHY) */}
      <section className="py-20 sm:py-28 bg-white border-t border-[#e2e7e4]">
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
                className="bg-white rounded-3xl border border-[#e2e7e4] overflow-hidden hover:border-[#359540]/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Service Image Header */}
                <div className="relative h-48 overflow-hidden bg-[#f0f7f2]">
                  <img
                    src={service.imageSrc}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-white/90 backdrop-blur-xs text-[#359540] shadow-sm">
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
                  <p className="text-xs sm:text-sm text-[#4a5751] leading-relaxed">
                    {service.shortDescription}
                  </p>

                  <div className="border-t border-[#e2e7e4] pt-3">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#7bb173] block mb-1.5">
                      Core Deliverables
                    </span>
                    <ul className="space-y-1 text-xs text-[#2d3632]">
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
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#245240] group-hover:text-[#359540] transition-colors"
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
      <section className="py-20 sm:py-28 bg-[#1b4332] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#359540]/10 rounded-full blur-3xl pointer-events-none" />
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-14">
            <div className="lg:col-span-7 space-y-4">
              <Badge variant="sand" size="md" className="bg-white/10 text-white border-white/20">
                Flagship Programme
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
                Adesewa Agribusiness Investment Readiness Initiative (AAIRI)
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
      <section className="py-20 sm:py-28 bg-[#fcfcfb] border-b border-[#e2e7e4]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <Badge variant="green" size="md">
                Grassroots & Continental Network
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#245240] leading-tight">
                The Agribusiness and Value Chain (AVC) Community
              </h2>
              <p className="text-base text-[#4a5751] leading-relaxed">
                {AVC_COMMUNITY.summary}
              </p>

              {/* Community photo */}
              <div className="rounded-2xl overflow-hidden shadow-sm border border-[#e2e7e4] aspect-16/9">
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
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e2e7e4] shadow-xs space-y-6">
                <div className="flex items-center justify-between border-b border-[#e2e7e4] pb-4">
                  <div>
                    <h3 className="text-lg font-serif font-bold text-[#245240]">
                      18 Nigerian States Represented
                    </h3>
                    <p className="text-xs text-[#4a5751]">
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
                      className="p-3 rounded-xl bg-[#fcfcfb] border border-[#e2e7e4]/70 hover:border-[#359540]/60 hover:bg-[#f0f7f2] transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#245240]">{state.name}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#359540]" />
                      </div>
                      <span className="text-[10px] text-[#4a5751] block mt-0.5">{state.region}</span>
                    </div>
                  ))}
                </div>

                {/* International reach */}
                <div className="pt-4 border-t border-[#e2e7e4]">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#7bb173] block mb-2">
                    International & Continental Reach
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {INTERNATIONAL_REACH_COUNTRIES.map((country) => (
                      <span
                        key={country.name}
                        className="px-2.5 py-1 rounded-full bg-[#f0f7f2] border border-[#bbdecc]/40 text-xs text-[#245240] font-medium"
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
      <section className="py-20 sm:py-28 bg-white">
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
                className="relative p-6 sm:p-8 rounded-2xl bg-[#fcfcfb] border border-[#e2e7e4] hover:shadow-md hover:border-[#359540]/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#f0f7f2] text-[#245240] flex items-center justify-center font-serif font-bold text-lg mb-4 group-hover:bg-[#245240] group-hover:text-white transition-colors">
                  {m.step}
                </div>
                <h3 className="text-xl font-serif font-bold text-[#245240] mb-2">
                  {m.title}
                </h3>
                <p className="text-xs font-semibold text-[#359540] mb-3">
                  {m.description}
                </p>
                <p className="text-xs text-[#4a5751] leading-relaxed">
                  {m.detail}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 8. LEADERSHIP PROFILE (WITH EXECUTIVE PORTRAIT) */}
      <section className="py-20 sm:py-28 bg-[#fcfcfb] border-y border-[#e2e7e4]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#245240] via-[#1b4332] to-[#143628] text-white shadow-xl border-4 border-white p-8 sm:p-10">
                {/* Background decorative brand petal */}
                <div className="absolute top-0 right-0 w-48 h-48 opacity-10 pointer-events-none">
                  <img
                    src="/branding/logo-icon.png"
                    alt=""
                    className="w-full h-full object-contain filter invert"
                  />
                </div>

                <div className="relative z-10 space-y-6">
                  {/* Regal Crown / Executive Insignia */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-5">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-[#7bb173]">
                      <Crown className="w-7 h-7 text-[#7bb173]" />
                    </div>
                    <Badge variant="green" size="sm" className="bg-[#359540]/30 text-[#bbdecc] border-[#359540]/40">
                      Crowned Princess
                    </Badge>
                  </div>

                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#7bb173] block mb-1">
                      Founder & Executive Creator
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-snug">
                      {COMPANY_PROFILE.leadership.name}
                    </h3>
                    <p className="text-xs text-[#bbdecc] mt-1">
                      {COMPANY_PROFILE.leadership.origin}
                    </p>
                  </div>

                  {/* Leadership Mandates */}
                  <div className="space-y-3 pt-2 text-xs text-[#e2e7e4]">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-[#7bb173] font-semibold block">WEFA Nigeria</span>
                      <span className="text-white">President of Agribusiness and Value Chain</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-[#7bb173] font-semibold block">Cubeseed Africa</span>
                      <span className="text-white">Non-Executive Director</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-[#7bb173] font-semibold block">Enterprise Leadership</span>
                      <span className="text-white">Over 20 Years Across Agribusiness & Humanitarian Initiatives</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <Badge variant="green" size="md">
                Leadership Profile
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#245240] leading-tight">
                Two Decades of Enterprise, Agribusiness & Humanitarian Leadership
              </h2>
              <div className="space-y-4 text-sm text-[#4a5751] leading-relaxed">
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

      {/* 9. PARTNERSHIP OPPORTUNITIES (WITH PHOTOGRAPHY) */}
      <section className="py-20 sm:py-28 bg-white">
        <Container>
          <div className="bg-[#f0f7f2] rounded-3xl p-8 sm:p-14 border border-[#bbdecc]/60">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-10">
              <div className="lg:col-span-7 space-y-4">
                <Badge variant="green" size="md">
                  Institutional Collaboration
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#245240] leading-tight">
                  Partner With ACL to Accelerate African Food Systems
                </h2>
                <p className="text-sm sm:text-base text-[#4a5751] leading-relaxed">
                  We invite commercial banks, development finance institutions, off-takers, and technical organisations to leverage our community engagement platform and 18-state network to deliver high-impact interventions.
                </p>
              </div>
              <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-md border border-[#bbdecc]/80 aspect-16/9">
                <img
                  src="/images/services/partnerships.jpg"
                  alt="Agricultural enterprise partnership and collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-2xl border border-[#e2e7e4] text-center">
                <h4 className="text-base font-bold text-[#245240] mb-2">Financial Institutions</h4>
                <p className="text-xs text-[#4a5751] leading-relaxed">
                  Engage audit-ready agribusinesses profiled through our structured capacity frameworks.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-[#e2e7e4] text-center">
                <h4 className="text-base font-bold text-[#245240] mb-2">Development Agencies</h4>
                <p className="text-xs text-[#4a5751] leading-relaxed">
                  Deploy targeted women and youth inclusion programmes with grassroots state-coordinator execution.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-[#e2e7e4] text-center">
                <h4 className="text-base font-bold text-[#245240] mb-2">Commercial Off-Takers</h4>
                <p className="text-xs text-[#4a5751] leading-relaxed">
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
