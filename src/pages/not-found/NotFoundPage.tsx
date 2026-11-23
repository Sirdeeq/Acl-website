import React from 'react'
import { Home } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export const NotFoundPage: React.FC = () => {
  return (
    <div className="py-24 sm:py-36 text-center">
      <Container size="narrow">
        <span className="text-6xl sm:text-7xl font-serif font-bold text-[#359540] block mb-4">
          404
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#245240] mb-4">
          Page Not Found
        </h1>
        <p className="text-base text-[#4a5751] max-w-md mx-auto mb-8 leading-relaxed">
          The requested page could not be located. It may have moved or the link may have expired.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button href="/" variant="primary" size="md" leftIcon={<Home className="w-4 h-4" />}>
            Return to Homepage
          </Button>
          <Button href="/contact" variant="outline" size="md">
            Contact Support
          </Button>
        </div>
      </Container>
    </div>
  )
}
