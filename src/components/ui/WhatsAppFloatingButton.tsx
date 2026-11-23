import React, { useState } from 'react'
import { OFFICIAL_CONTACT_INFO } from '@/content/navigation.content'
import { Users, X } from 'lucide-react'

export const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true)

  // Target group URL or fallback
  const groupUrl = OFFICIAL_CONTACT_INFO.whatsappGroupUrl || OFFICIAL_CONTACT_INFO.whatsappUrl

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Interactive Tooltip Bubble */}
      {showTooltip && (
        <a
          href={groupUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white dark:bg-[#1c2720] border border-[#dce3df] dark:border-[#2a3f33] shadow-lg text-xs font-semibold text-[#141716] dark:text-[#e4ebe7] hover:border-[#25D366] transition-all group"
        >
          <span className="flex items-center gap-1.5 text-[#25D366] font-bold">
            <Users className="w-3.5 h-3.5" />
            <span>Join AVC Group (2,000+)</span>
          </span>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              setShowTooltip(false)
            }}
            className="text-[#93a29b] hover:text-[#141716] dark:hover:text-white p-0.5 rounded-full transition-colors ml-1 cursor-pointer"
            aria-label="Dismiss message"
          >
            <X className="w-3 h-3" />
          </button>
        </a>
      )}

      {/* Floating Action Button */}
      <a
        href={groupUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Join Adesewa Agribusiness Community on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-2xl transition-all duration-300 hover:scale-108 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 cursor-pointer"
      >
        {/* Pulsating ambient halo */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none opacity-60" />

        {/* Official WhatsApp Vector Logo */}
        <svg
          viewBox="0 0 24 24"
          width="28"
          height="28"
          stroke="currentColor"
          strokeWidth="0"
          fill="currentColor"
          aria-hidden="true"
          className="w-7 h-7 fill-white relative z-10"
        >
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 17.5c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.204 8.204 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 012.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.37-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05s.88 2.38 1 2.55c.12.17 1.74 2.65 4.21 3.72.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.18-.47-.3z" />
        </svg>

        {/* Live Active Community Dot */}
        <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-white dark:bg-[#121a15] flex items-center justify-center p-0.5 z-20">
          <span className="w-full h-full rounded-full bg-[#10b981]" />
        </span>
      </a>
    </div>
  )
}
