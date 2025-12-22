import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useScrollToTop } from '../hooks/useScrollToTop'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const { scrollToTop } = useScrollToTop()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const categories = [
    { name: 'قطع الدفرنس', path: '/products?category=قطع الدفرنس' },
    { name: 'أكس كامل', path: '/products?category=أكس كامل' },
    { name: 'نظام التعليق', path: '/products?category=نظام التعليق' },
    { name: 'قطع المحرك', path: '/products?category=قطع المحرك' },
    { name: 'قطع القير', path: '/products?category=قطع القير' },
    { name: 'نظام الفرامل', path: '/products?category=نظام الفرامل' },
    { name: 'الكهرباء', path: '/products?category=الكهرباء' },
    { name: 'نظام التبريد', path: '/products?category=نظام التبريد' },
    { name: 'مستهلكات', path: '/products?category=مستهلكات' },
    { name: 'إكسسوارات', path: '/products?category=إكسسوارات' }
  ]

  const navItems = [
    { name: 'الرئيسية', path: '/' },
    { name: 'جميع المنتجات', path: '/products' },
    { name: 'التواصل', path: '/contact' }
  ]

  const handleNavClick = (path) => {
    setIsMenuOpen(false)
    // التأكد من التمرير للأعلى عند النقر على رابط التنقل
    setTimeout(() => {
      scrollToTop()
    }, 100)
  }

  return (
    <>
      <header className="industrial-gradient text-white sticky top-0 z-50 shadow-lg">
        {/* Main Navigation */}
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-2 space-x-reverse"
              onClick={() => handleNavClick('/')}
            >
              <div className="w-12 h-12 bg-industrial-yellow rounded-full flex items-center justify-center">
                <span className="text-industrial-dark font-bold text-xl">ع</span>
              </div>
              <div>
                <h1 className="text-xl font-bold">علاء الدين شاحنات</h1>
                <p className="text-industrial-yellow text-sm">قطع غيار أصلية</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8 space-x-reverse">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`font-medium hover:text-industrial-yellow transition-colors ${
                    location.pathname === item.path ? 'text-industrial-yellow border-b-2 border-industrial-yellow' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Categories Dropdown */}
              <div className="relative group">
                <button className="font-medium hover:text-industrial-yellow transition-colors flex items-center">
                  الأقسام
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-64 bg-white text-industrial-dark rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  {categories.map((category) => (
                    <Link
                      key={category.path}
                      to={category.path}
                      onClick={() => handleNavClick(category.path)}
                      className="block px-4 py-3 hover:bg-gray-100 border-b border-gray-200 last:border-b-0"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 bg-industrial-dark rounded-lg p-4">
              <div className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => handleNavClick(item.path)}
                    className="block py-2 px-4 hover:bg-renault-blue rounded transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-2 border-t border-gray-600">
                  <p className="px-4 py-2 text-industrial-yellow font-bold">الأقسام:</p>
                  {categories.map((category) => (
                    <Link
                      key={category.path}
                      to={category.path}
                      onClick={() => handleNavClick(category.path)}
                      className="block py-2 px-6 hover:bg-renault-blue rounded transition-colors text-sm"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Scroll to Top Button - Mobile */}
      {isScrolled && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 left-6 z-40 bg-renault-blue text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-110 lg:hidden"
          aria-label="العودة إلى الأعلى"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </>
  )
}

export default Header
