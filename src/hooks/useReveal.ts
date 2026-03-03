import { useEffect } from 'react'

export const useReveal = () => {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.reveal')

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement

            const index = Array.from(elements).indexOf(el)
            el.style.transitionDelay = `${index * 0.15}s`

            el.classList.add('active')
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.2 }
    )

    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}