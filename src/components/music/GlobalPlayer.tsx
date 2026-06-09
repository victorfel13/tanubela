import { Box, Button, Typography } from '@mui/material'
import { usePlayback } from '../../hooks/usePlayback'

export function GlobalPlayer() {
  const { currentTrack, audioRef, isPlaying, togglePlayback, onAudioPlay, onAudioPause, onAudioEnded } =
    usePlayback()

  if (!currentTrack) return null

  return (
    <Box
      sx={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        p: 1.2,
        borderTop: '1px solid rgba(255,255,255,0.24)',
        bgcolor: '#060606',
      }}
    >
      <Box sx={{ width: '98%', maxWidth: 1460, mx: 'auto', p: 1, border: '1px solid rgba(255,255,255,0.28)' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
          <Typography sx={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.82)', flex: 1 }}>
            [ GLOBAL_PLAYER ] {currentTrack.title}
          </Typography>
          <Button size="small" variant="outlined" onClick={togglePlayback}>
            {isPlaying ? 'Pause' : 'Play'}
          </Button>
        </Box>
        <Box
          component="audio"
          ref={audioRef}
          controls
          preload="metadata"
          src={currentTrack.audioUrl}
          onPlay={onAudioPlay}
          onPause={onAudioPause}
          onEnded={onAudioEnded}
          sx={{ width: '100%' }}
        />
      </Box>
    </Box>
  )
}

