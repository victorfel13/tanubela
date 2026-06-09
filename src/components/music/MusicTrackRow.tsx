import { Box, Typography } from '@mui/material'
import type { MusicTrack } from '../../data/music'
import { MusicCard } from './MusicCard'

const LAVENDER = '#b9b4d8'

type MusicTrackRowProps = {
  track: MusicTrack
  index: number
  isLast: boolean
}

export function MusicTrackRow({ track, isLast }: MusicTrackRowProps) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: 'minmax(280px, 0.95fr) minmax(0, 1.05fr)' },
        alignItems: 'stretch',
      }}
    >
      <MusicCard track={track} />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          px: { xs: 2, md: 3 },
          py: { xs: 2.5, md: 3 },
          bgcolor: LAVENDER,
          borderBottom: isLast ? 'none' : '1px solid rgba(0,0,0,0.85)',
        }}
      >
        <Typography
          sx={{
            color: '#1a1a1a',
            fontSize: { xs: '0.88rem', md: '0.92rem' },
            lineHeight: 1.75,
            fontWeight: 400,
          }}
        >
          {track.description}
        </Typography>
      </Box>
    </Box>
  )
}
