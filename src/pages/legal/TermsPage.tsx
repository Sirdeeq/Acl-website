import React from 'react'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { OFFICIAL_CONTACT_INFO } from '@/content/navigation.content'

export const TermsPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-20">
      <Container size="narrow">
        <header className="mb-10 pb-8 border-b border-[#e2e7e4] space-y-3">
          <Badge variant="green" size="md">
            Legal Terms & Disclaimers
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#245240]">
            Terms of Use & Programme Disclaimers
          </h1>
          <p className="text-xs text-[#7bb173]">
            Last Updated: November 2026 • Adesewa Concept Ltd (ACL)
          </p>
        </header>

        <div className="space-y-6 text-sm text-[#4a5751] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-serif font-bold text-[#245240]">
              1. Institutional Mandate & Scope
            </h2>
            <p>
              Adesewa Concept Ltd (ACL) operates as an agribusiness consultancy, Farm Programme Manager, and ecosystem connector. ACL facilitates enterprise development, operational advisory, capacity building, and investment readiness profiling.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-serif font-bold text-[#245240]">
              2. Financing & Investment Readiness Disclaimer
            </h2>
            <p>
              ACL supports agribusiness profiling and preparation for engagement with financial institutions, development finance organisations, and private investors. ACL's role is to improve operational readiness and facilitate relevant introductions. <strong>Financing remains strictly subject to each capital provider's independent credit assessment, underwriting standards, and formal approval.</strong> ACL does not guarantee loan disbursement, grant awards, or private equity placement.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-serif font-bold text-[#245240]">
              3. Proposed Programmes & Future Timelines
            </h2>
            <p>
              References to proposed programmes—including the planned 400-participant AAIRI bootcamp, prospective partnerships with the Development Bank of Nigeria, or future membership structures—are subject to formal confirmation of delivery arrangements, co-funding, and venue schedules.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-serif font-bold text-[#245240]">
              4. Intellectual Property
            </h2>
            <p>
              All curriculum frameworks, methodologies (including the Understand-Prepare-Connect-Coordinate approach), branding assets, and editorial materials published on this website are the intellectual property of Adesewa Concept Ltd and protected under applicable copyright and trademark laws.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-serif font-bold text-[#245240]">
              5. Governing Law
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria. For inquiries regarding these terms, contact{' '}
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
