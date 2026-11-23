import React from 'react'
import { useRouteError, isRouteErrorResponse } from 'react-router-dom'
import { AlertCircle, RotateCcw, Home } from 'lucide-react'
import { Container } from './Container'
import { Button } from './Button'

export const RouteErrorBoundary: React.FC = () => {
  const error = useRouteError()

  let errorMessage = 'An unexpected error occurred while rendering this page.'
  let errorTitle = 'Page Rendering Notice'

  if (isRouteErrorResponse(error)) {
    errorTitle = `${error.status} ${error.statusText}`
    errorMessage = error.data?.message || errorMessage
  } else if (error instanceof Error) {
    errorMessage = error.message
  }

  return (
    <div className="min-h-[60vh] flex items-center justify-center py-16 px-4">
      <Container size="narrow">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#e2e7e4] shadow-md text-center space-y-5">
          <div className="w-14 h-14 rounded-full bg-[#f0f7f2] text-[#359540] flex items-center justify-center mx-auto">
            <AlertCircle className="w-7 h-7" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#245240]">
            {errorTitle}
          </h2>

          <p className="text-sm text-[#4a5751] max-w-md mx-auto leading-relaxed">
            {errorMessage}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Button
              onClick={() => window.location.reload()}
              variant="primary"
              size="sm"
              leftIcon={<RotateCcw className="w-4 h-4" />}
            >
              Refresh Page
            </Button>
            <Button
              href="/"
              variant="outline"
              size="sm"
              leftIcon={<Home className="w-4 h-4" />}
            >
              Return to Homepage
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}
