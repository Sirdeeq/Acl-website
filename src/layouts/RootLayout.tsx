import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export const RootLayout: React.FC = () => {
  const { pathname } = useLocation()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen flex flex-col bg-[#f0f3f1] dark:bg-[#0e1411] text-[#141716] dark:text-[#e4ebe7] transition-colors duration-300 selection:bg-[#359540]/20 selection:text-[#245240] dark:selection:text-[#7bb173]">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
