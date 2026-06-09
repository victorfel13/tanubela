import { Box, Typography } from '@mui/material'
import sineDecor from '../../assets/Estatic_assets/sine_icon.svg'

type SectionBannerProps = {
  title: string
  /** Dónde va el título respecto a los iconos decorativos */
  titleSide?: 'left' | 'right'
}

export function SectionBanner({ title, titleSide = 'right' }: SectionBannerProps) {
  const icons = (
    <Box
      component="img"
      src={sineDecor}
      alt=""
      aria-hidden
      sx={{
        display: 'block',
        height: { xs: 14, sm: 15, md: 16 },
        width: 'auto',
        maxWidth: 'min(52vw, 280px)',
        objectFit: 'contain',
        flexShrink: 0,
      }}
    />
  )

  const heading = (
    <Typography
      component="h2"
      sx={{
        color: '#fff',
        fontWeight: 500,
        fontSize: { xs: '0.9rem', md: '1rem' },
        letterSpacing: { xs: '0.18em', md: '0.24em' },
        textTransform: 'uppercase',
        fontFamily: '"Outfit", system-ui, sans-serif',
        lineHeight: 1,
      }}
    >
      {title}
    </Typography>
  )

  return (
    <Box
      sx={{
        bgcolor: '#000',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: { xs: 72, md: 96 },
        px: { xs: 2.5, sm: 3, md: 4 },
        py: { xs: 2, md: 2.5 },
      }}
    >
      {titleSide === 'left' ? heading : icons}
      {titleSide === 'left' ? icons : heading}
    </Box>
  )
}
