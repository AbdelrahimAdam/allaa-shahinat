import React from 'react'
import { Link } from 'react-router-dom'
import { useScrollToTop } from '../hooks/useScrollToTop'
import productsData from '../data/products.json'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { scrollToTop } = useScrollToTop()
  
  // Get unique categories from products.json
  const uniqueCategories = [...new Set(productsData.map(product => product.category))]
  
  // Split categories into two arrays for two columns
  const categoriesColumn1 = uniqueCategories.slice(0, Math.ceil(uniqueCategories.length / 2))
  const categoriesColumn2 = uniqueCategories.slice(Math.ceil(uniqueCategories.length / 2))

  return (
    <footer className="industrial-gradient text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 space-x-reverse mb-4">
              <div className="w-10 h-10 bg-industrial-yellow rounded-full flex items-center justify-center">
                <span className="text-industrial-dark font-bold">ع</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">علا الدين شاحنات</h3>
                <p className="text-industrial-yellow text-sm">قطع غيار شاحنات رينو الأصلية</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              نحن المتخصصون الرائدون في توريد قطع غيار شاحنات رينو بجودة عالية وأسعار تنافسية. 
              خبرة طويلة في مجال قطع غيار الشاحنات الثقيلة في مصر.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="https://facebook.com" className="text-gray-300 hover:text-industrial-yellow transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://youtube.com" className="text-gray-300 hover:text-industrial-yellow transition-colors">
                <span className="sr-only">YouTube</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-industrial-yellow transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.23 14.815 3.74 13.664 3.74 12.367s.49-2.448 1.386-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.896.875 1.386 2.026 1.386 3.323s-.49 2.448-1.386 3.323c-.875.807-2.026 1.297-3.323 1.297z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Categories - Column 1 */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-industrial-yellow">الأقسام</h4>
            <div className="grid grid-cols-2 gap-4">
              <ul className="space-y-2">
                {categoriesColumn1.map((category) => (
                  <li key={category}>
                    <Link 
                      to={`/products?category=${encodeURIComponent(category)}`}
                      onClick={scrollToTop}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* Categories - Column 2 */}
              <ul className="space-y-2">
                {categoriesColumn2.map((category) => (
                  <li key={category}>
                    <Link 
                      to={`/products?category=${encodeURIComponent(category)}`}
                      onClick={scrollToTop}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-industrial-yellow">معلومات التواصل</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="w-8 h-8 bg-renault-blue rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <span className="text-gray-300 block">+20 100 000 0000</span>
                  <span className="text-gray-300 block text-sm">+20 200 000 0000</span>
                </div>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="w-8 h-8 bg-renault-blue rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-gray-300">info@alaaldeen-trucks.com</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="w-8 h-8 bg-renault-blue rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-gray-300">القاهرة، مصر</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="w-8 h-8 bg-renault-blue rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-gray-300">الأحد - الخميس: 9 ص - 5 م</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} علا الدين شاحنات - جميع الحقوق محفوظة
            </p>
            <div className="flex space-x-6 space-x-reverse text-sm text-gray-400">
              <Link to="/privacy" onClick={scrollToTop} className="hover:text-white transition-colors">سياسة الخصوصية</Link>
              <Link to="/terms" onClick={scrollToTop} className="hover:text-white transition-colors">الشروط والأحكام</Link>
              <button 
                onClick={scrollToTop}
                className="hover:text-white transition-colors"
              >
                العودة للأعلى
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
