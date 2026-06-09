import { Box } from '@mui/material'
import { mainVideo } from '../../data/videos'
import { getYouTubeEmbedSrc, getYouTubeVideoId } from '../../utils/youtube'

export function Video() {
  const videoId = getYouTubeVideoId(mainVideo.youtubeUrl)
  const embedSrc = videoId ? getYouTubeEmbedSrc(videoId) : null

  return (
    <Box
      sx={{
        width: '98%',
        maxWidth: 1460,
        mx: 'auto',
        py: 2,
        border: '1px solid rgba(255,255,255,0.28)',
        px: { xs: 1.2, md: 2 },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16 / 9',
          bgcolor: '#111',
        }}
      >
        {embedSrc ? (
          <Box
            component="iframe"
            src={embedSrc}
            title={mainVideo.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            sx={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              border: 0,
            }}
          />
        ) : null}
      </Box>
    </Box>
  )
}
