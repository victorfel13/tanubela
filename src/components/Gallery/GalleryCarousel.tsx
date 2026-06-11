import { Box, IconButton } from '@mui/material'
import { useCallback, useEffect, useRef, useState } from 'react'
import type { GalleryItem } from '../../data/images'

type GalleryCarouselProps = {
  items: GalleryItem[]
  intervalMs?: number
}

const SWIPE_THRESHOLD = 48

function CarouselArrow({
  direction,
  onClick,
}: {
  direction: 'prev' | 'next'
  onClick: () => void
}) {
  const label = direction === 'prev' ? 'Foto anterior' : 'Foto siguiente'

  return (
    <IconButton
      aria-label={label}
      onClick={onClick}
      sx={{
        position: 'absolute',
        top: '50%',
        [direction === 'prev' ? 'left' : 'right']: { xs: 4, sm: 8, md: 12 },
        transform: 'translateY(-50%)',
        zIndex: 2,
        width: { xs: 48, md: 44 },
        height: { xs: 48, md: 44 },
        color: '#fff',
        borderRadius: 0,
        '&:hover': { bgcolor: 'rgba(255,255,255,0.08)' },
      }}
    >
      <Box
        component="svg"
        viewBox="0 0 10 12"
        aria-hidden
        sx={{
          width: 10,
          height: 12,
          display: 'block',
          transform: direction === 'next' ? 'scaleX(-1)' : 'none',
        }}
      >
        <polygon points="8,1 8,11 1,6" fill="currentColor" />
      </Box>
    </IconButton>
  )
}

export function GalleryCarousel({ items, intervalMs = 4500 }: GalleryCarouselProps) {
  const [index, setIndex] = useState(0)
  const count = items.length
  const carouselRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)
  const lockHorizontal = useRef(false)
  const intervalRef = useRef<number | null>(null)

  const goPrev = useCallback(() => {
    setIndex((current) => (current - 1 + count) % count)
  }, [count])

  const goNext = useCallback(() => {
    setIndex((current) => (current + 1) % count)
  }, [count])

  const clearAutoplay = useCallback(() => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  const startAutoplay = useCallback(() => {
    clearAutoplay()
    if (count <= 1) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) return

    intervalRef.current = window.setInterval(() => {
      setIndex((current) => (current + 1) % count)
    }, intervalMs)
  }, [clearAutoplay, count, intervalMs])

  useEffect(() => {
    startAutoplay()
    return clearAutoplay
  }, [startAutoplay, clearAutoplay, index])

  useEffect(() => {
    const node = carouselRef.current
    if (!node || count <= 1) return

    const onTouchStart = (event: globalThis.TouchEvent) => {
      touchStartX.current = event.touches[0]?.clientX ?? null
      touchStartY.current = event.touches[0]?.clientY ?? null
      lockHorizontal.current = false
    }

    const onTouchMove = (event: globalThis.TouchEvent) => {
      if (touchStartX.current === null || touchStartY.current === null) return

      const x = event.touches[0]?.clientX
      const y = event.touches[0]?.clientY
      if (x === undefined || y === undefined) return

      const dx = x - touchStartX.current
      const dy = y - touchStartY.current

      if (!lockHorizontal.current && Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 8) {
        lockHorizontal.current = true
      }

      if (lockHorizontal.current) {
        event.preventDefault()
      }
    }

    const onTouchEnd = (event: globalThis.TouchEvent) => {
      if (touchStartX.current === null) return

      const endX = event.changedTouches[0]?.clientX
      if (endX === undefined) return

      const delta = endX - touchStartX.current
      touchStartX.current = null
      touchStartY.current = null
      lockHorizontal.current = false

      if (Math.abs(delta) < SWIPE_THRESHOLD) return

      if (delta < 0) goNext()
      else goPrev()
    }

    node.addEventListener('touchstart', onTouchStart, { passive: true })
    node.addEventListener('touchmove', onTouchMove, { passive: false })
    node.addEventListener('touchend', onTouchEnd, { passive: true })

    return () => {
      node.removeEventListener('touchstart', onTouchStart)
      node.removeEventListener('touchmove', onTouchMove)
      node.removeEventListener('touchend', onTouchEnd)
    }
  }, [count, goNext, goPrev])

  if (count === 0) return null

  return (
    <Box
      ref={carouselRef}
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: 'inherit',
        overflow: 'hidden',
        bgcolor: '#000',
        overscrollBehavior: 'contain',
        touchAction: 'pan-y pinch-zoom',
        userSelect: 'none',
        WebkitUserSelect: 'none',
      }}
    >
      {items.map((item, itemIndex) => (
        <Box
          key={item.id}
          component="img"
          src={item.src}
          alt={item.fileName}
          draggable={false}
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
            pointerEvents: 'none',
            transition: (theme) =>
              theme.transitions.create('opacity', {
                duration: theme.transitions.duration.standard,
                easing: theme.transitions.easing.easeInOut,
              }),
          }}
        />
      ))}

      {count > 1 ? (
        <>
          <CarouselArrow direction="prev" onClick={goPrev} />
          <CarouselArrow direction="next" onClick={goNext} />
        </>
      ) : null}
    </Box>
  )
}
