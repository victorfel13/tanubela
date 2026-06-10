import { Box, IconButton, Slider, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { FaPause, FaPlay } from 'react-icons/fa'
import { usePlayback } from '../../hooks/usePlayback'

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00'
  const minutes = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${minutes}:${secs.toString().padStart(2, '0')}`
}

export function GlobalPlayer() {
  const { currentTrack, audioRef, isPlaying, togglePlayback, onAudioPlay, onAudioPause, onAudioEnded } =
    usePlayback()
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    setProgress(0)
    setDuration(0)
  }, [currentTrack?.id])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleTimeUpdate = () => setProgress(audio.currentTime)
    const handleDuration = () => setDuration(audio.duration || 0)

    audio.addEventListener('timeupdate', handleTimeUpdate)
    audio.addEventListener('loadedmetadata', handleDuration)
    audio.addEventListener('durationchange', handleDuration)

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate)
      audio.removeEventListener('loadedmetadata', handleDuration)
      audio.removeEventListener('durationchange', handleDuration)
    }
  }, [audioRef, currentTrack?.id])

  if (!currentTrack) return null

  const handleSeek = (_: Event, value: number | number[]) => {
    const audio = audioRef.current
    if (!audio) return
    const nextTime = value as number
    audio.currentTime = nextTime
    setProgress(nextTime)
  }

  return (
    <Box
      sx={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1200,
        bgcolor: '#000',
        borderTop: '1px solid rgba(255,255,255,0.28)',
      }}
    >
      <Box
        sx={{
          width: '98%',
          maxWidth: 1460,
          mx: 'auto',
          px: { xs: 1.5, md: 2 },
          py: 1.25,
          display: 'flex',
          alignItems: 'center',
          gap: { xs: 1.25, md: 2 },
        }}
      >
        <IconButton
          aria-label={isPlaying ? `Pausar ${currentTrack.title}` : `Reproducir ${currentTrack.title}`}
          onClick={togglePlayback}
          sx={{
            width: 36,
            height: 36,
            flexShrink: 0,
            border: '1px solid rgba(255,255,255,0.75)',
            color: '#fff',
            borderRadius: 0,
            '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' },
          }}
        >
          {isPlaying ? <FaPause size={12} /> : <FaPlay size={12} />}
        </IconButton>

        <Typography
          sx={{
            minWidth: { xs: 72, md: 120 },
            maxWidth: { xs: 100, md: 200 },
            fontSize: '0.88rem',
            fontWeight: 600,
            color: '#fff',
            letterSpacing: '0.02em',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {currentTrack.title}
        </Typography>

        <Typography
          sx={{
            flexShrink: 0,
            fontSize: '0.75rem',
            color: 'rgba(255,255,255,0.72)',
            letterSpacing: '0.04em',
            fontVariantNumeric: 'tabular-nums',
            minWidth: 72,
          }}
        >
          {formatTime(progress)} / {formatTime(duration)}
        </Typography>

        <Slider
          aria-label="Progreso de reproducción"
          value={progress}
          min={0}
          max={duration || 0}
          step={0.1}
          onChange={handleSeek}
          sx={{
            flex: 1,
            color: '#fff',
            height: 4,
            py: 1.25,
            '& .MuiSlider-rail': {
              opacity: 1,
              bgcolor: 'rgba(255,255,255,0.22)',
              borderRadius: 0,
            },
            '& .MuiSlider-track': {
              bgcolor: '#fff',
              border: 'none',
              borderRadius: 0,
            },
            '& .MuiSlider-thumb': {
              width: 10,
              height: 10,
              bgcolor: '#fff',
              border: '1px solid #000',
              borderRadius: 0,
              '&:hover, &.Mui-focusVisible, &.Mui-active': {
                boxShadow: 'none',
              },
            },
          }}
        />
      </Box>

      <Box
        component="audio"
        ref={audioRef}
        preload="metadata"
        src={currentTrack.audioUrl}
        onPlay={onAudioPlay}
        onPause={onAudioPause}
        onEnded={onAudioEnded}
        sx={{ display: 'none' }}
      />
    </Box>
  )
}
