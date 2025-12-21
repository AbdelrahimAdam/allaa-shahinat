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
      <div className="relative flex items-center justify-center bg-gray-100 h-48 sm:h-56">
        <i className={`${product.icon} text-6xl sm:text-7xl text-renault-blue`}></i>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-bold text-lg text-industrial-dark mb-2 line-clamp-2 h-14">
          {product.name}
        </h3>

        <div className="space-y-2 mb-4">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">الرقم الأصلي:</span>
            <span className="font-mono text-industrial-dark bg-gray-100 px-2 py-1 rounded">
              {product.oem}
            </span>
          </div>

          <div className="text-sm">
            <span className="text-gray-600">الموديلات:</span>
            <div className="flex flex-wrap gap-1 mt-1">
              {product.models.slice(0, 2).map((model, index) => (
                <span
                  key={index}
                  className="bg-renault-blue text-white px-2 py-1 rounded text-xs"
                >
                  {model}
                </span>
              ))}
              {product.models.length > 2 && (
                <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded text-xs">
                  +{product.models.length - 2}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex space-x-2 space-x-reverse">
          <Link
            to={`/product/${product.id}`}
            onClick={handleDetailsClick}
            className="flex-1 bg-industrial-dark text-white py-2 px-4 rounded-lg text-center font-medium hover:bg-renault-blue transition-colors"
          >
            التفاصيل
          </Link>
          <a
            href={`https://wa.me/249999929966?text=أريد+تفاصيل+حول:+${encodeURIComponent(product.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition-colors"
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
