import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import productsData from '../data/products.json'
import ProductCard from '../components/ProductCard'

const Home = () => {
  const featuredProducts = productsData.slice(0, 8)

  const categories = [
    {
      name: 'قطع الدفرنس',
      icon: 'fa-solid fa-gears',
      count: productsData.filter(p => p.category === 'قطع الدفرنس').length,
      description: 'تروس، كراون ويل، رولمان بلي، جوانات، هاف شفت'
    },
    {
      name: 'أكس كامل',
      icon: 'fa-solid fa-truck',
      count: productsData.filter(p => p.category === 'أكس كامل').length,
      description: 'أكس خلفي، أكس أمامي، علبة دفرنس كاملة، هوبات'
    },
    {
      name: 'قطع المحرك',
      icon: 'fa-solid fa-engine',
      count: productsData.filter(p => p.category === 'قطع المحرك').length,
      description: 'طرمبات، رأس موتور، فلاتر، جنزير، شمعات'
    },
    {
      name: 'نظام الفرامل',
      icon: 'fa-solid fa-circle-stop',
      count: productsData.filter(p => p.category === 'نظام الفرامل').length,
      description: 'تيل فرامل، هوبات، سليندر، خراطيم'
    }
  ]

  // Smooth scroll initialization
  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      * {
        scroll-behavior: smooth;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      
      body {
        font-feature-settings: "kern", "liga", "clig", "calt";
        font-kerning: normal;
        text-rendering: optimizeLegibility;
        overflow-x: hidden;
      }
    `
    document.head.appendChild(style)
    
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fafafa] to-[#f0f0f0]">
      {/* Hero Section - Adjusted with proper spacing */}
      <section className="relative bg-[#1a1a1a] text-white overflow-hidden pb-8 md:pb-0">
        <div className="relative h-auto md:h-[70vh] lg:h-[85vh] pt-20 md:pt-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: 'url("/renault-trucks-k-2021-ar.jpg.webp")',
              backgroundPosition: 'center 30%'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/90 via-[#1a1a1a]/80 to-[#1a1a1a]/90"></div>
          </div>
          
          <div className="container mx-auto px-4 h-full flex items-center relative z-10 py-12 md:py-0">
            <div className="w-full max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
                <div className="lg:w-1/2 text-center lg:text-right mb-8 md:mb-0">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6 leading-tight font-['Tajawal','sans-serif']">
                    علاء الدين شاحنات
                  </h1>
                  <p className="text-lg md:text-xl mb-6 lg:mb-8 text-gray-200 max-w-xl mx-auto lg:mx-0 lg:mr-auto font-light tracking-wide">
                    قطع غيار شاحنات رينو الأصليه والمعتمده لجميع الموديلات
                  </p>
                  <Link 
                    to="/products" 
                    className="bg-[#FFD700] hover:bg-[#FFE44D] text-[#1a1a1a] px-8 py-4 rounded-xl font-bold inline-flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl font-['Tajawal','sans-serif']"
                  >
                    <span className="tracking-wide">تصفح المنتجات</span>
                    <i className="fa-solid fa-arrow-left"></i>
                  </Link>
                </div>

                {/* Feature Cards Grid - Positioned properly for mobile */}
                <div className="lg:w-1/2 w-full relative z-20">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 relative -top-6 sm:top-0">
                    {[
                      { icon: 'fa-solid fa-industry', title: 'جوده أصلية', desc: 'قطع غيار معتمده من رينو' },
                      { icon: 'fa-solid fa-truck-fast', title: 'شحن سريع', desc: 'توصيل في جميع أنحاء المملكة' },
                      { icon: 'fa-solid fa-gem', title: 'أسعار تنافسية', desc: 'أفضل الأسعار في السوق' },
                      { icon: 'fa-solid fa-screwdriver-wrench', title: 'دعم فني', desc: 'استشارات فنية مجانية' }
                    ].map((f, i) => (
                      <div 
                        key={i} 
                        className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 md:p-6 rounded-2xl text-center hover:bg-white/15 transition-all duration-300 hover:border-[#FFD700]/30 shadow-lg md:shadow-xl h-full min-h-[140px] sm:min-h-[160px] flex flex-col justify-center"
                      >
                        <i className={`${f.icon} text-2xl md:text-3xl mb-3 text-[#FFD700]`}></i>
                        <h3 className="font-bold text-sm md:text-base mb-1 font-['Tajawal','sans-serif']">{f.title}</h3>
                        <p className="text-xs md:text-sm text-gray-300 opacity-90 tracking-tight">{f.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll indicator - positioned properly */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden md:block">
            <div className="animate-bounce">
              <i className="fa-solid fa-chevron-down text-[#FFD700] text-2xl"></i>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section - Adjusted spacing */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-white to-[#f8f8f8] mt-0 md:mt-0">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4 font-['Tajawal','sans-serif']">
              فئات المنتجات
            </h2>
            <p className="text-[#666] max-w-2xl mx-auto font-light tracking-wide">
              اكتشف مجموعتنا الواسعة من قطع غيار شاحنات رينو الأصلية
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {categories.map((cat) => (
              <Link 
                key={cat.name} 
                to={`/products?category=${encodeURIComponent(cat.name)}`}
                className="group bg-white border border-[#e0e0e0] rounded-2xl p-6 md:p-8 text-center hover:shadow-2xl hover:border-[#FFD700]/30 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden shadow-sm"
              >
                <div className="relative inline-flex justify-center items-center mb-4 md:mb-6">
                  <div className="absolute w-16 h-16 md:w-20 md:h-20 bg-[#0052A1]/10 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                  <i className={`${cat.icon} text-3xl md:text-4xl text-[#0052A1] relative z-10`}></i>
                </div>
                <h3 className="font-bold text-xl mb-2 group-hover:text-[#0052A1] transition-colors duration-300 font-['Tajawal','sans-serif']">
                  {cat.name}
                </h3>
                <p className="text-sm md:text-base text-[#666] mb-4 md:mb-6 leading-relaxed font-light tracking-wide">
                  {cat.description}
                </p>
                <span className="inline-flex items-center gap-2 font-bold text-[#FFD700] bg-[#FFF9E6] px-4 py-2 rounded-full text-sm md:text-base">
                  {cat.count} منتج
                  <i className="fa-solid fa-arrow-left text-sm"></i>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-[#f8f8f8] to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4 font-['Tajawal','sans-serif']">
              منتجات مميزة
            </h2>
            <p className="text-[#666] max-w-2xl mx-auto font-light tracking-wide">
              أفضل قطع الغيار المختارة بعناية لشاحنات رينو
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {featuredProducts.map(product => (
              <div 
                key={product.id} 
                className="transform transition-all duration-300 hover:-translate-y-2 min-h-full"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 md:mt-16">
            <Link 
              to="/products" 
              className="inline-flex items-center gap-3 bg-[#0052A1] hover:bg-[#0066CC] text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-['Tajawal','sans-serif']"
            >
              <span className="tracking-wide">عرض جميع المنتجات</span>
              <i className="fa-solid fa-arrow-left"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-[#1a1a1a] to-[#0052A1] text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3 text-center md:text-right">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 font-['Tajawal','sans-serif']">
                تحتاج مساعدة في اختيار القطعة المناسبة؟
              </h3>
              <p className="text-gray-200 font-light tracking-wide">
                فريقنا الفني جاهز لمساعدتك في اختيار قطع الغيار الأصلية المناسبة لشاحنتك
              </p>
            </div>
            <div className="md:w-1/3 text-center md:text-right">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-3 bg-[#FFD700] hover:bg-[#FFE44D] text-[#1a1a1a] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full md:w-auto justify-center font-['Tajawal','sans-serif']"
              >
                <span className="tracking-wide">اتصل بنا الآن</span>
                <i className="fa-solid fa-phone"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
