import React from 'react'
import { Badge } from './Badge'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  badge?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  theme?: 'light' | 'dark'
  className?: string
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  theme = 'light',
  className,
}) => {
  const isDark = theme === 'dark'

  return (
    <div
      className={cn(
        'max-w-3xl mb-12 sm:mb-16',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className,
      )}
    >
      {badge && (
        <div className="mb-4">
          <Badge
            variant={isDark ? 'sand' : 'green'}
            size="md"
            className={isDark ? 'bg-white/10 text-white border-white/20' : 'dark:bg-[#182820] dark:text-[#7bb173] dark:border-[#2d473a]'}
          >
            {badge}
          </Badge>
        </div>
      )}
      <h2
        className={cn(
          'text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight mb-4 leading-tight',
          isDark ? 'text-white' : 'text-[#245240] dark:text-white',
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'text-base sm:text-lg leading-relaxed',
            isDark ? 'text-[#e2e7e4]' : 'text-[#4a5751] dark:text-[#a8b8b0]',
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
