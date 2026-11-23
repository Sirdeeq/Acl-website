import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, Globe, ArrowUpRight, ShieldCheck, HeartHandshake } from 'lucide-react'
import { FOOTER_LINK_GROUPS, OFFICIAL_CONTACT_INFO } from '@/content/navigation.content'
import { Container } from '@/components/ui/Container'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1b4332] text-white border-t border-white/10">
      {/* Top Banner: Ecosystem Connector statement */}
      <div className="bg-[#143628] border-b border-white/10 py-10 sm:py-12">
        <Container>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#7bb173] mb-2">
                <HeartHandshake className="w-4 h-4 text-[#7bb173]" />
                Farm Programme Manager & Ecosystem Connector
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-snug">
                Connecting agribusinesses to capability, capital, markets and sustainable partnerships.
              </h3>
              <p className="mt-2 text-sm text-[#bbdecc] leading-relaxed">
                Strategic and operational management support for agricultural enterprise growth across Africa.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#359540] hover:bg-[#2d8036] text-white font-medium text-sm transition-all shadow-md"
              >
                <span>Initiate Engagement</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                to="/programmes/aairi"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-sm border border-white/20 transition-all"
              >
                <span>Explore AAIRI</span>
              </Link>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Footer Links & Information */}
      <div className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
            {/* Col 1: Brand & Contact Credentials */}
            <div className="lg:col-span-2 space-y-6">
              <Link to="/" className="inline-block">
                <img
                  src="/branding/logo-white.png"
                  alt="Adesewa Concept Ltd"
                  className="h-12 w-auto object-contain"
                />
              </Link>
              <p className="text-sm text-[#e2e7e4] leading-relaxed max-w-sm">
                Adesewa Concept Ltd (ACL) provides strategic and operational management support to agribusiness owners, bridging the gaps between farmers and capital, capability, and markets.
              </p>

              {/* Direct Communications List */}
              <div className="space-y-3 pt-2 text-sm text-[#bbdecc]">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#7bb173] shrink-0" />
                  <div className="flex flex-wrap gap-x-3">
                    <a href={`tel:${OFFICIAL_CONTACT_INFO.primaryPhone}`} className="hover:text-white transition-colors">
                      {OFFICIAL_CONTACT_INFO.primaryPhone}
                    </a>
                    <span>•</span>
                    <a href={`tel:${OFFICIAL_CONTACT_INFO.secondaryPhone}`} className="hover:text-white transition-colors">
                      {OFFICIAL_CONTACT_INFO.secondaryPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#7bb173] shrink-0" />
                  <div className="flex flex-wrap gap-x-3">
                    <a href={`mailto:${OFFICIAL_CONTACT_INFO.primaryEmail}`} className="hover:text-white transition-colors">
                      {OFFICIAL_CONTACT_INFO.primaryEmail}
                    </a>
                    <span>•</span>
                    <a href={`mailto:${OFFICIAL_CONTACT_INFO.secondaryEmail}`} className="hover:text-white transition-colors">
                      {OFFICIAL_CONTACT_INFO.secondaryEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Globe className="w-4 h-4 text-[#7bb173] shrink-0" />
                  <span className="text-white font-medium">{OFFICIAL_CONTACT_INFO.websiteDomain}</span>
                </div>
              </div>

              {/* Verified Community Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-[#bbdecc]">
                <ShieldCheck className="w-4 h-4 text-[#7bb173]" />
                <span>AVC Community: 2,000+ Members across 18 Nigerian States</span>
              </div>
            </div>

            {/* Col 2, 3, 4: Link Groups */}
            {FOOTER_LINK_GROUPS.slice(0, 3).map((group) => (
              <div key={group.title} className="space-y-4">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-[#7bb173]">
                  {group.title}
                </h4>
                <ul className="space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-sm text-[#e2e7e4] hover:text-white transition-colors inline-flex items-center gap-1 group"
                      >
                        <span className="group-hover:translate-x-0.5 transition-transform">
                          {link.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Legal and Compliance Disclaimers */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#bbdecc]">
            <p>
              © {new Date().getFullYear()} Adesewa Concept Ltd (ACL). All rights reserved. Registered in Nigeria.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Use
              </Link>
              <Link to="/contact" className="hover:text-white transition-colors">
                Official Inquiries
              </Link>
            </div>
          </div>

          {/* Institutional Note */}
          <div className="mt-4 text-[11px] text-white/50 leading-relaxed text-center sm:text-left">
            * Note: Proposed initiatives, including the planned 400-participant AAIRI bootcamp and prospective financial partnerships with the Development Bank of Nigeria, are subject to formal confirmation. Adesewa Concept Ltd facilitates agribusiness capability and investment readiness; financing decisions remain subject to each capital provider's independent evaluation.
          </div>
        </Container>
      </div>
    </footer>
  )
}
