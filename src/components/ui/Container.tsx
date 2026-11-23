import React from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  size?: 'default' | 'wide' | 'narrow'
}

export const Container: React.FC<ContainerProps> = ({
  children,
  size = 'default',
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        size === 'default' && 'max-w-7xl',
        size === 'wide' && 'max-w-8xl',
        size === 'narrow' && 'max-w-4xl',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
