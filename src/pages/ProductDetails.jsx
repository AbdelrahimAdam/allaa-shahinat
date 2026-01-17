import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async' // ADD THIS
import productsData from '../data/products.json'

const ProductDetails = () => {
  const { id } = useParams()
  const product = productsData.find(p => p.id === parseInt(id))

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <i className="fas fa-exclamation-circle text-6xl text-yellow-500 mb-4"></i>
          <h1 className="text-2xl font-bold text-industrial-dark mb-4">
            المنتج غير موجود
          </h1>
          <Link
            to="/products"
            className="bg-renault-blue text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
          >
            العودة للمنتجات
          </Link>
        </div>
      </div>
    )
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ar-SA', {
      style: 'currency',
      currency: 'EGP'
    }).format(price || 0)
  }

  const whatsappMessage = `أريد تفاصيل حول: ${product.name} (رقم أصلي: ${product.oem})`

  return (
    <>
      {/* ADD HELMET WITH SEO TAGS */}
      <Helmet>
        <title>{product.name} - قطع غيار رينو أصلية | علاء الدين شاحنات</title>
        <meta name="description" content={`${product.description} - رقم OEM: ${product.oem}. قطع غيار أصلية لشاحنات رينو ${product.models?.join('، ')}`} />
        <meta name="keywords" content={`${product.name}, رقم ${product.oem}, قطع غيار ${product.category}, رينو ${product.models?.[0]}, علاء الدين شاحنات`} />
        <link rel="canonical" href={`https://renault-trucks-parts.com/product/${product.id}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={product.name} />
        <meta property="og:description" content={product.description} />
        <meta property="og:url" content={`https://renault-trucks-parts.com/product/${product.id}`} />
        <meta property="og:type" content="product" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={product.name} />
        <meta name="twitter:description" content={product.description} />
      </Helmet>

      {/* YOUR EXISTING CODE CONTINUES HERE (NO CHANGES BELOW) */}
      <div className="min-h-screen bg-gray-50 py-8">
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": product.name,
            "description": product.description,
            "image": product.image,
            "sku": product.oem,
            "brand": {
              "@type": "Brand",
              "name": "Renault Trucks"
            },
            "offers": {
              "@type": "Offer",
              "price": product.price || 0,
              "priceCurrency": "EGP",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "الرئيسية",
                "item": "https://renault-trucks-parts.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "المنتجات",
                "item": "https://renault-trucks-parts.com/products"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": product.name,
                "item": window.location.href
              }
            ]
          })}
        </script>

        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex mb-8 text-sm text-gray-600">
            <Link to="/" className="hover:text-renault-blue">الرئيسية</Link>
            <span className="mx-2">/</span>
            <Link to="/products" className="hover:text-renault-blue">المنتجات</Link>
            <span className="mx-2">/</span>
            <span className="text-industrial-dark font-medium">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Product Icon Display */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden h-96 flex flex-col items-center justify-center">
                <div className="text-center">
                  <i className={`${product.icon} text-renault-blue text-8xl mb-6`}></i>
                  <div className="mt-4">
                    <span className="inline-block bg-white/90 text-renault-blue text-sm font-bold px-4 py-2 rounded-full">
                      {product.category}
                    </span>
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4 bg-gray-800/90 text-white text-sm px-4 py-2 rounded-lg">
                  <span className="font-mono">{product.oem}</span>
                </div>
                
                <div className="absolute top-4 right-4 bg-white/90 text-gray-700 text-sm px-4 py-2 rounded-full">
                  <i className="fas fa-truck ml-2"></i>
                  <span>{product.models?.[0] || 'Renault'}</span>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <i className="fas fa-shield-alt text-blue-600 text-2xl mb-2"></i>
                  <p className="text-sm text-gray-700">جودة عالية</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <i className="fas fa-check-circle text-green-600 text-2xl mb-2"></i>
                  <p className="text-sm text-gray-700">ضمان متوفر</p>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="mb-6">
                <span className="bg-industrial-yellow text-industrial-dark px-3 py-1 rounded-full text-sm font-bold">
                  {product.category}
                </span>
              </div>

              <h1 className="text-2xl md:text-3xl font-bold text-industrial-dark mb-4">
                {product.name}
              </h1>

              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                {product.description}
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600 font-medium">السعر:</span>
                  <span className="text-2xl font-bold text-renault-blue">
                    {formatPrice(product.price)}
                  </span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600 font-medium">الرقم الأصلي:</span>
                  <span className="font-mono text-industrial-dark bg-gray-100 px-3 py-1 rounded">
                    {product.oem}
                  </span>
                </div>

                <div className="py-3 border-b border-gray-200">
                  <span className="text-gray-600 font-medium block mb-2">الموديلات المتوافقة:</span>
                  <div className="flex flex-wrap gap-2">
                    {product.models.map((model, index) => (
                      <span 
                        key={index}
                        className="bg-renault-blue text-white px-3 py-1 rounded text-sm"
                      >
                        <i className="fas fa-truck ml-1"></i> {model}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="py-3 border-b border-gray-200">
                  <span className="text-gray-600 font-medium block mb-2">نوع القطعة:</span>
                  <span className="text-industrial-dark bg-yellow-50 px-3 py-1 rounded text-sm">
                    {product.category.includes('أصلية') ? 'أصلية' : 'بديلة عالية الجودة'}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://wa.me/201234567890?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-600 text-white py-4 px-6 rounded-lg font-bold hover:bg-green-700 transition-colors text-center flex items-center justify-center space-x-2 space-x-reverse"
                >
                  <i className="fab fa-whatsapp text-2xl"></i>
                  <span className="text-lg">اطلب عبر واتساب</span>
                </a>
                
                <Link
                  to="/products"
                  className="flex-1 bg-industrial-dark text-white py-4 px-6 rounded-lg font-bold hover:bg-gray-800 transition-colors text-center flex items-center justify-center space-x-2 space-x-reverse"
                >
                  <i className="fas fa-arrow-right text-lg"></i>
                  <span className="text-lg">العودة للمنتجات</span>
                </Link>
              </div>
              
              {/* Quick Info */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="bg-gray-50 p-3 rounded-lg text-center">
                  <i className="fas fa-shipping-fast text-renault-blue text-lg mb-1"></i>
                  <p className="text-xs text-gray-600">توصيل سريع</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg text-center">
                  <i className="fas fa-headset text-renault-blue text-lg mb-1"></i>
                  <p className="text-xs text-gray-600">دعم فني</p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-industrial-dark mb-6">
              منتجات ذات صلة
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {productsData
                .filter(p => p.category === product.category && p.id !== product.id)
                .slice(0, 4)
                .map(relatedProduct => (
                  <Link 
                    key={relatedProduct.id} 
                    to={`/product/${relatedProduct.id}`}
                    className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-shadow"
                  >
                    <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg h-32 mb-4 flex items-center justify-center">
                      <i className={`${relatedProduct.icon} text-renault-blue text-5xl`}></i>
                    </div>
                    <h3 className="font-bold text-industrial-dark mb-2 line-clamp-2">
                      {relatedProduct.name}
                    </h3>
                    <div className="flex justify-between items-center">
                      <span className="text-renault-blue font-bold">
                        {formatPrice(relatedProduct.price)}
                      </span>
                      <span className="text-industrial-yellow hover:text-yellow-600 transition-colors text-sm">
                        التفاصيل <i className="fas fa-arrow-left"></i>
                      </span>
                    </div>
                  </Link>
                ))}
            </div>
          </section>

          {/* SEO Content */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-industrial-dark mb-6">
                {product.name} - معلومات تقنية شاملة
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-industrial-dark mb-3">
                    <i className="fas fa-cogs ml-2"></i>
                    مواصفات المنتج
                  </h3>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li className="flex items-center">
                      <i className="fas fa-hashtag text-renault-blue ml-2"></i>
                      <span>الرقم الأصلي: <strong>{product.oem}</strong></span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-tag text-renault-blue ml-2"></i>
                      <span>الفئة: <strong>{product.category}</strong></span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-truck text-renault-blue ml-2"></i>
                      <span>الموديلات المتوافقة: <strong>{product.models.join('، ')}</strong></span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-certificate text-renault-blue ml-2"></i>
                      <span>الجودة: <strong>{product.description.includes('أصلي') ? 'أصلية' : 'بديلة عالية الجودة'}</strong></span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-shield-alt text-renault-blue ml-2"></i>
                      <span>الضمان: <strong>متوفر حسب نوع القطعة</strong></span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-industrial-dark mb-3">
                    <i className="fas fa-shipping-fast ml-2"></i>
                    معلومات الشحن والتوصيل
                  </h3>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li className="flex items-center">
                      <i className="fas fa-clock text-renault-blue ml-2"></i>
                      <span>مدة التوصيل: <strong>2-4 ساعات داخل القاهرة</strong></span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-map-marker-alt text-renault-blue ml-2"></i>
                      <span>مناطق التوصيل: <strong>جميع أنحاء مصر</strong></span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-truck text-renault-blue ml-2"></i>
                      <span>تكلفة الشحن: <strong>مجانية داخل القاهرة الكبرى</strong></span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-money-bill-wave text-renault-blue ml-2"></i>
                      <span>الدفع: <strong>نقدًا عند الاستلام أو تحويل بنكي</strong></span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                <div className="flex items-start">
                  <div className="bg-renault-blue text-white p-3 rounded-full mr-4">
                    <i className="fas fa-lightbulb text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 mb-2 text-lg">
                      ملاحظة فنية مهمة
                    </h4>
                    <p className="text-blue-800">
                      لضمان التركيب الصحيح والأداء الأمثل، نوصي بتركيب القطعة من قبل فني متخصص. 
                      يتوفر لدينا دعم فني عبر الهاتف والواتساب للإجابة على استفساراتكم الفنية.
                      كما نوفر خدمة تركيب مجانية للقطع الكبيرة داخل القاهرة الكبرى.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetails
