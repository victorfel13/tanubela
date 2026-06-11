import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import type { GalleryItem } from '../../data/images'

type GalleryCarouselProps = {
  items: GalleryItem[]
  intervalMs?: number
}

export function GalleryCarousel({ items, intervalMs = 4500 }: GalleryCarouselProps) {
  const [index, setIndex] = useState(0)
  const count = items.length

  useEffect(() => {
    if (count <= 1) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) return

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % count)
    }, intervalMs)

    return () => window.clearInterval(id)
  }, [count, intervalMs])

  if (count === 0) return null

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: 'inherit',
        overflow: 'hidden',
        bgcolor: '#000',
      }}
    >
      {items.map((item, itemIndex) => (
        <Box
          key={item.id}
          component="img"
          src={item.src}
          alt={item.fileName}
          loading={itemIndex === 0 ? 'eager' : 'lazy'}
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'center center',
            display: 'block',
            opacity: itemIndex === index ? 1 : 0,
            transition: (theme) =>
              theme.transitions.create('opacity', {
                duration: theme.transitions.duration.standard,
                easing: theme.transitions.easing.easeInOut,
              }),
          }}
        />
      ))}

      {count > 1 ? (
        <Box
          sx={{
            position: 'absolute',
            bottom: 16,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 0.75,
            zIndex: 1,
          }}
        >
          {items.map((item, dotIndex) => (
            <Box
              key={item.id}
              component="button"
              type="button"
              aria-label={`Foto ${dotIndex + 1}`}
              onClick={() => setIndex(dotIndex)}
              sx={{
                width: dotIndex === index ? 18 : 6,
                height: 6,
                p: 0,
                border: 'none',
                borderRadius: 999,
                bgcolor: dotIndex === index ? '#fff' : 'rgba(255,255,255,0.35)',
                cursor: 'pointer',
                transition: 'width 0.25s ease, background-color 0.25s ease',
              }}
            />
          ))}
        </Box>
      ) : null}
    </Box>
  )
}
