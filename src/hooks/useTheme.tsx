import React, { createContext, useContext, useEffect, useState } from 'react'

export type Theme = 'dark' | 'grey' | 'light'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('acl_theme') as Theme
      if (saved === 'dark' || saved === 'grey' || saved === 'light') return saved
    }
    // Default is dark as requested
    return 'dark'
  })

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('dark', 'grey', 'light')
    root.classList.add(theme)
    root.setAttribute('data-theme', theme)
    localStorage.setItem('acl_theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setThemeState((prev) => {
      if (prev === 'dark') return 'grey'
      if (prev === 'grey') return 'light'
      return 'dark'
    })
  }

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
