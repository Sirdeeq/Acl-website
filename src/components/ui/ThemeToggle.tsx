import React from 'react'
import { Moon, Contrast, Sun } from 'lucide-react'
import { useTheme, type Theme } from '@/hooks/useTheme'
import { cn } from '@/lib/utils'

interface ThemeToggleProps {
  className?: string
  showLabels?: boolean
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className, showLabels = false }) => {
  const { theme, setTheme } = useTheme()

  const options: { id: Theme; label: string; icon: React.ReactNode; tooltip: string }[] = [
    {
      id: 'dark',
      label: 'Dark',
      icon: <Moon className="w-3.5 h-3.5" />,
      tooltip: 'Dark Theme (Deep Forest - Default)',
    },
    {
      id: 'grey',
      label: 'Dark Grey',
      icon: <Contrast className="w-3.5 h-3.5" />,
      tooltip: 'Dark Grey Theme (Slate Charcoal)',
    },
    {
      id: 'light',
      label: 'Light',
      icon: <Sun className="w-3.5 h-3.5" />,
      tooltip: 'Light Theme (Pure White)',
    },
  ]

  return (
    <div
      role="group"
      aria-label="Theme Selection"
      className={cn(
        'inline-flex items-center p-1 rounded-full border transition-all duration-300',
        theme === 'dark'
          ? 'bg-[#121c17] border-[#22382c]'
          : theme === 'grey'
          ? 'bg-[#1b221e] border-[#38453e]'
          : 'bg-[#f0f3f1] border-[#d8dedb]',
        className,
      )}
    >
      {options.map((opt) => {
        const isActive = theme === opt.id
        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => setTheme(opt.id)}
            title={opt.tooltip}
            aria-label={opt.tooltip}
            aria-pressed={isActive}
            className={cn(
              'flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#359540]',
              isActive
                ? 'bg-[#359540] text-white shadow-xs'
                : theme === 'dark' || theme === 'grey'
                ? 'text-[#7bb173] hover:text-white hover:bg-white/5'
                : 'text-[#4a5751] hover:text-[#141716] hover:bg-black/5',
            )}
          >
            <span className={cn('transition-transform duration-200', isActive && 'scale-110')}>
              {opt.icon}
            </span>
            {showLabels && <span>{opt.label}</span>}
          </button>
        )
      })}
    </div>
  )
}
