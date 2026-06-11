import { Box } from '@mui/material'
import { useEffect, useRef, useState, type ReactNode } from 'react'

type ScrollRevealProps = {
  children: ReactNode
  sectionId?: string
  delay?: number
}

export function ScrollReveal({ children, sectionId, delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -6% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!sectionId) return

    const handleReveal = (event: Event) => {
      const detail = (event as CustomEvent<{ id: string }>).detail
      if (detail?.id === sectionId) setVisible(true)
    }

    window.addEventListener('reveal-section', handleReveal)
    return () => window.removeEventListener('reveal-section', handleReveal)
  }, [sectionId])

  return (
    <Box
      ref={ref}
      id={sectionId}
      className={visible ? 'scroll-reveal is-visible' : 'scroll-reveal'}
      sx={{
        transitionDelay: `${delay}ms`,
        maxWidth: '100%',
        overflow: 'hidden',
      }}
    >
      {children}
    </Box>
  )
}
