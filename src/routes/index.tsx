import React, { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RootLayout } from '@/layouts/RootLayout'
import { RouteErrorBoundary } from '@/components/ui/RouteErrorBoundary'
import { ROUTES } from './routes.config'

// Lazy loaded page components
const HomePage = lazy(() => import('@/pages/home/HomePage').then((m) => ({ default: m.HomePage })))
const AboutPage = lazy(() => import('@/pages/about/AboutPage').then((m) => ({ default: m.AboutPage })))
const ServicesPage = lazy(() => import('@/pages/services/ServicesPage').then((m) => ({ default: m.ServicesPage })))
const ServiceDetailPage = lazy(() => import('@/pages/services/ServiceDetailPage').then((m) => ({ default: m.ServiceDetailPage })))
const AairiPage = lazy(() => import('@/pages/programmes/AairiPage').then((m) => ({ default: m.AairiPage })))
const AvcCommunityPage = lazy(() => import('@/pages/community/AvcCommunityPage').then((m) => ({ default: m.AvcCommunityPage })))
const PartnersPage = lazy(() => import('@/pages/partners/PartnersPage').then((m) => ({ default: m.PartnersPage })))
const InsightsPage = lazy(() => import('@/pages/insights/InsightsPage').then((m) => ({ default: m.InsightsPage })))
const InsightDetailPage = lazy(() => import('@/pages/insights/InsightDetailPage').then((m) => ({ default: m.InsightDetailPage })))
const ContactPage = lazy(() => import('@/pages/contact/ContactPage').then((m) => ({ default: m.ContactPage })))
const PrivacyPage = lazy(() => import('@/pages/legal/PrivacyPage').then((m) => ({ default: m.PrivacyPage })))
const TermsPage = lazy(() => import('@/pages/legal/TermsPage').then((m) => ({ default: m.TermsPage })))
const NotFoundPage = lazy(() => import('@/pages/not-found/NotFoundPage').then((m) => ({ default: m.NotFoundPage })))

// Simple loading state
const PageLoader = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="w-8 h-8 rounded-full border-2 border-[#bbdecc] border-t-[#359540] animate-spin" />
  </div>
)

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <RouteErrorBoundary />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<PageLoader />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: ROUTES.ABOUT,
        element: (
          <Suspense fallback={<PageLoader />}>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: ROUTES.SERVICES,
        element: (
          <Suspense fallback={<PageLoader />}>
            <ServicesPage />
          </Suspense>
        ),
      },
      {
        path: ROUTES.SERVICE_DETAIL,
        element: (
          <Suspense fallback={<PageLoader />}>
            <ServiceDetailPage />
          </Suspense>
        ),
      },
      {
        path: ROUTES.AAIRI,
        element: (
          <Suspense fallback={<PageLoader />}>
            <AairiPage />
          </Suspense>
        ),
      },
      {
        path: ROUTES.AVC_COMMUNITY,
        element: (
          <Suspense fallback={<PageLoader />}>
            <AvcCommunityPage />
          </Suspense>
        ),
      },
      {
        path: ROUTES.PARTNERS,
        element: (
          <Suspense fallback={<PageLoader />}>
            <PartnersPage />
          </Suspense>
        ),
      },
      {
        path: ROUTES.INSIGHTS,
        element: (
          <Suspense fallback={<PageLoader />}>
            <InsightsPage />
          </Suspense>
        ),
      },
      {
        path: ROUTES.INSIGHT_DETAIL,
        element: (
          <Suspense fallback={<PageLoader />}>
            <InsightDetailPage />
          </Suspense>
        ),
      },
      {
        path: ROUTES.CONTACT,
        element: (
          <Suspense fallback={<PageLoader />}>
            <ContactPage />
          </Suspense>
        ),
      },
      {
        path: ROUTES.PRIVACY,
        element: (
          <Suspense fallback={<PageLoader />}>
            <PrivacyPage />
          </Suspense>
        ),
      },
      {
        path: ROUTES.TERMS,
        element: (
          <Suspense fallback={<PageLoader />}>
            <TermsPage />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<PageLoader />}>
            <NotFoundPage />
          </Suspense>
        ),
      },
    ],
  },
])

export const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />
}
