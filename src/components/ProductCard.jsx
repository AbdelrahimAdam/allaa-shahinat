import React from 'react'
import { Link } from 'react-router-dom'
import { useScrollToTop } from '../hooks/useScrollToTop'

const ProductCard = ({ product }) => {
  const { scrollToTop } = useScrollToTop()

  const handleDetailsClick = () => {
    scrollToTop()
  }

  // Ensure the icon class is properly formatted
  const iconClass = product.icon || 'fa-solid fa-box-open'
  
  return (
    <div className="bg-white rounded-xl shadow-lg industrial-shadow hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden group">
      {/* Product Icon */}
      <div className="relative flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 h-48 sm:h-56">
        <div className="flex flex-col items-center">
          <i className={`${iconClass} text-5xl sm:text-6xl text-renault-blue mb-2`}></i>
          <div className="text-xs text-gray-500 font-medium mt-2">
            {product.category}
          </div>
        </div>
        
        {/* OEM Badge */}
        <div className="absolute top-3 right-3 bg-gray-900/90 text-white text-xs font-mono px-3 py-1.5 rounded-lg backdrop-blur-sm">
          OEM: {product.oem}
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
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-sm font-medium">الرقم الأصلي:</span>
            <span className="font-mono font-bold text-renault-blue bg-blue-50 px-3 py-1 rounded-lg border border-blue-100 text-sm">
              {product.oem}
            </span>
          </div>

          <div>
            <span className="text-gray-600 text-sm font-medium block mb-2">الموديلات المناسبة:</span>
            <div className="flex flex-wrap gap-2">
              {product.models?.slice(0, 2).map((model, index) => (
                <span
                  key={index}
                  className="bg-renault-blue/10 text-renault-blue px-3 py-1 rounded-lg text-xs font-medium border border-renault-blue/20"
                >
                  {model}
                </span>
              ))}
              {product.models?.length > 2 && (
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-lg text-xs font-medium">
                  +{product.models.length - 2} أخرى
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
            className="flex-1 bg-renault-blue hover:bg-blue-700 text-white py-3 px-4 rounded-xl text-center font-bold transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-md hover:shadow-lg"
          >
            <span>عرض التفاصيل</span>
            <i className="fas fa-arrow-left text-sm group-hover/btn:translate-x-1 transition-transform"></i>
          </Link>
          
          <a
            href={`https://wa.me/201000000000?text=مرحباً، أريد الاستفسار عن المنتج: ${encodeURIComponent(product.name)}%0Aرقم OEM: ${product.oem}%0Aالوصف: ${encodeURIComponent(product.description)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-green-600 text-white p-3 rounded-xl transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
            title="تواصل عبر واتساب"
          >
            <i className="fab fa-whatsapp text-lg"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
