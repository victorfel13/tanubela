import { Box } from '@mui/material'
import { extrasInfo } from '../../data/infoText'

export function Extras() {
  return (
    <Box sx={{ width: '98%', maxWidth: 1460, mx: 'auto', py: 2, border: '1px solid rgba(255,255,255,0.28)', px: 1.2 }}>
      <Box sx={{ minHeight: 56, p: 1.2 }}>[ SECCION_EXTRAS ]</Box>
      <Box sx={{ mt: 1, p: 1, display: 'grid', gap: 1, gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' } }}>
        <Box sx={{ minHeight: 190, p: 1.2 }}>{`[ COL_FEATURINGS ] ${extrasInfo.featuringList.join(' / ')}`}</Box>
        <Box sx={{ minHeight: 190, p: 1.2 }}>{`[ COL_PLAYLISTS: IFRAME/WIDGET ] ${extrasInfo.spotifyEmbed}`}</Box>
      </Box>
    </Box>
  )
}

