import React from 'react'
import {
  ShieldCheck,
  TrendingUp,
  HeartHandshake,
  CheckCircle2,
  BookOpen,
  Crown,
  ArrowRight,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { COMPANY_PROFILE } from '@/content/company.content'

export const AboutPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-20">
      {/* Page Header */}
      <section className="pb-16 sm:pb-20 border-b border-[#e2e7e4]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <Badge variant="green" size="md">
                About Adesewa Concept Ltd
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#245240] leading-tight">
                Strategic Agribusiness Management & Ecosystem Orchestration
              </h1>
              <p className="text-lg text-[#4a5751] leading-relaxed">
                {COMPANY_PROFILE.summary}
              </p>
            </div>
            <div className="lg:col-span-5 rounded-3xl overflow-hidden shadow-lg border border-[#e2e7e4] aspect-4/3">
              <img
                src="/images/hero/hero-farm-aerial.jpg"
                alt="Agricultural landscape and operations"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Purpose, Vision, Mission */}
      <section id="vision-mission" className="py-16 sm:py-24 bg-[#fcfcfb]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card variant="white" className="p-8">
              <div className="p-3 rounded-xl bg-[#f0f7f2] text-[#359540] w-fit mb-4">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#245240] mb-3">
                Our Purpose
              </h3>
              <p className="text-sm text-[#4a5751] leading-relaxed">
                {COMPANY_PROFILE.purpose}
              </p>
            </Card>

            <Card variant="white" className="p-8">
              <div className="p-3 rounded-xl bg-[#f0f7f2] text-[#359540] w-fit mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#245240] mb-3">
                Our Vision
              </h3>
              <p className="text-sm text-[#4a5751] leading-relaxed">
                {COMPANY_PROFILE.vision}
              </p>
            </Card>

            <Card variant="white" className="p-8">
              <div className="p-3 rounded-xl bg-[#f0f7f2] text-[#359540] w-fit mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#245240] mb-3">
                Our Mission
              </h3>
              <p className="text-sm text-[#4a5751] leading-relaxed">
                {COMPANY_PROFILE.mission}
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Farm Programme Manager & Ecosystem Connector */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#e2e7e4]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <Badge variant="green" size="md">
                Our Ecosystem Mandate
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#245240] leading-tight">
                Acting as a Farm Programme Manager and Ecosystem Connector
              </h2>
              <p className="text-sm sm:text-base text-[#4a5751] leading-relaxed">
                {COMPANY_PROFILE.ecosystemRole}
              </p>
              <p className="text-sm sm:text-base text-[#4a5751] leading-relaxed">
                {COMPANY_PROFILE.communityOverview}
              </p>

              <div className="p-5 rounded-2xl bg-[#f0f7f2] border border-[#bbdecc]/40 text-xs text-[#245240] leading-relaxed">
                <strong>Our Commitment:</strong> {COMPANY_PROFILE.commitment}
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#fcfcfb] rounded-3xl p-8 border border-[#e2e7e4] space-y-6">
              <div className="rounded-2xl overflow-hidden aspect-16/9 shadow-xs mb-4">
                <img
                  src="/images/services/farm-management.jpg"
                  alt="Farm management operations"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-serif font-bold text-[#245240]">
                Why ACL is Different
              </h3>
              <ul className="space-y-3 text-sm text-[#4a5751]">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#359540] shrink-0 mt-0.5" />
                  <span>
                    <strong>Grassroots Community Reach:</strong> A connected network of more than 2,000 agribusiness owners supported by state coordinators across 18 Nigerian states.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#359540] shrink-0" />
                  <span>
                    <strong>Enterprise Readiness Focus:</strong> We don't just advocate; we profile, audit, and restructure agribusiness operations into bankable propositions.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#359540] shrink-0" />
                  <span>
                    <strong>Inclusive Value Chains:</strong> Prioritizing women and youth participation, creating sustainable livelihood pathways from farm gate to market.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* 4-Step Methodology */}
      <section id="how-we-work" className="py-16 sm:py-24 bg-[#fcfcfb]">
        <Container>
          <SectionHeading
            badge="Strategic Delivery"
            title="Our Four-Step Methodology"
            subtitle="How ACL structures interventions to ensure long-term operational resilience and financing success."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_PROFILE.methodology.map((m) => (
              <div
                key={m.step}
                className="p-6 rounded-2xl bg-white border border-[#e2e7e4] shadow-xs hover:border-[#359540] transition-colors"
              >
                <span className="text-2xl font-serif font-bold text-[#359540] block mb-2">
                  {m.step}
                </span>
                <h4 className="text-lg font-serif font-bold text-[#245240] mb-2">
                  {m.title}
                </h4>
                <p className="text-xs font-semibold text-[#245240] mb-3">
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

      {/* Leadership Profile: Princess Adesola Debbie Daramola (With Portrait) */}
      <section id="leadership" className="py-16 sm:py-24 bg-white border-t border-[#e2e7e4]">
        <Container>
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center space-y-3">
              <Badge variant="green" size="md">
                Executive Leadership
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#245240]">
                {COMPANY_PROFILE.leadership.name}
              </h2>
              <p className="text-sm font-semibold text-[#359540]">
                {COMPANY_PROFILE.leadership.role} • {COMPANY_PROFILE.leadership.origin}
              </p>
            </div>

            {/* Profile Content Container */}
            <div className="bg-[#fcfcfb] rounded-3xl p-8 sm:p-12 border border-[#e2e7e4] shadow-xs space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-[#e2e7e4] pb-8">
                {/* Executive Insignia Card */}
                <div className="md:col-span-4 rounded-2xl overflow-hidden bg-gradient-to-br from-[#245240] to-[#143628] text-white p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-md border-2 border-white min-h-[220px]">
                  <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[#7bb173] mb-3">
                    <Crown className="w-8 h-8 text-[#7bb173]" />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#7bb173] block mb-1">
                    Crowned Princess
                  </span>
                  <span className="text-xs text-[#bbdecc]">
                    Igbemo Ekiti, Ekiti State
                  </span>
                </div>

                <div className="md:col-span-8 space-y-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#7bb173] block">
                    Leadership Bio
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-[#245240]">
                    Agribusiness & Inclusive-Livelihood Leader
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4a5751] leading-relaxed">
                    Over two decades of experience across entrepreneurship, corporate communications, and humanitarian programming.
                  </p>
                  <p className="text-xs text-[#245240] font-medium italic">
                    "{COMPANY_PROFILE.leadership.honorificTitle}"
                  </p>
                </div>
              </div>

              {/* Biography Paragraphs */}
              <div className="space-y-4 text-sm text-[#4a5751] leading-relaxed">
                {COMPANY_PROFILE.leadership.bio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Key Credentials & Appointments */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#e2e7e4]">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#7bb173] block mb-2">
                    Current Appointments
                  </span>
                  <ul className="space-y-2 text-xs text-[#245240]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#359540] font-bold">•</span>
                      <span><strong>Founder & Executive Creator:</strong> Adesewa Concept Ltd</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#359540] font-bold">•</span>
                      <span><strong>President:</strong> Agribusiness & Value Chain at WEFA Nigeria</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#359540] font-bold">•</span>
                      <span><strong>Non-Executive Director:</strong> Cubeseed Africa</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#7bb173] block mb-2">
                    Academic & Professional Credentials
                  </span>
                  <ul className="space-y-2 text-xs text-[#245240]">
                    {COMPANY_PROFILE.leadership.credentials.map((cred, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <BookOpen className="w-3.5 h-3.5 text-[#359540] shrink-0 mt-0.5" />
                        <span>{cred}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center pt-4">
              <Button href="/contact" variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Connect With Adesewa Concept Ltd
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
