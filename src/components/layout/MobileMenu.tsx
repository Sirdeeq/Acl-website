import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, Phone, Mail, ArrowRight, MessageSquare, X } from 'lucide-react'
import { MAIN_NAV_ITEMS, OFFICIAL_CONTACT_INFO } from '@/content/navigation.content'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { useTheme } from '@/hooks/useTheme'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const { theme } = useTheme()
  const isDark = theme === 'dark' || theme === 'grey'

  if (!isOpen) return null

  const toggleSection = (title: string) => {
    setExpandedSection(expandedSection === title ? null : title)
  }

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#141716]/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Slide-in Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#f0f3f1] dark:bg-[#0e1411] shadow-2xl flex flex-col z-10 overflow-hidden border-l border-[#dce3df] dark:border-[#1d2923]">
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#dce3df] dark:border-[#1d2923] bg-white/70 dark:bg-[#141d18]">
          <Link to="/" onClick={onClose} className="inline-block">
            <img
              src={isDark ? '/branding/logo-white.png' : '/branding/logo-primary.png'}
              alt="Adesewa Concept Ltd"
              className="h-9 w-auto object-contain"
            />
          </Link>
          <button
            onClick={onClose}
            className="p-2 text-[#4a5751] dark:text-[#a1b3aa] hover:text-[#141716] dark:hover:text-white rounded-full hover:bg-white/60 dark:hover:bg-[#1c2923]"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Items (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-5 space-y-2">
          {MAIN_NAV_ITEMS.map((item) => {
            const hasSubmenu = item.items && item.items.length > 0
            const isExpanded = expandedSection === item.title

            if (hasSubmenu) {
              return (
                <div key={item.title} className="rounded-2xl border border-[#dce3df] dark:border-[#1d2923] overflow-hidden bg-white/80 dark:bg-[#131c17]">
                  <button
                    onClick={() => toggleSection(item.title)}
                    className="w-full flex items-center justify-between p-3.5 text-left font-semibold text-[#245240] dark:text-[#7bb173] hover:bg-white dark:hover:bg-[#1a2620] transition-colors"
                  >
                    <span>{item.title}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isExpanded ? 'rotate-180 text-[#359540]' : 'text-[#4a5751] dark:text-[#93a49b]'
                      }`}
                    />
                  </button>

                  {isExpanded && (
                    <div className="p-2 bg-white dark:bg-[#16211c] space-y-1 border-t border-[#dce3df] dark:border-[#1d2923]">
                      {item.items?.map((sub) => (
                        <Link
                          key={sub.title}
                          to={sub.href}
                          onClick={onClose}
                          className="block p-2.5 rounded-xl hover:bg-[#f0f4f2] dark:hover:bg-[#1f2d26] transition-colors"
                        >
                          <div className="flex items-center justify-between mb-0.5">
                            <span className="text-xs font-semibold text-[#245240] dark:text-[#7bb173]">
                              {sub.title}
                            </span>
                            {sub.badge && (
                              <Badge variant="green" size="sm">
                                {sub.badge}
                              </Badge>
                            )}
                          </div>
                          <p className="text-[11px] text-[#4a5751] dark:text-[#94a89e] line-clamp-1">
                            {sub.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            }

            return (
              <Link
                key={item.title}
                to={item.href}
                onClick={onClose}
                className="block p-3.5 text-sm font-semibold text-[#2d3632] dark:text-[#c4d2cb] hover:text-[#245240] dark:hover:text-white hover:bg-white dark:hover:bg-[#151f19] rounded-2xl transition-colors"
              >
                {item.title}
              </Link>
            )
          })}
        </div>

        {/* Drawer Footer & Direct Contact Actions */}
        <div className="p-5 border-t border-[#dce3df] dark:border-[#1d2923] bg-white/70 dark:bg-[#121a15] space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-[#dce3df] dark:border-[#1d2923]">
            <span className="text-xs font-semibold text-[#245240] dark:text-[#7bb173]">Website Theme:</span>
            <ThemeToggle showLabels={true} />
          </div>

          <Button
            href="/contact"
            variant="primary"
            size="md"
            className="w-full"
            rightIcon={<ArrowRight className="w-4 h-4" />}
            onClick={onClose}
          >
            Partner With Us
          </Button>

          <a
            href={OFFICIAL_CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full border border-[#25D366] text-[#25D366] font-medium text-xs hover:bg-[#25D366]/5 transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>

          <div className="pt-2 text-center text-xs text-[#4a5751] dark:text-[#94a89e] space-y-1">
            <div className="flex items-center justify-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#359540]" />
              <a href={`tel:${OFFICIAL_CONTACT_INFO.primaryPhone}`} className="hover:underline">
                {OFFICIAL_CONTACT_INFO.primaryPhone}
              </a>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#359540]" />
              <a href={`mailto:${OFFICIAL_CONTACT_INFO.primaryEmail}`} className="hover:underline">
                {OFFICIAL_CONTACT_INFO.primaryEmail}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
