import React from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  variant?: 'white' | 'sand' | 'pine' | 'tint'
  hoverEffect?: boolean
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = 'white',
  hoverEffect = true,
  ...props
}) => {
  const variantStyles = {
    white: 'bg-white border border-[#e2e7e4] text-[#141716] shadow-xs',
    sand: 'bg-[#f5f6f3] border border-[#e2e7e4] text-[#141716]',
    pine: 'bg-[#245240] border border-[#2d614d] text-white',
    tint: 'bg-[#f0f7f2] border border-[#bbdecc]/40 text-[#141716]',
  }

  return (
    <div
      className={cn(
        'rounded-2xl p-6 sm:p-8 transition-all duration-300',
        variantStyles[variant],
        hoverEffect &&
          'hover:-translate-y-1 hover:shadow-md hover:border-[#7bb173]/60',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
