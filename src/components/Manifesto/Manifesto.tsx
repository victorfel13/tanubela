import { Box } from '@mui/material'
import { manifestoInfo } from '../../data/infoText'

export function Manifesto() {
  return (
    <Box sx={{ width: '98%', maxWidth: 1460, mx: 'auto', py: 2, border: '1px solid rgba(255,255,255,0.28)', px: 1.2 }}>
      <Box sx={{ minHeight: 180, p: 1.2 }}>
        {`[ SECCION_INTERLUDIO: OVERLAY_DARK + TEXTO_CENTERED ] ${manifestoInfo.title} - ${manifestoInfo.phrase}`}
      </Box>
    </Box>
  )
}

