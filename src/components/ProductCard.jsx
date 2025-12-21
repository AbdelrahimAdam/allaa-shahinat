import React from 'react'
import { Link } from 'react-router-dom'
import { useScrollToTop } from '../hooks/useScrollToTop'

const ProductCard = ({ product }) => {
  const { scrollToTop } = useScrollToTop()

  const handleDetailsClick = () => {
    scrollToTop()
  }

  return (
    <div className="bg-white rounded-xl shadow-lg industrial-shadow hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden group">
      {/* Product Icon */}
      <div className="relative flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 h-48 sm:h-56">
        <i className={`${product.icon} text-5xl sm:text-6xl text-renault-blue`}></i>
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-renault-blue text-xs font-bold px-3 py-1 rounded-full border border-renault-blue/20">
          {product.category}
        </div>
        
        {/* OEM Badge */}
        <div className="absolute top-3 right-3 bg-gray-800/90 text-white text-xs font-mono px-2 py-1 rounded-lg">
          {product.oem}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5">
        <h3 className="font-bold text-lg text-industrial-dark mb-3 line-clamp-2 h-14">
          {product.name}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2 h-10">
          {product.description}
        </p>

        <div className="space-y-3 mb-6">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600 font-medium">الرقم الأصلي:</span>
            <span className="font-mono font-bold text-renault-blue bg-blue-50 px-3 py-1 rounded-lg border border-blue-100">
              {product.oem}
            </span>
          </div>

          <div className="text-sm">
            <span className="text-gray-600 font-medium block mb-2">الموديلات المناسبة:</span>
            <div className="flex flex-wrap gap-2">
              {product.models.slice(0, 3).map((model, index) => (
                <span
                  key={index}
                  className="bg-renault-blue/10 text-renault-blue px-3 py-1 rounded-lg text-xs font-medium border border-renault-blue/20"
                >
                  {model}
                </span>
              ))}
              {product.models.length > 3 && (
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-lg text-xs font-medium">
                  +{product.models.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Link
            to={`/product/${product.id}`}
            onClick={handleDetailsClick}
            className="flex-1 bg-renault-blue hover:bg-blue-700 text-white py-3 px-4 rounded-xl text-center font-bold transition-all duration-300 flex items-center justify-center gap-2 group/btn"
          >
            <span>التفاصيل</span>
            <i className="fas fa-arrow-left text-sm group-hover/btn:translate-x-1 transition-transform"></i>
          </Link>
          
          <a
            href={`https://wa.me/201000000000?text=مرحباً، أريد الاستفسار عن المنتج: ${encodeURIComponent(product.name)} - OEM: ${product.oem}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-green-600 text-white p-3 rounded-xl transition-all duration-300 flex items-center justify-center"
            title="تواصل عبر واتساب"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.495 3.59"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
