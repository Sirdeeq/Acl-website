import React from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
  variant?: 'green' | 'pine' | 'sand' | 'outline' | 'amber'
  size?: 'sm' | 'md'
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  variant = 'green',
  size = 'md',
  ...props
}) => {
  const variantStyles = {
    green: 'bg-[#f0f7f2] text-[#245240] border border-[#bbdecc]/50',
    pine: 'bg-[#245240] text-white',
    sand: 'bg-[#f5f6f3] text-[#4a5751] border border-[#e2e7e4]',
    outline: 'border border-[#7bb173] text-[#245240]',
    amber: 'bg-[#fffbeb] text-[#92400e] border border-[#fde68a]',
  }

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5 font-medium',
    md: 'text-xs uppercase tracking-wider px-3 py-1 font-semibold',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full transition-colors',
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}
