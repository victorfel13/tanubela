import { Box, Typography } from '@mui/material'
import { featuringsInfo } from '../../data/featurings'
import { SectionBanner } from '../shared/SectionBanner'

const PURPLE = '#8f3fae'

export function Featurings() {
  const { title, paragraphs, images } = featuringsInfo

  return (
    <Box
      sx={{
        width: '98%',
        maxWidth: 1460,
        mx: 'auto',
        border: '1px solid rgba(255,255,255,0.28)',
        borderTop: 'none',
        px: 0,
        overflow: 'hidden',
      }}
    >
      <SectionBanner title={title} titleSide="left" />

      <Box sx={{ position: 'relative', bgcolor: PURPLE }}>
        <Box
          sx={{
            position: 'relative',
            px: { xs: 2, md: 3 },
            pt: { xs: 2, md: 2.5 },
            pb: { xs: 2, md: 2.5 },
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: { xs: 8, md: 12 },
              right: { xs: 8, md: 16 },
              width: { xs: 'min(72vw, 200px)', sm: 210, md: 230 },
              zIndex: 2,
            }}
          >
            <Box
              component="img"
              src={images.appearsOnWidget}
              alt="Aparece en: 16 Cartas y Regrets"
              sx={{
                width: '100%',
                height: 'auto',
                display: 'block',
                boxShadow: '0 10px 32px rgba(0,0,0,0.35)',
              }}
            />
          </Box>

          <Box
            sx={{
              position: 'relative',
              zIndex: 1,
              maxWidth: 520,
              mx: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: 1.5,
              textAlign: 'center',
            }}
          >
            {paragraphs.map((text, index) => (
              <Typography
                key={index}
                sx={{
                  color: 'rgba(255,255,255,0.98)',
                  fontSize: { xs: '0.78rem', md: '0.82rem' },
                  lineHeight: 1.65,
                  fontWeight: 400,
                  px: { xs: 0, sm: 2 },
                }}
              >
                {text}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
