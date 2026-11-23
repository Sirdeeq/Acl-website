import React from 'react'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { OFFICIAL_CONTACT_INFO } from '@/content/navigation.content'

export const PrivacyPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-20">
      <Container size="narrow">
        <header className="mb-10 pb-8 border-b border-[#e2e7e4] space-y-3">
          <Badge variant="green" size="md">
            Data Protection & Privacy
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#245240]">
            Privacy Policy
          </h1>
          <p className="text-xs text-[#7bb173]">
            Last Updated: November 2026 • Adesewa Concept Ltd (ACL)
          </p>
        </header>

        <div className="space-y-6 text-sm text-[#4a5751] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-serif font-bold text-[#245240]">
              1. Introduction
            </h2>
            <p>
              Adesewa Concept Ltd ("ACL", "we", "our", or "us") respects the privacy of our agribusiness community members, clients, programme participants, and website visitors. This Privacy Policy outlines how we collect, use, store, and safeguard your personal and enterprise information.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-serif font-bold text-[#245240]">
              2. Information We Collect
            </h2>
            <p>
              When you submit an official inquiry, register an Expression of Interest (EOI) for the AAIRI initiative, or join the AVC Community, we may collect:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs">
              <li>Contact details: Name, email address, phone/WhatsApp number, state or location.</li>
              <li>Enterprise profiling data: Agribusiness name, value chain commodity, acreage, and operational milestones.</li>
              <li>Partnership inquiry specifics and communications history.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-serif font-bold text-[#245240]">
              3. Purpose of Data Processing
            </h2>
            <p>
              Your information is processed strictly to:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs">
              <li>Assess agribusiness readiness and match participants to relevant capacity-building bootcamps.</li>
              <li>Coordinate regional interventions with our network of 18 Nigerian State Coordinators.</li>
              <li>Communicate vital updates regarding the AVC Learning Programme and AAIRI milestones.</li>
              <li>Respond to direct commercial, institutional, and partnership inquiries.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-serif font-bold text-[#245240]">
              4. Confidentiality & Non-Disclosure
            </h2>
            <p>
              We treat all agricultural data, business plans, and financial models as confidential. ACL does not sell or lease your personal or enterprise data to third-party commercial marketing platforms. Data is shared with accredited financial institutions or off-takers only with explicit participant consent during deal-room matchmaking.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-serif font-bold text-[#245240]">
              5. Contact Our Privacy Lead
            </h2>
            <p>
              If you have inquiries regarding your data or wish to exercise data subject rights, please contact us at{' '}
              <a href={`mailto:${OFFICIAL_CONTACT_INFO.primaryEmail}`} className="text-[#359540] font-semibold underline">
                {OFFICIAL_CONTACT_INFO.primaryEmail}
              </a>
              .
            </p>
          </section>
        </div>
      </Container>
    </div>
  )
}
