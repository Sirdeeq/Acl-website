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
    <div className="py-12 sm:py-20 transition-colors duration-300">
      {/* Header */}
      <section className="pb-16 sm:pb-20 border-b border-[#dce3df] dark:border-[#1d2923]">
        <Container>
          <div className="max-w-3xl space-y-4">
            <Badge variant="green" size="md">
              Communications & Advisory Intake
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#245240] dark:text-white leading-tight">
              Connect With Adesewa Concept Ltd
            </h1>
            <p className="text-lg text-[#4a5751] dark:text-[#a8b8b0] leading-relaxed">
              Reach out to our executive and advisory teams regarding farm programme management, investment readiness, community membership, or strategic partnerships.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Grid: Form + Direct Contact Information */}
      <section className="py-16 sm:py-24 bg-[#e8ecea] dark:bg-[#121a15] transition-colors">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7 bg-white dark:bg-[#141d18] rounded-3xl p-8 sm:p-12 border border-[#dce3df] dark:border-[#22332b] shadow-xs transition-colors">
              <div className="mb-8 pb-4 border-b border-[#dce3df] dark:border-[#22332b]">
                <h2 className="text-2xl font-serif font-bold text-[#245240] dark:text-white">
                  Official Inquiry Form
                </h2>
                <p className="text-xs text-[#4a5751] dark:text-[#a8b8b0] mt-1">
                  Please complete the form below. Inquiries are routed to the relevant advisory desk.
                </p>
              </div>

              <ContactForm defaultCategory={defaultCategory} />
            </div>

            {/* Direct Information Column */}
            <div className="lg:col-span-5 space-y-6">
              {/* Official Communications Channels */}
              <div className="bg-[#245240] dark:bg-[#18382c] text-white rounded-3xl p-8 sm:p-10 space-y-6 shadow-md border border-[#2d614d]">
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

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#7bb173] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-[#bbdecc] block">Official Email Address:</span>
                      <a href={`mailto:${OFFICIAL_CONTACT_INFO.primaryEmail}`} className="hover:text-white font-medium block">
                        {OFFICIAL_CONTACT_INFO.primaryEmail}
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
              <div className="bg-white dark:bg-[#141d18] rounded-3xl p-8 border border-[#dce3df] dark:border-[#22332b] shadow-xs space-y-4 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#e8f3ed] dark:bg-[#18261f] text-[#359540] dark:text-[#4ade80]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-serif font-bold text-[#245240] dark:text-white">
                      Nationwide Coordinator Presence
                    </h4>
                    <span className="text-xs text-[#4a5751] dark:text-[#a8b8b0]">Ekiti State & 19 Nigerian States</span>
                  </div>
                </div>
                <p className="text-xs text-[#4a5751] dark:text-[#a8b8b0] leading-relaxed">
                  ACL coordinates agricultural operations across 19 Nigerian states through dedicated State Coordinators, ensuring direct field-level connectivity and localized execution.
                </p>
              </div>

              {/* Data & Confidentiality Guarantee */}
              <div id="consent" className="p-6 rounded-2xl bg-[#e8f3ed] dark:bg-[#16271e] border border-[#bbdecc]/50 dark:border-[#274434] text-xs text-[#245240] dark:text-[#bbdecc] space-y-2">
                <div className="flex items-center gap-2 font-bold text-[#245240] dark:text-white">
                  <ShieldCheck className="w-4 h-4 text-[#359540] dark:text-[#4ade80]" />
                  <span>Confidentiality & Data Protection</span>
                </div>
                <p className="text-[#4a5751] dark:text-[#a8b8b0] leading-relaxed">
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