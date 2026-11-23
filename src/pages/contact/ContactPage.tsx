import React from 'react'
import { useSearchParams } from 'react-router-dom'
import {
  Phone,
  Mail,
  Globe,
  MessageSquare,
  MapPin,
  ShieldCheck,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { ContactForm } from '@/features/contact/ContactForm'
import { OFFICIAL_CONTACT_INFO } from '@/content/navigation.content'

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams()
  const defaultCategory = searchParams.get('category') || undefined

  return (
    <div className="py-12 sm:py-20">
      {/* Header */}
      <section className="pb-16 sm:pb-20 border-b border-[#e2e7e4]">
        <Container>
          <div className="max-w-3xl space-y-4">
            <Badge variant="green" size="md">
              Communications & Advisory Intake
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#245240] leading-tight">
              Connect With Adesewa Concept Ltd
            </h1>
            <p className="text-lg text-[#4a5751] leading-relaxed">
              Reach out to our executive and advisory teams regarding farm programme management, investment readiness, community membership, or strategic partnerships.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Grid: Form + Direct Contact Information */}
      <section className="py-16 sm:py-24 bg-[#fcfcfb]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-[#e2e7e4] shadow-xs">
              <div className="mb-8 pb-4 border-b border-[#e2e7e4]">
                <h2 className="text-2xl font-serif font-bold text-[#245240]">
                  Official Inquiry Form
                </h2>
                <p className="text-xs text-[#4a5751] mt-1">
                  Please complete the form below. Inquiries are routed to the relevant advisory desk.
                </p>
              </div>

              <ContactForm defaultCategory={defaultCategory} />
            </div>

            {/* Direct Information Column */}
            <div className="lg:col-span-5 space-y-6">
              {/* Official Communications Channels */}
              <div className="bg-[#245240] text-white rounded-3xl p-8 sm:p-10 space-y-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#7bb173] block mb-1">
                    Direct Contact Channels
                  </span>
                  <h3 className="text-xl font-serif font-bold text-white">
                    Official ACL Telephony & Email
                  </h3>
                </div>

                <div className="space-y-4 text-sm text-[#e2e7e4]">
                  {/* Phone numbers */}
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#7bb173] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-[#bbdecc] block">Telephone Lines:</span>
                      <a href={`tel:${OFFICIAL_CONTACT_INFO.primaryPhone}`} className="hover:text-white font-medium block">
                        {OFFICIAL_CONTACT_INFO.primaryPhone}
                      </a>
                      <a href={`tel:${OFFICIAL_CONTACT_INFO.secondaryPhone}`} className="hover:text-white font-medium block">
                        {OFFICIAL_CONTACT_INFO.secondaryPhone}
                      </a>
                    </div>
                  </div>

                  {/* Emails */}
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#7bb173] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-[#bbdecc] block">Official Email Addresses:</span>
                      <a href={`mailto:${OFFICIAL_CONTACT_INFO.primaryEmail}`} className="hover:text-white font-medium block">
                        {OFFICIAL_CONTACT_INFO.primaryEmail}
                      </a>
                      <a href={`mailto:${OFFICIAL_CONTACT_INFO.secondaryEmail}`} className="hover:text-white font-medium block">
                        {OFFICIAL_CONTACT_INFO.secondaryEmail}
                      </a>
                    </div>
                  </div>

                  {/* Domain */}
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-[#7bb173] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-[#bbdecc] block">Programme Web Portal:</span>
                      <span className="font-medium text-white">{OFFICIAL_CONTACT_INFO.websiteDomain}</span>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Button */}
                <div className="pt-2">
                  <a
                    href={OFFICIAL_CONTACT_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-[#25D366] text-white font-semibold text-xs hover:bg-[#20ba5a] transition-all shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat With Our Team on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Geographic Reach & Coordination */}
              <div className="bg-white rounded-3xl p-8 border border-[#e2e7e4] shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#f0f7f2] text-[#359540]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-serif font-bold text-[#245240]">
                      Nationwide Coordinator Presence
                    </h4>
                    <span className="text-xs text-[#4a5751]">Ekiti State & 18 Nigerian States</span>
                  </div>
                </div>
                <p className="text-xs text-[#4a5751] leading-relaxed">
                  ACL coordinates agricultural operations across 18 Nigerian states through dedicated State Coordinators, ensuring direct field-level connectivity and localized execution.
                </p>
              </div>

              {/* Data & Confidentiality Guarantee */}
              <div id="consent" className="p-6 rounded-2xl bg-[#f0f7f2] border border-[#bbdecc]/40 text-xs text-[#245240] space-y-2">
                <div className="flex items-center gap-2 font-bold text-[#245240]">
                  <ShieldCheck className="w-4 h-4 text-[#359540]" />
                  <span>Confidentiality & Data Protection</span>
                </div>
                <p className="text-[#4a5751] leading-relaxed">
                  All farm data, operational metrics, and investment profiling submitted to Adesewa Concept Ltd are handled under strict confidentiality protocols.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
