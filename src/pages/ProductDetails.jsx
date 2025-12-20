import React from 'react'
import { useParams, Link } from 'react-router-dom'
import productsData from '../data/products.json'
import AdsensePlaceholder from '../components/AdsensePlaceholder'

const ProductDetails = () => {
  const { id } = useParams()
  const product = productsData.find(p => p.id === parseInt(id))

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😕</div>
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
      currency: 'SAR'
    }).format(price)
  }

  const whatsappMessage = `أريد تفاصيل حول: ${product.name} (رقم أصلي: ${product.oem})`

  // Schema.org JSON-LD for Product
  const productSchema = {
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
      "price": product.price,
      "priceCurrency": "SAR",
      "availability": "https://schema.org/InStock"
    }
  }

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "الرئيسية",
        "item": window.location.origin
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "المنتجات",
        "item": `${window.location.origin}/products`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": product.name,
        "item": window.location.href
      }
    ]
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(productSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
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
          {/* Product Image */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="relative bg-gray-100 rounded-lg overflow-hidden h-96">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = '/images/placeholder.jpg'
                }}
              />
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

            <p className="text-gray-700 mb-6 leading-relaxed">
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
                      {model}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/249999929966?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-green-600 text-white py-4 px-6 rounded-lg font-bold hover:bg-green-700 transition-colors text-center flex items-center justify-center space-x-2 space-x-reverse"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.495 3.59"/>
                </svg>
                <span>اطلب عبر واتساب</span>
              </a>
              
              <Link
                to="/products"
                className="flex-1 bg-industrial-dark text-white py-4 px-6 rounded-lg font-bold hover:bg-gray-800 transition-colors text-center"
              >
                العودة للمنتجات
              </Link>
            </div>
          </div>
        </div>

        {/* Adsense */}
        <AdsensePlaceholder type="rectangle" />

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
                <div key={relatedProduct.id} className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-shadow">
                  <div className="bg-gray-100 rounded-lg h-32 mb-4 overflow-hidden">
                    <img 
                      src={relatedProduct.image} 
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-industrial-dark mb-2 line-clamp-2">
                    {relatedProduct.name}
                  </h3>
                  <div className="flex justify-between items-center">
                    <span className="text-renault-blue font-bold">
                      {formatPrice(relatedProduct.price)}
                    </span>
                    <Link
                      to={`/product/${relatedProduct.id}`}
                      className="text-industrial-yellow hover:text-yellow-600 transition-colors"
                    >
                      التفاصيل →
                    </Link>
                  </div>
                </div>
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
                <h3 className="font-bold text-industrial-dark mb-3">مواصفات المنتج</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• الرقم الأصلي: {product.oem}</li>
                  <li>• الفئة: {product.category}</li>
                  <li>• الموديلات المتوافقة: {product.models.join('، ')}</li>
                  <li>• الجودة: أصلية / بديلة عالية الجودة</li>
                  <li>• الضمان: متوفر حسب نوع القطعة</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-industrial-dark mb-3">معلومات الشحن والتوصيل</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• مدة التوصيل: 24-48 ساعة</li>
                  <li>• مناطق التوصيل: جميع أنحاء المملكة</li>
                  <li>• تكلفة الشحن: مجانية للطلبات فوق 5000 ريال</li>
                  <li>• الدفع: نقدًا عند الاستلام أو تحويل بنكي</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-bold text-blue-900 mb-2">💡 ملاحظة فنية:</h4>
              <p className="text-blue-800 text-sm">
                لضمان التركيب الصحيح والأداء الأمثل، نوصي بتركيب القطعة من قبل فني متخصص. 
                يتوفر لدينا دعم فني عبر الهاتف والواتساب للإجابة على استفساراتكم الفنية.
              </p>
            </div>
          </div>
        </div>

        {/* Final Adsense */}
        <AdsensePlaceholder />
      </div>
    </div>
  )
}

export default ProductDetails