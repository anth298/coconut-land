import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

interface LogoProps {
  variant?: 'light' | 'dark' | 'auto'
  size?: 'small' | 'medium' | 'large'
}

export default function Logo({ variant = 'auto', size = 'medium' }: LogoProps) {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  // Wait for client-side rendering to access theme
  useEffect(() => setMounted(true), [])
  
  const sizes = {
    small: { width: 100, height: 30 },
    medium: { width: 140, height: 40 },
    large: { width: 180, height: 50 }
  }
  
  const { width, height } = sizes[size]
  
  // Return null during SSR to prevent hydration mismatch
  if (!mounted) {
    return (
      <Link href="/" className="flex items-center">
        <div style={{ width, height }} className="flex items-center" />
      </Link>
    )
  }
  
  // Determine which logo to show based on theme or variant
  let logoSrc = '/images/modern-logo.svg'
  
  if (variant === 'light') {
    logoSrc = '/images/modern-logo-light.svg'
  } else if (variant === 'dark') {
    logoSrc = '/images/modern-logo.svg'
  } else if (variant === 'auto') {
    // In auto mode, use light logo for dark theme and dark logo for light theme
    const currentTheme = resolvedTheme || theme
    logoSrc = currentTheme === 'dark' ? '/images/modern-logo-light.svg' : '/images/modern-logo.svg'
  }
  
  return (
    <Link href="/" className="flex items-center">
      <Image
        src={logoSrc}
        alt="Bến Tre Logo"
        width={width}
        height={height}
        className="w-auto"
        priority
      />
    </Link>
  )
} 