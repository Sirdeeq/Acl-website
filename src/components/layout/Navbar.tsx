import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  Mail,
  ArrowRight,
  Sparkles,
} from 'lucide-react'
import { MAIN_NAV_ITEMS, OFFICIAL_CONTACT_INFO } from '@/content/navigation.content'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { useTheme } from '@/hooks/useTheme'
import { MobileMenu } from './MobileMenu'

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const location = useLocation()
  const { theme } = useTheme()
  const isDark = theme === 'dark' || theme === 'grey'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown on route change
  useEffect(() => {
    setActiveDropdown(null)
    setMobileMenuOpen(false)
  }, [location.pathname])

  return (
    <>
      {/* Top Utility Bar with Theme Switcher at the Top */}
      <div className="bg-[#141716] dark:bg-[#080d0b] text-[#c2ccc7] text-xs py-2 px-4 sm:px-8 border-b border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${OFFICIAL_CONTACT_INFO.primaryPhone}`}
              className="flex items-center gap-1.5 hover:text-[#7bb173] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#359540]" />
              <span>{OFFICIAL_CONTACT_INFO.primaryPhone}</span>
            </a>
            <span className="text-white/20 hidden sm:inline">|</span>
            <a
              href={`mailto:${OFFICIAL_CONTACT_INFO.primaryEmail}`}
              className="hidden sm:flex items-center gap-1.5 hover:text-[#7bb173] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#359540]" />
              <span>{OFFICIAL_CONTACT_INFO.primaryEmail}</span>
            </a>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="hidden md:flex items-center gap-1.5 text-white/80">
              <span className="w-2 h-2 rounded-full bg-[#359540] animate-pulse" />
              AVC Community: 2,000+ Agribusiness Owners Across 19 Nigerian States
            </span>
            {/* Light, Dark and Grey Switcher on Top of Navbar */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-[#bbdecc] hidden sm:inline font-medium">Theme:</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#f0f3f1]/95 dark:bg-[#0e1411]/95 backdrop-blur-md shadow-sm border-b border-[#dce3df] dark:border-[#1d2923] py-3.5'
            : 'bg-[#f0f3f1] dark:bg-[#0e1411] border-b border-[#dce3df]/70 dark:border-[#1d2923]/70 py-4.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo with dynamic light/dark variant */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#359540] rounded-lg"
            aria-label="Adesewa Concept Ltd Home"
          >
            <img
              src={isDark ? '/branding/logo-white.png' : '/branding/logo-primary.png'}
              alt="Adesewa Concept Ltd Logo"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-102"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {MAIN_NAV_ITEMS.map((item) => {
              const hasSubmenu = item.items && item.items.length > 0
              const isActive =
                location.pathname === item.href ||
                (hasSubmenu && item.items?.some((sub) => location.pathname === sub.href))

              if (hasSubmenu) {
                const isOpen = activeDropdown === item.title

                return (
                  <div
                    key={item.title}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.title)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-full transition-all duration-200 cursor-pointer ${
                        isActive || isOpen
                          ? 'text-[#245240] dark:text-[#7bb173] bg-white dark:bg-[#18241e] font-semibold shadow-xs'
                          : 'text-[#2d3632] dark:text-[#c4d2cb] hover:text-[#245240] dark:hover:text-white hover:bg-white/60 dark:hover:bg-[#18241e]'
                      }`}
                      aria-expanded={isOpen}
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#359540]' : 'text-[#4a5751] dark:text-[#93a49b]'
                        }`}
                      />
                    </button>

                    {/* Mega Dropdown */}
                    {isOpen && (
                      <div className="absolute top-full left-0 mt-2 w-96 rounded-2xl bg-white dark:bg-[#151f1a] p-3 shadow-xl border border-[#dce3df] dark:border-[#22332b] transition-all duration-200 z-50">
                        <div className="space-y-1">
                          {item.items?.map((sub) => (
                            <Link
                              key={sub.title}
                              to={sub.href}
                              className="group block p-3 rounded-xl hover:bg-[#f0f4f2] dark:hover:bg-[#1c2923] transition-colors"
                            >
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-sm font-semibold text-[#245240] dark:text-[#7bb173] group-hover:text-[#359540] dark:group-hover:text-white transition-colors">
                                  {sub.title}
                                </span>
                                {sub.badge && (
                                  <Badge variant="green" size="sm">
                                    {sub.badge}
                                  </Badge>
                                )}
                              </div>
                              <p className="text-xs text-[#4a5751] dark:text-[#a1b3aa] line-clamp-2 leading-relaxed">
                                {sub.description}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <Link
                  key={item.title}
                  to={item.href}
                  className={`px-3.5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-[#245240] dark:text-[#7bb173] bg-white dark:bg-[#18241e] font-semibold shadow-xs'
                      : 'text-[#2d3632] dark:text-[#c4d2cb] hover:text-[#245240] dark:hover:text-white hover:bg-white/60 dark:hover:bg-[#18241e]'
                  }`}
                >
                  {item.title}
                </Link>
              )
            })}
          </nav>

          {/* Action CTAs: Restored clean layout */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/programmes/aairi"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-white dark:bg-[#17241d] text-[#245240] dark:text-[#7bb173] border border-[#bbdecc]/60 dark:border-[#2d473a] hover:bg-[#f0f4f2] dark:hover:bg-[#1f3027] transition-colors shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#359540]" />
              <span>AAIRI 2026/27</span>
            </Link>
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Partner With Us
            </Button>
          </div>

          {/* Mobile Right Controls: Restored clean layout */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              className="px-3.5 py-1.5 text-xs"
            >
              Connect
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#245240] dark:text-[#7bb173] hover:bg-white dark:hover:bg-[#18241e] rounded-xl transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Navigation Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  )
}
