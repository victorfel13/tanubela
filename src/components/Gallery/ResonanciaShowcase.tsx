import { Box, Typography } from '@mui/material'
import { resonanciaInfo } from '../../data/gallery'
import { ResonanciaEye } from './ResonanciaEye'

const ACCENT = {
  blue: '#6ec4ff',
  red: '#e85a5a',
} as const

export function ResonanciaShowcase() {
  const { tracklist, description, images } = resonanciaInfo

  return (
    <Box sx={{ bgcolor: '#000' }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            md: 'minmax(0, 1fr) minmax(200px, 0.5fr) minmax(0, 0.95fr)',
          },
          minHeight: { md: 500 },
        }}
      >
        <Box
          component="img"
          src={images.front}
          alt="Portada Resonancia"
          sx={{
            width: '100%',
            height: { xs: 340, md: '100%' },
            minHeight: { md: 500 },
            objectFit: 'cover',
            objectPosition: { xs: '50% 0%', md: 'center' },
            display: 'block',
          }}
        />

        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            px: { xs: 3, md: 2 },
            py: { xs: 4, md: 3 },
            textAlign: 'center',
          }}
        >
          <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0 }}>
            {tracklist.map((track) => (
              <Typography
                key={track.title}
                component="li"
                sx={{
                  fontSize: { xs: '0.78rem', sm: '0.82rem', md: '0.88rem' },
                  letterSpacing: { xs: '0.16em', md: '0.22em' },
                  textTransform: 'uppercase',
                  color: ACCENT[track.accent],
                  lineHeight: 2,
                  fontWeight: 400,
                  fontFamily: '"Outfit", system-ui, sans-serif',
                }}
              >
                {track.title}
              </Typography>
            ))}
          </Box>
          <ResonanciaEye />
        </Box>

        <Box
          sx={{
            display: { xs: 'none', md: 'block' },
            overflow: 'hidden',
            minHeight: { md: 500 },
            bgcolor: '#000',
          }}
        >
          <Box
            component="img"
            src={images.back}
            alt="Resonancia — sesión"
            sx={{
              width: { xs: '100%', md: '220%' },
              height: '100%',
              minHeight: { md: 500 },
              objectFit: 'cover',
              objectPosition: 'right center',
              display: 'block',
              ml: { md: 'auto' },
            }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          bgcolor: '#fff',
          color: '#111',
          px: { xs: 2.5, sm: 5, md: 8 },
          py: { xs: 3.5, md: 5 },
        }}
      >
        <Typography
          sx={{
            maxWidth: 780,
            mx: 'auto',
            fontSize: { xs: '0.9rem', md: '0.95rem' },
            lineHeight: 1.85,
            textAlign: 'center',
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  )
}
