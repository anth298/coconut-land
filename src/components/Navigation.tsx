import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path: string) => {
    return router.pathname === path
  }

  const menuItems = [
    { name: 'Trang chủ', href: '/' },
    { name: 'Giới thiệu', href: '/about' },
    { name: 'Huyện', href: '/districts' },
    { name: 'Đặc sản', href: '/specialties' },
    { name: 'Làng nghề', href: '/craft-villages' },
    { name: 'Du lịch', href: '/tourism' },
    { name: 'Khách sạn', href: '/hotels' },
    { name: 'Lịch sử', href: '/history' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white dark:bg-[#1f2937] shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo variant="auto" />
          </div>

          {/* Main Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link 
                key={item.name}
                href={item.href}
                className="relative px-2 py-1"
              >
                <span className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href) 
                    ? 'text-primary-600 dark:text-[#c0a46d]' 
                    : 'text-gray-800 dark:text-white hover:text-primary-600 dark:hover:text-[#c0a46d]'
                }`}>
                  {item.name}
                </span>
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary-600 dark:bg-[#c0a46d] transform origin-left transition-transform duration-200 ease-out ${
                  isActive(item.href) ? 'scale-x-100' : 'scale-x-0'
                }`} />
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Start Planning Button */}
            <button className="hidden lg:block relative group">
              <span className="absolute inset-0 bg-primary-600 dark:bg-[#c0a46d] transform transition-all duration-300 ease-out group-hover:rotate-[-1deg] group-hover:scale-[1.02]"></span>
              <span className="absolute inset-0 bg-primary-600 dark:bg-[#c0a46d] transform transition-all duration-300 ease-out group-hover:rotate-[2deg] group-hover:scale-[1.02] opacity-75"></span>
              <span className="relative px-4 py-1.5 text-xs font-medium tracking-wider text-white block transition-all duration-300">
                <span className="flex items-center justify-center group-hover:scale-[1.02] transform transition-transform duration-300">
                 Lên Kế Hoạch
                </span>
              </span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-800 dark:text-white opacity-80 hover:opacity-100 transition-opacity"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#1f2937] shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-primary-600 dark:text-[#c0a46d] bg-gray-100 dark:bg-gray-800'
                    : 'text-gray-800 dark:text-gray-100 hover:text-primary-600 dark:hover:text-[#c0a46d] hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {/* Mobile version of Start Planning Button */}
            <button className="w-full mt-4 relative group">
              <span className="absolute inset-0 bg-primary-600 dark:bg-[#c0a46d] transform transition-all duration-300 ease-out group-hover:rotate-[-1deg] group-hover:scale-[1.02]"></span>
              <span className="absolute inset-0 bg-primary-600 dark:bg-[#c0a46d] transform transition-all duration-300 ease-out group-hover:rotate-[2deg] group-hover:scale-[1.02] opacity-75"></span>
              <span className="relative px-4 py-1.5 text-xs font-medium tracking-wider text-white block transition-all duration-300">
                <span className="flex items-center justify-center group-hover:scale-[1.02] transform transition-transform duration-300">
                  START PLANNING
                </span>
              </span>
            </button>
          </div>
        </div>
      )}
    </nav>
  )
} 