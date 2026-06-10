import { Box, IconButton, Stack, Typography } from '@mui/material'
import { FaEllipsisH, FaPlay, FaSpotify } from 'react-icons/fa'
import type { MusicTrack } from '../../data/music'
import { usePlayback } from '../../hooks/usePlayback'

type MusicCardProps = {
  track: MusicTrack
}

export function MusicCard({ track }: MusicCardProps) {
  const { currentTrack, playingId, playTrack, stopPlayback } = usePlayback()
  const selected = currentTrack?.id === track.id
  const isPlaying = playingId === track.id

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        bgcolor: '#000',
        border: '1px solid rgba(255,255,255,0.85)',
        px: 2,
        py: 1.75,
        minHeight: 112,
      }}
    >
      <Box
        sx={{
          width: 72,
          height: 72,
          flexShrink: 0,
          bgcolor: '#1a1a1a',
          border: '1px solid rgba(255,255,255,0.2)',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {track.coverSrc ? (
          <Box
            component="img"
            src={track.coverSrc}
            alt={`Portada de ${track.title}`}
            sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <Typography
            sx={{
              fontSize: '0.55rem',
              letterSpacing: '0.12em',
              color: 'rgba(255,255,255,0.55)',
              textAlign: 'center',
              px: 0.5,
            }}
          >
            {track.coverLabel ?? 'COVER'}
          </Typography>
        )}
      </Box>

      <Stack spacing={0.75} sx={{ flex: 1, minWidth: 0 }}>
        <Typography
          sx={{
            fontSize: { xs: '1.35rem', md: '1.55rem' },
            fontWeight: 700,
            color: '#fff',
            lineHeight: 1.1,
            letterSpacing: '0.01em',
          }}
        >
          {track.title}
        </Typography>
        <Typography sx={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.72)' }}>
          {track.releaseType} • {track.year} • {track.trackCount} canciones
        </Typography>
        <Stack direction="row" spacing={1.25} alignItems="center" sx={{ pt: 0.25 }}>
          <IconButton
            aria-label={isPlaying ? `Pausar ${track.title}` : `Reproducir ${track.title}`}
            onClick={() => playTrack(track)}
            sx={{
              width: 34,
              height: 34,
              bgcolor: selected ? 'rgba(255,255,255,0.18)' : 'transparent',
              border: '1px solid rgba(255,255,255,0.75)',
              color: '#fff',
              '&:hover': { bgcolor: 'rgba(255,255,255,0.12)' },
            }}
          >
            <FaPlay size={12} />
          </IconButton>
          {track.links.spotify && track.links.spotify !== '#' ? (
            <IconButton
              component="a"
              href={track.links.spotify}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Abrir ${track.title} en Spotify`}
              onClick={stopPlayback}
              sx={{
                color: '#1db954',
                p: 0.5,
                '&:hover': { bgcolor: 'rgba(29, 185, 84, 0.12)' },
              }}
            >
              <FaSpotify size={18} />
            </IconButton>
          ) : null}
          <Box component="span" sx={{ color: 'rgba(255,255,255,0.75)', display: 'flex' }} aria-hidden>
            <FaEllipsisH size={16} />
          </Box>
        </Stack>
      </Stack>
    </Box>
  )
}
