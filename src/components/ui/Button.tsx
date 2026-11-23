import React from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark' | 'white'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  isExternal?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  href,
  isExternal,
  leftIcon,
  rightIcon,
  disabled,
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer'

  const variantClasses = {
    primary:
      'bg-[#359540] text-white hover:bg-[#2d8036] focus-visible:ring-[#359540] shadow-sm hover:shadow-md dark:bg-[#359540] dark:hover:bg-[#3ea84b]',
    secondary:
      'bg-[#245240] text-white hover:bg-[#1a3d30] focus-visible:ring-[#245240] shadow-sm hover:shadow-md dark:bg-[#1f4a39] dark:hover:bg-[#275d47]',
    outline:
      'border border-[#245240] text-[#245240] hover:bg-[#245240] hover:text-white focus-visible:ring-[#245240] dark:border-[#7bb173] dark:text-[#7bb173] dark:hover:bg-[#7bb173] dark:hover:text-[#0e1411]',
    ghost:
      'text-[#245240] hover:bg-[#f0f7f2] focus-visible:ring-[#245240] dark:text-[#bbdecc] dark:hover:bg-[#18261f]',
    dark:
      'bg-[#141716] text-white hover:bg-[#232927] focus-visible:ring-[#141716] dark:bg-[#1c2720] dark:hover:bg-[#24332a]',
    white:
      'bg-white text-[#245240] hover:bg-[#f5f9f6] focus-visible:ring-white shadow-sm hover:shadow-md font-semibold dark:bg-[#18261f] dark:text-white dark:hover:bg-[#21352a] dark:border dark:border-[#274434]',
  }

  const sizeClasses = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-7 py-3.5 gap-2.5',
  }

  const combinedClasses = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className,
  )

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
          <span>{children}</span>
          {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
        </a>
      )
    }

    return (
      <Link to={href} className={combinedClasses}>
        {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
      </Link>
    )
  }

  return (
    <button className={combinedClasses} disabled={disabled} {...props}>
      {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
    </button>
  )
}
