import React from 'react'
import { Link } from 'react-router-dom'
import productsData from '../data/products.json'
import ProductCard from '../components/ProductCard'
import AdsensePlaceholder from '../components/AdsensePlaceholder'

const Home = () => {
  const featuredProducts = productsData.slice(0, 8)
  const categories = [
    {
      name: 'قطع الدفرنس',
      icon: '⚙️',
      count: productsData.filter(p => p.category === 'قطع الدفرنس').length,
      description: 'تروس، كراون ويل، رولمان بلي، جوانات، هاف شفت'
    },
    {
      name: 'أكس كامل',
      icon: '🚛',
      count: productsData.filter(p => p.category === 'أكس كامل').length,
      description: 'أكس خلفي، أكس أمامي، علبة دفرنس كاملة، هوبات'
    },
    {
      name: 'قطع المحرك',
      icon: '🔧',
      count: productsData.filter(p => p.category === 'قطع المحرك').length,
      description: 'طرمبات، رأس موتور، فلاتر، جنزير، شمعات'
    },
    {
      name: 'نظام الفرامل',
      icon: '🛑',
      count: productsData.filter(p => p.category === 'نظام الفرامل').length,
      description: 'تيل فرامل، هوبات، سليندر، خراطيم'
    }
  ]

  return (
    <div>
      {/* Hero Section with Transparent Cards */}
      <section className="relative bg-industrial-dark text-white py-20 lg:py-32 overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/renault-trucks-k-2021-ar.jpg.webp")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-industrial-dark/95 via-industrial-dark/80 to-industrial-dark/70"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-industrial-dark/60 to-transparent lg:block hidden"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Main Content */}
            <div className="lg:w-1/2 w-full">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/20 shadow-2xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="block text-white drop-shadow-lg">علا الدين شاحنات</span>
                  <span className="block text-industrial-yellow mt-2 drop-shadow-lg">قطع غيار رينو أصلية</span>
                </h1>
                <p className="text-xl mb-8 text-gray-100 leading-relaxed drop-shadow-lg">
                  نوفر جميع قطع غيار شاحنات رينو بجودة عالية وأسعار تنافسية. 
                  خبرة طويلة في مجال قطع غيار الشاحنات الثقيلة.
                  متوافقة مع جميع الموديلات: Renault Premium, Kerax, Midlum, Magnum
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/products"
                    className="bg-industrial-yellow text-industrial-dark px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 text-center shadow-lg hover:shadow-xl"
                  >
                    تصفح المنتجات
                  </Link>
                  <a
                    href="https://wa.me/249999929966"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-industrial-yellow text-industrial-yellow bg-white/10 backdrop-blur-sm px-8 py-4 rounded-xl font-bold text-lg hover:bg-industrial-yellow hover:text-industrial-dark transition-all duration-300 transform hover:scale-105 text-center shadow-lg hover:shadow-xl"
                  >
                    استشارة فنية
                  </a>
                </div>
              </div>
            </div>
            
            {/* Transparent Features Grid */}
            <div className="lg:w-2/5 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                {[
                  {
                    icon: '🏭',
                    title: 'جودة أصلية',
                    description: 'قطع غيار معتمدة من رينو',
                    color: 'from-blue-500/20 to-blue-600/20'
                  },
                  {
                    icon: '🚚',
                    title: 'شحن سريع',
                    description: 'توصيل 24-48 ساعة',
                    color: 'from-green-500/20 to-green-600/20'
                  },
                  {
                    icon: '💎',
                    title: 'أسعار تنافسية',
                    description: 'أفضل الأسعار بالأسواق',
                    color: 'from-yellow-500/20 to-yellow-600/20'
                  },
                  {
                    icon: '🔧',
                    title: 'دعم فني',
                    description: 'استشارات فنية مجانية',
                    color: 'from-red-500/20 to-red-600/20'
                  }
                ].map((feature, index) => (
                  <div 
                    key={index} 
                    className={`bg-gradient-to-br ${feature.color} backdrop-blur-lg border border-white/30 rounded-2xl p-4 lg:p-6 text-center hover:transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group`}
                  >
                    <div className="text-3xl lg:text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                      {feature.icon}
                    </div>
                    <h3 className="font-bold text-white text-lg lg:text-xl mb-2 drop-shadow-lg">
                      {feature.title}
                    </h3>
                    <p className="text-gray-200 text-sm lg:text-base drop-shadow-lg">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Mobile Stats - Only visible on mobile */}
              <div className="mt-6 lg:hidden">
                <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-industrial-yellow mb-1">50+</div>
                      <div className="text-white text-sm">منتج متوفر</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-industrial-yellow mb-1">10+</div>
                      <div className="text-white text-sm">فئة مختلفة</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating WhatsApp Button for Mobile */}
          <div className="lg:hidden fixed bottom-24 left-6 z-50">
            <a
              href="https://wa.me/249999929966"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white p-4 rounded-full shadow-2xl hover:bg-green-700 transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.495 3.59"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-industrial-yellow/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-renault-blue/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Adsense Banner */}
      <AdsensePlaceholder type="leaderboard" />

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-industrial-dark mb-4">
              أقسام المنتجات
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              اكتشف مجموعتنا الشاملة من قطع غيار شاحنات رينو المصممة خصيصًا لتحقيق أقصى أداء
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <Link
                key={category.name}
                to={`/products?category=${encodeURIComponent(category.name)}`}
                className="group bg-white rounded-2xl p-8 industrial-shadow hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-industrial-yellow/30 relative overflow-hidden"
              >
                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-industrial-yellow/5 to-renault-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-industrial-dark mb-3 group-hover:text-renault-blue transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-renault-blue font-bold text-lg">
                      {category.count} منتج
                    </span>
                    <span className="text-industrial-yellow group-hover:translate-x-2 transition-transform duration-300 text-xl">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-block bg-industrial-dark text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-renault-blue transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              عرض جميع الأقسام
            </Link>
          </div>
        </div>
      </section>

      {/* Adsense Rectangle */}
      <AdsensePlaceholder type="rectangle" />

      {/* Featured Products */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-industrial-dark mb-4">
              منتجات مميزة
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              أفضل قطع الغيار الأكثر طلبًا من عملائنا، مختارة بعناية لضمان الجودة والأداء
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-block bg-renault-blue text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              عرض جميع المنتجات
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-industrial-dark mb-4">
              لماذا تختار علا الدين شاحنات؟
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              نتميز بتقديم أفضل الحلول والخدمات في مجال قطع غيار شاحنات رينو
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🏭',
                title: 'جودة أصلية',
                description: 'جميع قطع الغيار أصلية ومعتمدة من رينو بضمان الجودة والمتانة'
              },
              {
                icon: '🚚',
                title: 'شحن سريع',
                description: 'توصيل لجميع أنحاء المملكة خلال 24-48 ساعة مع خدمة الطوارئ المتاحة'
              },
              {
                icon: '💎',
                title: 'أسعار تنافسية',
                description: 'أفضل الأسعار في السوق مع ضمان الجودة والكفاءة في الأداء'
              },
              {
                icon: '🔧',
                title: 'دعم فني متكامل',
                description: 'فريق فني متخصص لاستشارات التركيب والصيانة والدعم الفني الشامل'
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="text-center group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-industrial-yellow/30"
              >
                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-industrial-dark mb-4 group-hover:text-renault-blue transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-industrial-dark text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: '50+', label: 'منتج متوفر' },
              { number: '10+', label: 'فئة مختلفة' },
              { number: '24/7', label: 'دعم فني' },
              { number: '100%', label: 'رضا عملاء' }
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-3xl lg:text-4xl font-bold text-industrial-yellow mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-industrial-dark mb-8 text-center">
                علا الدين شاحنات - قطع غيار شاحنات رينو الأصلية
              </h2>
              
              <div className="prose prose-lg max-w-none text-justify">
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  نحن في <strong>علا الدين شاحنات</strong> متخصصون في توريد جميع أنواع قطع غيار شاحنات رينو الأصلية والبديلة، 
                  بما في ذلك الدفرنس، الأكس الكامل، مساعدات الهواء، قطع المحرك، القير، 
                  الفرامل، والتبريد. جميع القطع متوافقة مع شاحنات Renault Premium و Kerax 
                  و Midlum و Magnum.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-renault-blue/5 to-industrial-yellow/5 p-6 rounded-xl border-r-4 border-renault-blue">
                      <h3 className="font-bold text-industrial-dark mb-3 text-xl">قطع نظام الدفرنس</h3>
                      <p className="text-gray-700 leading-relaxed">
                        تروس دفرنس، كراون ويل وبنيون، رولمان بلي، جوانات، هاف شفت - جميعها 
                        بجودة عالية وتصنيع أوروبي لضمان الأداء الأمثل والتحمل طويل الأمد 
                        في الظروف القاسية.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-industrial-yellow/5 to-renault-blue/5 p-6 rounded-xl border-r-4 border-industrial-yellow">
                      <h3 className="font-bold text-industrial-dark mb-3 text-xl">نظام المحرك</h3>
                      <p className="text-gray-700 leading-relaxed">
                        طرمبات مياه وزيت، رأس موتور، فلاتر زيت وهواء وديزل، جنزير توقيت، 
                        شمعات - لضمان كفاءة المحرك وأدائه المثالي واستهلاك وقود مثالي.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-renault-blue/5 to-industrial-yellow/5 p-6 rounded-xl border-r-4 border-renault-blue">
                      <h3 className="font-bold text-industrial-dark mb-3 text-xl">نظام التعليق والفرامل</h3>
                      <p className="text-gray-700 leading-relaxed">
                        مساعدات هواء، يايات، موازنات، تيل فرامل، هوبات، سليندر، خراطيم - 
                        لضمان السلامة والأداء الأمثل على الطريق في جميع الظروف الجوية.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-industrial-yellow/5 to-renault-blue/5 p-6 rounded-xl border-r-4 border-industrial-yellow">
                      <h3 className="font-bold text-industrial-dark mb-3 text-xl">أنظمة الكهرباء والتبريد</h3>
                      <p className="text-gray-700 leading-relaxed">
                        دينمو، سلف، حساسات، بطاريات، ضفائر، رديتر، مروحة، حساس حرارة، 
                        خراطيم - للحفاظ على الأداء المثالي للنظام الكهربائي والتبريد.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-industrial-yellow/10 rounded-xl border border-industrial-yellow/20">
                  <h4 className="font-bold text-industrial-dark mb-3 text-xl text-center">🏆 ضمان الجودة والكفاءة</h4>
                  <p className="text-gray-700 text-center leading-relaxed">
                    نضمن لكم قطع غيار أصلية بجودة عالية مع خدمة ما بعد البيع ودعم فني متكامل 
                    لضمان رضاكم التام وأداء مثالي لشاحناتكم.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Adsense */}
      <AdsensePlaceholder />
    </div>
  )
}

export default Home
