import { Box } from '@mui/material'
import { ResonanciaShowcase } from './ResonanciaShowcase'

/** Bloque Resonancia del press kit. El grid de fotos se activará cuando haya más assets en `assets/galery/`. */
export function Gallery() {
  return (
    <Box
      sx={{
        width: '98%',
        maxWidth: 1460,
        mx: 'auto',
        border: '1px solid rgba(255,255,255,0.28)',
        overflow: 'hidden',
      }}
    >
      <ResonanciaShowcase />
    </Box>
  )
}
