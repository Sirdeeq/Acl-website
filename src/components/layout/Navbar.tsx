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
import { MobileMenu } from './MobileMenu'

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const location = useLocation()

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
      {/* Top Utility Bar */}
      <div className="bg-[#141716] text-[#c2ccc7] text-xs py-2 px-4 sm:px-8 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${OFFICIAL_CONTACT_INFO.primaryPhone}`}
              className="flex items-center gap-1.5 hover:text-[#7bb173] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#359540]" />
              <span>{OFFICIAL_CONTACT_INFO.primaryPhone}</span>
            </a>
            <span className="text-white/20">|</span>
            <a
              href={`mailto:${OFFICIAL_CONTACT_INFO.primaryEmail}`}
              className="flex items-center gap-1.5 hover:text-[#7bb173] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#359540]" />
              <span>{OFFICIAL_CONTACT_INFO.primaryEmail}</span>
            </a>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1.5 text-white/80">
              <span className="w-2 h-2 rounded-full bg-[#359540] animate-pulse" />
              AVC Community: 2,000+ Agribusiness Owners Across 18 Nigerian States
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#e2e7e4] py-3.5'
            : 'bg-white border-b border-[#e2e7e4]/60 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#359540] rounded-lg"
            aria-label="Adesewa Concept Ltd Home"
          >
            <img
              src="/branding/logo-primary.png"
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
                          ? 'text-[#245240] bg-[#f0f7f2] font-semibold'
                          : 'text-[#2d3632] hover:text-[#245240] hover:bg-[#f5f6f3]'
                      }`}
                      aria-expanded={isOpen}
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#359540]' : 'text-[#4a5751]'
                        }`}
                      />
                    </button>

                    {/* Mega Dropdown */}
                    {isOpen && (
                      <div className="absolute top-full left-0 mt-2 w-96 rounded-2xl bg-white p-3 shadow-xl border border-[#e2e7e4] transition-all duration-200 z-50">
                        <div className="space-y-1">
                          {item.items?.map((sub) => (
                            <Link
                              key={sub.title}
                              to={sub.href}
                              className="group block p-3 rounded-xl hover:bg-[#f0f7f2] transition-colors"
                            >
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-sm font-semibold text-[#245240] group-hover:text-[#359540] transition-colors">
                                  {sub.title}
                                </span>
                                {sub.badge && (
                                  <Badge variant="green" size="sm">
                                    {sub.badge}
                                  </Badge>
                                )}
                              </div>
                              <p className="text-xs text-[#4a5751] line-clamp-2 leading-relaxed">
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
                      ? 'text-[#245240] bg-[#f0f7f2] font-semibold'
                      : 'text-[#2d3632] hover:text-[#245240] hover:bg-[#f5f6f3]'
                  }`}
                >
                  {item.title}
                </Link>
              )
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/programmes/aairi"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-[#f0f7f2] text-[#245240] border border-[#bbdecc]/40 hover:bg-[#e2f1e6] transition-colors"
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

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              className="px-3 py-1.5 text-xs"
            >
              Connect
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#245240] hover:bg-[#f0f7f2] rounded-xl transition-colors cursor-pointer"
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
