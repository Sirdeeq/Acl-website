import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { INQUIRY_CATEGORIES } from '@/data/inquiryCategories'
import { Button } from '@/components/ui/Button'
import { OFFICIAL_CONTACT_INFO } from '@/content/navigation.content'

const contactSchema = z.object({
  fullName: z.string().min(2, 'Full name is required (minimum 2 characters)'),
  email: z.string().email('Please enter a valid email address'),
  phoneNumber: z.string().min(8, 'Please enter a valid telephone number'),
  organization: z.string().optional(),
  stateOrLocation: z.string().optional(),
  category: z.string().min(1, 'Please select an inquiry category'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  consentGiven: z.literal(true, {
    message: 'You must agree to the data privacy and communications terms',
  }),
})

type ContactFormData = z.infer<typeof contactSchema>

interface ContactFormProps {
  defaultCategory?: string
  onSuccessCallback?: () => void
}

export const ContactForm: React.FC<ContactFormProps> = ({ defaultCategory }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submissionError, setSubmissionError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      category: defaultCategory || 'Agribusiness Support',
      consentGiven: false as unknown as true,
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmissionError(null)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1200))
      console.log('ACL Contact Inquiry Received:', data)
      setIsSubmitted(true)
      reset()
    } catch {
      setSubmissionError('An error occurred while submitting your message. Please reach out directly via phone or email.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="rounded-3xl bg-[#e8f3ed] dark:bg-[#14261c] border border-[#bbdecc] dark:border-[#274434] p-8 sm:p-10 text-center transition-colors">
        <div className="w-16 h-16 rounded-full bg-[#359540]/15 dark:bg-[#359540]/25 flex items-center justify-center mx-auto mb-4 text-[#359540] dark:text-[#4ade80]">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-serif font-bold text-[#245240] dark:text-white mb-2">
          Thank You for Contacting Adesewa Concept Ltd
        </h3>
        <p className="text-sm text-[#4a5751] dark:text-[#bbdecc] max-w-md mx-auto mb-6 leading-relaxed">
          Your inquiry has been received. Our advisory team will review your submission and respond promptly.
        </p>
        <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            size="sm"
          >
            Send Another Message
          </Button>
          <a
            href={OFFICIAL_CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#245240] dark:text-[#7bb173] hover:underline"
          >
            Or reach us immediately on WhatsApp →
          </a>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {submissionError && (
        <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 text-red-700 dark:text-red-300 text-sm flex items-center gap-2">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{submissionError}</span>
        </div>
      )}

      {/* Row 1: Name and Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#245240] dark:text-[#7bb173] mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Adeola Adeleke"
            {...register('fullName')}
            className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none ${
              errors.fullName
                ? 'border-red-400 dark:border-red-500/50 bg-red-50/30 dark:bg-red-950/20 text-red-900 dark:text-red-200 focus:border-red-500'
                : 'border-[#dce3df] dark:border-[#24362c] bg-[#f8faf8] dark:bg-[#101713] text-[#141716] dark:text-white placeholder-[#93a29b] dark:placeholder-[#5c7066] focus:border-[#359540] dark:focus:border-[#4ade80] focus:ring-2 focus:ring-[#359540]/20'
            }`}
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#245240] dark:text-[#7bb173] mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="e.g. adeola@agribusiness.com"
            {...register('email')}
            className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none ${
              errors.email
                ? 'border-red-400 dark:border-red-500/50 bg-red-50/30 dark:bg-red-950/20 text-red-900 dark:text-red-200 focus:border-red-500'
                : 'border-[#dce3df] dark:border-[#24362c] bg-[#f8faf8] dark:bg-[#101713] text-[#141716] dark:text-white placeholder-[#93a29b] dark:placeholder-[#5c7066] focus:border-[#359540] dark:focus:border-[#4ade80] focus:ring-2 focus:ring-[#359540]/20'
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Row 2: Phone and Organization */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#245240] dark:text-[#7bb173] mb-2">
            Phone / WhatsApp Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            placeholder="e.g. +234 803 123 4567"
            {...register('phoneNumber')}
            className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none ${
              errors.phoneNumber
                ? 'border-red-400 dark:border-red-500/50 bg-red-50/30 dark:bg-red-950/20 text-red-900 dark:text-red-200 focus:border-red-500'
                : 'border-[#dce3df] dark:border-[#24362c] bg-[#f8faf8] dark:bg-[#101713] text-[#141716] dark:text-white placeholder-[#93a29b] dark:placeholder-[#5c7066] focus:border-[#359540] dark:focus:border-[#4ade80] focus:ring-2 focus:ring-[#359540]/20'
            }`}
          />
          {errors.phoneNumber && (
            <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.phoneNumber.message}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#245240] dark:text-[#7bb173] mb-2">
            Farm / Organization Name
          </label>
          <input
            type="text"
            placeholder="e.g. GreenHorizon Integrated Farms"
            {...register('organization')}
            className="w-full px-4 py-3 rounded-xl border border-[#dce3df] dark:border-[#24362c] bg-[#f8faf8] dark:bg-[#101713] text-[#141716] dark:text-white placeholder-[#93a29b] dark:placeholder-[#5c7066] text-sm focus:border-[#359540] dark:focus:border-[#4ade80] focus:ring-2 focus:ring-[#359540]/20 focus:outline-none"
          />
        </div>
      </div>

      {/* Row 3: Inquiry Category & State */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#245240] dark:text-[#7bb173] mb-2">
            Inquiry Category <span className="text-red-500">*</span>
          </label>
          <select
            {...register('category')}
            className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none bg-[#f8faf8] dark:bg-[#101713] text-[#141716] dark:text-white ${
              errors.category
                ? 'border-red-400 dark:border-red-500/50 focus:border-red-500'
                : 'border-[#dce3df] dark:border-[#24362c] focus:border-[#359540] dark:focus:border-[#4ade80] focus:ring-2 focus:ring-[#359540]/20'
            }`}
          >
            {INQUIRY_CATEGORIES.map((cat) => (
              <option key={cat.value} value={cat.value} className="bg-white dark:bg-[#101713] text-[#141716] dark:text-white">
                {cat.label}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.category.message}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#245240] dark:text-[#7bb173] mb-2">
            State / Location in Nigeria or Country
          </label>
          <input
            type="text"
            placeholder="e.g. Ekiti, Oyo, Akwa Ibom, or Lagos"
            {...register('stateOrLocation')}
            className="w-full px-4 py-3 rounded-xl border border-[#dce3df] dark:border-[#24362c] bg-[#f8faf8] dark:bg-[#101713] text-[#141716] dark:text-white placeholder-[#93a29b] dark:placeholder-[#5c7066] text-sm focus:border-[#359540] dark:focus:border-[#4ade80] focus:ring-2 focus:ring-[#359540]/20 focus:outline-none"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-[#245240] dark:text-[#7bb173] mb-2">
          Your Message or Objective <span className="text-red-500">*</span>
        </label>
        <textarea
          rows={4}
          placeholder="Please describe your agribusiness, current operational scale, or how you would like to collaborate with Adesewa Concept Ltd..."
          {...register('message')}
          className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none ${
            errors.message
              ? 'border-red-400 dark:border-red-500/50 bg-red-50/30 dark:bg-red-950/20 text-red-900 dark:text-red-200 focus:border-red-500'
              : 'border-[#dce3df] dark:border-[#24362c] bg-[#f8faf8] dark:bg-[#101713] text-[#141716] dark:text-white placeholder-[#93a29b] dark:placeholder-[#5c7066] focus:border-[#359540] dark:focus:border-[#4ade80] focus:ring-2 focus:ring-[#359540]/20'
          }`}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.message.message}</p>
        )}
      </div>

      {/* Consent Checkbox */}
      <div className="pt-2">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            {...register('consentGiven')}
            className="mt-1 w-4 h-4 rounded text-[#359540] border-[#dce3df] dark:border-[#24362c] focus:ring-[#359540] dark:bg-[#101713]"
          />
          <span className="text-xs text-[#4a5751] dark:text-[#a8b8b0] leading-relaxed">
            I agree that Adesewa Concept Ltd may collect and process my information in accordance with its privacy standards to respond to this inquiry. I understand financing and partnership decisions are subject to formal evaluation.
          </span>
        </label>
        {errors.consentGiven && (
          <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.consentGiven.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting}
        className="w-full"
        rightIcon={
          isSubmitting ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Send className="w-4 h-4" />
          )
        }
      >
        {isSubmitting ? 'Transmitting Inquiry...' : 'Submit Official Inquiry'}
      </Button>
    </form>
  )
}
