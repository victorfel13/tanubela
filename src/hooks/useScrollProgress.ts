import { useEffect, useState } from 'react'

export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')

    const update = () => {
      if (media.matches) {
        setProgress(0)
        return
      }

      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      setProgress(maxScroll > 0 ? window.scrollY / maxScroll : 0)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    media.addEventListener('change', update)

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
      media.removeEventListener('change', update)
    }
  }, [])

  return progress
}
