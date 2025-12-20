import React, { useState, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import productsData from '../data/products.json'
import ProductCard from '../components/ProductCard'
import AdsensePlaceholder from '../components/AdsensePlaceholder'

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '')

  const categories = [
    'جميع الأقسام',
    'قطع الدفرنس',
    'أكس كامل',
    'نظام التعليق',
    'قطع المحرك',
    'قطع القير',
    'نظام الفرامل',
    'الكهرباء',
    'نظام التبريد',
    'مستهلكات',
    'إكسسوارات'
  ]

  const filteredProducts = useMemo(() => {
    return productsData.filter(product => {
      const matchesSearch = product.name.includes(searchTerm) || 
                           product.oem.includes(searchTerm) ||
                           product.description.includes(searchTerm)
      const matchesCategory = !selectedCategory || 
                             selectedCategory === 'جميع الأقسام' || 
                             product.category === selectedCategory
      
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    if (category === 'جميع الأقسام') {
      setSearchParams({})
    } else {
      setSearchParams({ category })
    }
  }

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-industrial-dark mb-4">
            معرض المنتجات
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            اكتشف مجموعتنا الكاملة من قطع غيار شاحنات رينو الأصلية
          </p>
        </div>

        {/* Adsense Top */}
        <AdsensePlaceholder />

        {/* Filters and Search */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="ابحث بالاسم، الرقم الأصلي، أو الوصف..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-renault-blue focus:border-transparent"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                value={selectedCategory || 'جميع الأقسام'}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-renault-blue focus:border-transparent bg-white"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            عرض <span className="font-bold text-industrial-dark">{filteredProducts.length}</span> منتج
            {selectedCategory && selectedCategory !== 'جميع الأقسام' && (
              <span> في قسم <span className="font-bold text-renault-blue">{selectedCategory}</span></span>
            )}
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Adsense Middle */}
            <AdsensePlaceholder type="rectangle" />
          </>
        ) : (
          <div className="text-center py-16 bg-white rounded-xl shadow-lg">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-industrial-dark mb-4">
              لم نعثر على منتجات
            </h3>
            <p className="text-gray-600 mb-6">
              حاول استخدام مصطلحات بحث مختلفة أو اختر قسم آخر
            </p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('جميع الأقسام')
                setSearchParams({})
              }}
              className="bg-renault-blue text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
            >
              عرض جميع المنتجات
            </button>
          </div>
        )}

        {/* SEO Content */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-industrial-dark mb-6">
              قطع غيار شاحنات رينو - دليل شامل
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-industrial-dark mb-3">قطع نظام الدفرنس</h3>
                <p className="text-gray-700 text-sm mb-4">
                  نوفر جميع قطع غيار الدفرنس بما في ذلك تروس الدفرنس، كراون ويل وبنيون، 
                  رولمان بلي، جوانات، وهاف شفت. جميع القطع مصنوعة بجودة عالية وتتوافق 
                  مع معايير رينو الأصلية.
                </p>
                
                <h3 className="font-bold text-industrial-dark mb-3">نظام المحرك</h3>
                <p className="text-gray-700 text-sm mb-4">
                  طرمبات مياه وزيت، رأس موتور، فلاتر زيت وهواء وديزل، جنزير توقيت، 
                  شمعات - لضمان كفاءة المحرك وأدائه المثالي.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-industrial-dark mb-3">نظام التعليق والفرامل</h3>
                <p className="text-gray-700 text-sm mb-4">
                  مساعدات هواء، يايات، موازنات، تيل فرامل، هوبات، سليندر، خراطيم - 
                  لضمان السلامة والأداء الأمثل على الطريق.
                </p>
                
                <h3 className="font-bold text-industrial-dark mb-3">أنظمة الكهرباء والتبريد</h3>
                <p className="text-gray-700 text-sm mb-4">
                  دينمو، سلف، حساسات، بطاريات، ضفائر، رديتر، مروحة، حساس حرارة، 
                  خراطيم - للحفاظ على الأداء المثالي للنظام الكهربائي والتبريد.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Final Adsense */}
        <AdsensePlaceholder />
      </div>
    </div>
  )
}

export default Products