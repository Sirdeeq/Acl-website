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
    white: 'bg-white dark:bg-[#141d18] border border-[#dce3df] dark:border-[#22332b] text-[#141716] dark:text-[#e4ebe7] shadow-xs',
    sand: 'bg-[#e7ece9] dark:bg-[#18231d] border border-[#dce3df] dark:border-[#25362d] text-[#141716] dark:text-[#e4ebe7]',
    pine: 'bg-[#245240] dark:bg-[#18382c] border border-[#2d614d] text-white',
    tint: 'bg-[#e6f1eb] dark:bg-[#16271e] border border-[#bbdecc]/60 dark:border-[#2b4b39] text-[#141716] dark:text-[#e4ebe7]',
  }

  return (
    <div
      className={cn(
        'rounded-3xl p-6 sm:p-8 transition-all duration-300',
        variantStyles[variant],
        hoverEffect &&
          'hover:-translate-y-1 hover:shadow-md hover:border-[#7bb173]/80 dark:hover:border-[#7bb173]/60',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
