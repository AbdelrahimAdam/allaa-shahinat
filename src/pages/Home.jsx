import React from 'react'
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-industrial-dark text-white overflow-hidden">
        <div className="relative h-[60vh] md:h-[70vh] lg:h-[85vh]">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: 'url("/renault-trucks-k-2021-ar.jpg.webp")',
              backgroundPosition: 'center 30%'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-industrial-dark/90 via-industrial-dark/80 to-industrial-dark/90"></div>
          </div>
          
          <div className="container mx-auto px-4 h-full flex items-center relative z-10">
            <div className="w-full max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
                <div className="lg:w-1/2 text-center lg:text-right">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6 leading-tight">
                    علا الدين شاحنات
                  </h1>
                  <p className="text-lg md:text-xl mb-6 lg:mb-8 text-gray-200 max-w-xl mx-auto lg:mx-0 lg:mr-auto">
                    قطع غيار شاحنات رينو الأصلية والمعتمدة لجميع الموديلات
                  </p>
                  <Link 
                    to="/products" 
                    className="bg-industrial-yellow hover:bg-yellow-500 text-industrial-dark px-8 py-4 rounded-xl font-bold inline-flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                  >
                    <span>تصفح المنتجات</span>
                    <i className="fa-solid fa-arrow-left"></i>
                  </Link>
                </div>

                <div className="lg:w-1/2 w-full">
                  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
                    {[
                      { icon: 'fa-solid fa-industry', title: 'جودة أصلية', desc: 'قطع غيار معتمدة من رينو' },
                      { icon: 'fa-solid fa-truck-fast', title: 'شحن سريع', desc: 'توصيل في جميع أنحاء المملكة' },
                      { icon: 'fa-solid fa-gem', title: 'أسعار تنافسية', desc: 'أفضل الأسعار في السوق' },
                      { icon: 'fa-solid fa-screwdriver-wrench', title: 'دعم فني', desc: 'استشارات فنية مجانية' }
                    ].map((f, i) => (
                      <div 
                        key={i} 
                        className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 md:p-6 rounded-2xl text-center hover:bg-white/15 transition-all duration-300 hover:border-industrial-yellow/30"
                      >
                        <i className={`${f.icon} text-2xl md:text-3xl mb-3 text-industrial-yellow`}></i>
                        <h3 className="font-bold text-sm md:text-base mb-1">{f.title}</h3>
                        <p className="text-xs md:text-sm text-gray-300 opacity-90">{f.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden md:block">
            <div className="animate-bounce">
              <i className="fa-solid fa-chevron-down text-industrial-yellow text-2xl"></i>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-industrial-dark mb-4">
              فئات المنتجات
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              اكتشف مجموعتنا الواسعة من قطع غيار شاحنات رينو الأصلية
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {categories.map((cat) => (
              <Link 
                key={cat.name} 
                to={`/products?category=${encodeURIComponent(cat.name)}`}
                className="group bg-white border border-gray-200 rounded-2xl p-6 md:p-8 text-center hover:shadow-2xl hover:border-industrial-yellow/30 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative inline-flex justify-center items-center mb-4 md:mb-6">
                  <div className="absolute w-16 h-16 md:w-20 md:h-20 bg-renault-blue/10 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                  <i className={`${cat.icon} text-3xl md:text-4xl text-renault-blue relative z-10`}></i>
                </div>
                <h3 className="font-bold text-xl mb-2 group-hover:text-renault-blue transition-colors duration-300">
                  {cat.name}
                </h3>
                <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed">
                  {cat.description}
                </p>
                <span className="inline-flex items-center gap-2 font-bold text-industrial-yellow bg-yellow-50 px-4 py-2 rounded-full text-sm md:text-base">
                  {cat.count} منتج
                  <i className="fa-solid fa-arrow-left text-sm"></i>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-industrial-dark mb-4">
              منتجات مميزة
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              أفضل قطع الغيار المختارة بعناية لشاحنات رينو
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {featuredProducts.map(product => (
              <div key={product.id} className="transform transition-all duration-300 hover:-translate-y-2">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 md:mt-16">
            <Link 
              to="/products" 
              className="inline-flex items-center gap-3 bg-renault-blue hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>عرض جميع المنتجات</span>
              <i className="fa-solid fa-arrow-left"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-industrial-dark to-renault-blue text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                تحتاج مساعدة في اختيار القطعة المناسبة؟
              </h3>
              <p className="text-gray-200">
                فريقنا الفني جاهز لمساعدتك في اختيار قطع الغيار الأصلية المناسبة لشاحنتك
              </p>
            </div>
            <div className="md:w-1/3 text-center md:text-right">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-3 bg-industrial-yellow hover:bg-yellow-500 text-industrial-dark px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105"
              >
                <span>اتصل بنا الآن</span>
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
