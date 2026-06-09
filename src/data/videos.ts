export type VideoItem = {
  id: string
  title: string
  /** URL de YouTube (watch, youtu.be o embed) */
  youtubeUrl: string
}

export const mainVideo: VideoItem = {
  id: 'main-video',
  title: 'Video principal',
  youtubeUrl: 'https://www.youtube.com/watch?v=2dP41r-gleU',
}
