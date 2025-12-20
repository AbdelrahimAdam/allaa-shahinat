import React from 'react'

const AdsensePlaceholder = ({ type = 'banner', className = '' }) => {
  const getAdSize = () => {
    switch (type) {
      case 'leaderboard':
        return 'w-full h-20 md:h-28'
      case 'rectangle':
        return 'w-full h-60 md:h-80'
      case 'sidebar':
        return 'w-full h-96'
      default: // banner
        return 'w-full h-32 md:h-40'
    }
  }

  return (
    <div className={`my-8 ${className}`}>
      <div className={`bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center ${getAdSize()}`}>
        <div className="text-center text-gray-500">
          <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <p className="text-sm font-medium">مساحة إعلانية</p>
          <p className="text-xs">Google Adsense</p>
        </div>
      </div>
    </div>
  )
}

export default AdsensePlaceholder