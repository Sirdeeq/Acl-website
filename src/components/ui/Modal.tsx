import React, { useEffect } from 'react'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  subtitle?: string
  children: React.ReactNode
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl'
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  maxWidth = 'md',
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  const maxWidthStyles = {
    sm: 'max-w-md',
    md: 'max-w-xl',
    lg: 'max-w-3xl',
    xl: 'max-w-5xl',
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#141716]/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div
        className={cn(
          'relative w-full bg-white dark:bg-[#141d18] rounded-3xl shadow-2xl border border-[#dce3df] dark:border-[#22332b] z-10 overflow-hidden transform transition-all my-8',
          maxWidthStyles[maxWidth],
        )}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 sm:p-8 border-b border-[#dce3df] dark:border-[#22332b] bg-[#f8faf8] dark:bg-[#18231d]">
          <div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#245240] dark:text-white">
              {title}
            </h3>
            {subtitle && (
              <p className="mt-1 text-sm text-[#4a5751] dark:text-[#a8b8b0] leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#4a5751] dark:text-[#a8b8b0] hover:text-[#141716] dark:hover:text-white hover:bg-[#e8ecea] dark:hover:bg-[#202e26] rounded-full transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto text-[#141716] dark:text-[#e4ebe7]">
          {children}
        </div>
      </div>
    </div>
  )
}
