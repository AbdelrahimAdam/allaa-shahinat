import { useCallback } from 'react'

export const useScrollToTop = () => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, [])

  const scrollToTopInstant = useCallback(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    })
  }, [])

  return {
    scrollToTop,
    scrollToTopInstant
  }
}