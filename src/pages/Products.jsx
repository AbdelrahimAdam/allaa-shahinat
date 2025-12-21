import React, { useState, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import productsData from '../data/products.json'

/* =========================
   Product Card
========================= */
const ProductCard = ({ product }) => {
  const iconClass = product.image || 'fas fa-box-open'

  return (
    <Link
      to={`/product/${product.id}`}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
    >
      {/* Icon Section */}
      <div className="relative h-48 bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
        <i className={`${iconClass} text-renault-blue text-5xl`} />

        <span className="absolute top-3 left-3 bg-white/90 text-renault-blue text-xs font-bold px-3 py-1 rounded-full">
          {product.category}
        </span>

        <span className="absolute top-3 right-3 bg-white/90 text-gray-700 text-xs font-bold px-3 py-1 rounded-full">
          {product.models?.[0]}
        </span>

        <span className="absolute bottom-3 left-3 bg-gray-800/80 text-white text-xs px-3 py-1 rounded-lg">
          {product.oem}
        </span>
      </div>

      {/* Details */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-industrial-dark mb-3 line-clamp-2 h-14">
          {product.name}
        </h3>

        <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-3">
          {product.description}
        </p>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {product.models?.slice(0, 3).map((model, index) => (
              <span
                key={index}
                className="bg-blue-50 text-renault-blue text-xs font-medium px-3 py-1.5 rounded-lg border border-blue-100"
              >
                {model}
              </span>
            ))}
            {product.models?.length > 3 && (
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-lg">
                +{product.models.length - 3}
              </span>
            )}
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center text-gray-500">
              <i className="fas fa-info-circle ml-2" />
              <span className="text-sm">تفاصيل المنتج</span>
            </div>

            <i className="fas fa-arrow-left text-renault-blue text-lg" />
          </div>
        </div>
      </div>
    </Link>
  )
}

/* =========================
   Category Filter
========================= */
const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  const categories = [
    { value: 'جميع الأقسام', icon: 'fas fa-layer-group' },
    { value: 'قطع الدفرنس', icon: 'fas fa-cogs' },
    { value: 'أكس كامل', icon: 'fas fa-warehouse' },
    { value: 'نظام التعليق', icon: 'fas fa-car-side' },
    { value: 'قطع المحرك', icon: 'fas fa-engine' },
    { value: 'قطع القير', icon: 'fas fa-cog' },
    { value: 'نظام الفرامل', icon: 'fas fa-brake-warning' },
    { value: 'الكهرباء', icon: 'fas fa-bolt' },
    { value: 'نظام التبريد', icon: 'fas fa-fan' },
    { value: 'مستهلكات', icon: 'fas fa-boxes' },
    { value: 'إكسسوارات', icon: 'fas fa-tools' }
  ]

  return (
    <div className="mb-8">
      <h3 className="text-lg font-bold text-industrial-dark mb-4 flex items-center">
        <i className="fas fa-filter ml-2" />
        تصفية حسب القسم
      </h3>

      <div className="flex overflow-x-auto gap-3 pb-2">
        {categories.map(category => {
          const active =
            selectedCategory === category.value ||
            (!selectedCategory && category.value === 'جميع الأقسام')

          return (
            <button
              key={category.value}
              onClick={() => onCategoryChange(category.value)}
              className={`flex flex-col items-center justify-center min-w-[120px] px-4 py-3 rounded-xl transition-all ${
                active
                  ? 'bg-gradient-to-r from-renault-blue to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              <i className={`${category.icon} text-2xl mb-2`} />
              <span className="text-sm font-bold whitespace-nowrap">
                {category.value}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

/* =========================
   Products Page
========================= */
const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] =
    useState(searchParams.get('category') || '')

  const filteredProducts = useMemo(() => {
    return productsData.filter(product => {
      const matchesSearch =
        product.name.includes(searchTerm) ||
        product.oem.includes(searchTerm) ||
        product.description.includes(searchTerm)

      const matchesCategory =
        !selectedCategory ||
        selectedCategory === 'جميع الأقسام' ||
        product.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  const handleCategoryChange = category => {
    setSelectedCategory(category)
    category === 'جميع الأقسام'
      ? setSearchParams({})
      : setSearchParams({ category })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-renault-blue to-renault-red rounded-2xl mb-4">
            <i className="fas fa-truck-moving text-white text-4xl" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-industrial-dark mb-4">
            معرض قطع غيار رينو
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            اكتشف مجموعتنا الكاملة من قطع غيار شاحنات رينو
          </p>
        </div>

        {/* Search */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="ابحث بالاسم، رقم OEM، أو الوصف..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-renault-blue"
            />
            <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
            <i className="fas fa-search text-6xl text-gray-300 mb-4" />
            <h3 className="text-2xl font-bold mb-4">
              لم نعثر على منتجات
            </h3>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('جميع الأقسام')
                setSearchParams({})
              }}
              className="bg-renault-blue text-white px-6 py-3 rounded-xl font-bold"
            >
              عرض جميع المنتجات
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Products