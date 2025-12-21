import React from 'react'
import { Link } from 'react-router-dom'
import { useScrollToTop } from '../hooks/useScrollToTop'

const ProductCard = ({ product }) => {
  const { scrollToTop } = useScrollToTop()

  const handleDetailsClick = () => {
    scrollToTop()
  }

  // Transform icon from "fa-solid fa-gears" to "fas fa-gears" format
  const getIconClass = (iconString) => {
    if (!iconString) return 'fas fa-box-open';
    
    // Replace "fa-solid" with "fas" for consistency
    return iconString.replace('fa-solid', 'fas');
  };

  const iconClass = getIconClass(product.icon);
  
  return (
    <div className="bg-white rounded-xl shadow-lg industrial-shadow hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden group">
      {/* Product Icon */}
      <div className="relative flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-50 h-48 sm:h-56">
        <div className="flex flex-col items-center p-4">
          <i className={`${iconClass} text-6xl sm:text-7xl text-renault-blue mb-3`}></i>
          <div className="text-xs text-gray-500 font-medium bg-white/80 px-3 py-1 rounded-full backdrop-blur-sm">
            {product.category}
          </div>
        </div>
        
        {/* OEM Badge */}
        <div className="absolute top-4 right-4 bg-gray-900 text-white text-xs font-mono px-3 py-1.5 rounded-lg shadow-md">
          {product.oem}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5">
        <h3 className="font-bold text-lg text-industrial-dark mb-3 line-clamp-2 h-14 leading-tight">
          {product.name}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2 h-10 leading-relaxed">
          {product.description}
        </p>

        <div className="space-y-3 mb-6">
          <div className="flex justify-between items-center bg-gray-50 p-2 rounded-lg">
            <span className="text-gray-600 text-sm font-medium">الرقم الأصلي:</span>
            <span className="font-mono font-bold text-renault-blue bg-white px-3 py-1 rounded border border-blue-200 text-sm">
              {product.oem}
            </span>
          </div>

          <div className="bg-gray-50 p-3 rounded-lg">
            <div className="text-gray-600 text-sm font-medium mb-2 flex items-center gap-2">
              <i className="fas fa-truck text-gray-400"></i>
              <span>الموديلات المناسبة:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.models?.slice(0, 2).map((model, index) => (
                <span
                  key={index}
                  className="bg-white text-renault-blue px-3 py-1 rounded-lg text-xs font-medium border border-blue-200 shadow-sm"
                >
                  {model}
                </span>
              ))}
              {product.models?.length > 2 && (
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-lg text-xs font-medium border border-gray-200">
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
            className="flex-1 bg-gradient-to-r from-renault-blue to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 px-4 rounded-xl text-center font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <span>عرض التفاصيل</span>
            <i className="fas fa-arrow-left text-sm transition-transform group-hover:-translate-x-1"></i>
          </Link>
          
          <a
            href={`https://wa.me/201000000000?text=مرحباً، أريد الاستفسار عن المنتج:%0A📦 ${encodeURIComponent(product.name)}%0A🔢 رقم OEM: ${product.oem}%0A📝 ${encodeURIComponent(product.description.substring(0, 50))}...`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#25D366] to-green-500 hover:from-green-500 hover:to-green-600 text-white p-3 rounded-xl transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5 min-w-[56px]"
            title="تواصل عبر واتساب"
          >
            <i className="fab fa-whatsapp text-xl"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
