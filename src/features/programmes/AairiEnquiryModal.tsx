import React, { useState } from 'react'
import { Modal } from '@/components/ui/Modal'
import { Button } from '@/components/ui/Button'
import { CheckCircle2, Send, Loader2 } from 'lucide-react'

interface AairiEnquiryModalProps {
  isOpen: boolean
  onClose: () => void
}

export const AairiEnquiryModal: React.FC<AairiEnquiryModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1000)
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        onClose()
        setSubmitted(false)
      }}
      title="AAIRI Expression of Interest (EOI)"
      subtitle="Register your interest for the Adesewa Agribusiness Investment Readiness Initiative."
      maxWidth="md"
    >
      {submitted ? (
        <div className="text-center py-6">
          <div className="w-14 h-14 bg-[#359540]/15 text-[#359540] rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h4 className="text-xl font-serif font-bold text-[#245240] mb-2">
            Expression of Interest Logged
          </h4>
          <p className="text-sm text-[#4a5751] mb-6 max-w-sm mx-auto">
            Thank you for registering your interest in AAIRI. Our programme management office will communicate updates regarding profiling schedules and confirmed bootcamp arrangements.
          </p>
          <Button onClick={onClose} variant="primary" size="sm">
            Close Window
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="p-3.5 rounded-xl bg-[#f0f7f2] border border-[#bbdecc]/40 text-xs text-[#245240] leading-relaxed">
            * Note: Programme dates, locations, and bootcamp logistics for the proposed 400-participant cohort remain subject to confirmation. Submitting this form expresses interest only.
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#245240] mb-1">
              Contact Full Name
            </label>
            <input
              required
              type="text"
              placeholder="e.g. Samuel Adekunle"
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#e2e7e4] text-sm focus:border-[#359540] focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-[#245240] mb-1">
                Agribusiness / Farm Name
              </label>
              <input
                required
                type="text"
                placeholder="e.g. Apex Agri Solutions"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#e2e7e4] text-sm focus:border-[#359540] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#245240] mb-1">
                Value Chain Focus
              </label>
              <input
                required
                type="text"
                placeholder="e.g. Rice, Poultry, Cassava, Horticulture"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#e2e7e4] text-sm focus:border-[#359540] focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-[#245240] mb-1">
                Email Address
              </label>
              <input
                required
                type="email"
                placeholder="samuel@apexagri.ng"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#e2e7e4] text-sm focus:border-[#359540] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#245240] mb-1">
                Phone / WhatsApp Number
              </label>
              <input
                required
                type="tel"
                placeholder="+234 803 000 0000"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#e2e7e4] text-sm focus:border-[#359540] focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#245240] mb-1">
              State / Operating Location
            </label>
            <input
              required
              type="text"
              placeholder="e.g. Ekiti, Ondo, Oyo, Kaduna, etc."
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#e2e7e4] text-sm focus:border-[#359540] focus:outline-none"
            />
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              size="md"
              disabled={loading}
              className="w-full"
              rightIcon={
                loading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )
              }
            >
              {loading ? 'Submitting...' : 'Register Expression of Interest'}
            </Button>
          </div>
        </form>
      )}
    </Modal>
  )
}
