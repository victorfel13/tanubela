import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import type { MusicTrack } from '../data/music'

type PlaybackContextValue = {
  currentTrack: MusicTrack | null
  playingId: string | null
  isPlaying: boolean
  audioRef: React.RefObject<HTMLAudioElement | null>
  playTrack: (track: MusicTrack) => void
  togglePlayback: () => void
  pauseAudio: () => void
  onAudioPlay: () => void
  onAudioPause: () => void
  onAudioEnded: () => void
}

const PlaybackContext = createContext<PlaybackContextValue | null>(null)

export function PlaybackProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [currentTrack, setCurrentTrack] = useState<MusicTrack | null>(null)
  const [playingId, setPlayingId] = useState<string | null>(null)
  const isPlaying = playingId !== null

  const playTrack = useCallback(
    (track: MusicTrack) => {
      if (!track.audioUrl) return
      if (currentTrack?.id === track.id) {
        const audio = audioRef.current
        if (!audio) return
        if (audio.paused) void audio.play()
        else audio.pause()
        return
      }
      setCurrentTrack(track)
    },
    [currentTrack?.id],
  )

  useEffect(() => {
    if (!currentTrack?.audioUrl) return
    const audio = audioRef.current
    if (!audio) return
    void audio.play().catch(() => {})
  }, [currentTrack?.id, currentTrack?.audioUrl])

  const togglePlayback = useCallback(() => {
    const audio = audioRef.current
    if (!audio || !currentTrack) return
    if (audio.paused) void audio.play()
    else audio.pause()
  }, [currentTrack])

  const pauseAudio = useCallback(() => {
    audioRef.current?.pause()
    setPlayingId(null)
  }, [])

  const onAudioPlay = useCallback(() => {
    setPlayingId(currentTrack?.id ?? null)
  }, [currentTrack?.id])

  const onAudioPause = useCallback(() => {
    setPlayingId(null)
  }, [])

  const onAudioEnded = useCallback(() => {
    setPlayingId(null)
  }, [])

  const value = useMemo(
    () => ({
      currentTrack,
      playingId,
      isPlaying,
      audioRef,
      playTrack,
      togglePlayback,
      pauseAudio,
      onAudioPlay,
      onAudioPause,
      onAudioEnded,
    }),
    [
      currentTrack,
      playingId,
      isPlaying,
      playTrack,
      togglePlayback,
      pauseAudio,
      onAudioPlay,
      onAudioPause,
      onAudioEnded,
    ],
  )

  return <PlaybackContext.Provider value={value}>{children}</PlaybackContext.Provider>
}

export function usePlayback() {
  const ctx = useContext(PlaybackContext)
  if (!ctx) throw new Error('usePlayback debe usarse dentro de PlaybackProvider')
  return ctx
}

