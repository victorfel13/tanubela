import { Box } from '@mui/material'
import { galleryItems } from '../../data/images'
import { GalleryCarousel } from './GalleryCarousel'

export function Gallery() {
  if (galleryItems.length === 0) return null

  return (
    <Box
      sx={{
        width: '98%',
        maxWidth: 1460,
        mx: 'auto',
        overflow: 'hidden',
        bgcolor: '#000',
      }}
    >
      <Box
        sx={{
          height: { xs: 'min(72vh, 680px)', sm: 'min(78vh, 760px)', md: 'min(82vh, 900px)' },
          maxWidth: { md: 720 },
          mx: { md: 'auto' },
        }}
      >
        <GalleryCarousel items={galleryItems} />
      </Box>
    </Box>
  )
}
