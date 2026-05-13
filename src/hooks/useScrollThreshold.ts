import { useEffect, useState } from 'react'

type ScrollThreshold = number | (() => number)

function useScrollThreshold(threshold: ScrollThreshold) {
  const [isPastThreshold, setIsPastThreshold] = useState(false)

  useEffect(() => {
    const updateScrollState = () => {
      const thresholdValue = typeof threshold === 'function' ? threshold() : threshold
      setIsPastThreshold(window.scrollY > thresholdValue)
    }

    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })
    window.addEventListener('resize', updateScrollState)

    return () => {
      window.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('resize', updateScrollState)
    }
  }, [threshold])

  return isPastThreshold
}

export default useScrollThreshold
