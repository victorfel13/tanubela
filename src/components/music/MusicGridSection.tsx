import { Box } from '@mui/material'
import { musicData } from '../../data/music'
import { MusicSectionBanner } from './MusicSectionBanner'
import { MusicTrackRow } from './MusicTrackRow'

export function MusicGridSection() {
  return (
    <Box
      sx={{
        width: '98%',
        maxWidth: 1460,
        mx: 'auto',
        py: 2,
        px: 0,
        overflow: 'hidden',
      }}
    >
      <MusicSectionBanner />
      <Box sx={{ pt: 0 }}>
        {musicData.map((track, index) => (
          <MusicTrackRow
            key={track.id}
            track={track}
            index={index}
            isLast={index === musicData.length - 1}
          />
        ))}
      </Box>
    </Box>
  )
}
