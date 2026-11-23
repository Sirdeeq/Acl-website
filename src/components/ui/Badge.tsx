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
    green: 'bg-[#e7f2ec] dark:bg-[#16271e] text-[#245240] dark:text-[#7bb173] border border-[#bbdecc]/70 dark:border-[#274434]',
    pine: 'bg-[#245240] text-white',
    sand: 'bg-[#e5e9e7] dark:bg-[#1c2923] text-[#4a5751] dark:text-[#a1b3aa] border border-[#d2dad6] dark:border-[#283b32]',
    outline: 'border border-[#7bb173] text-[#245240] dark:text-[#7bb173]',
    amber: 'bg-[#fffbeb] dark:bg-[#2a2414] text-[#92400e] dark:text-[#fbbf24] border border-[#fde68a] dark:border-[#785b18]',
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
