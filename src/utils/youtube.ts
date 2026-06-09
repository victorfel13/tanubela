export function getYouTubeVideoId(url: string): string | null {
  try {
    const u = new URL(url)
    if (u.hostname === 'youtu.be') {
      const id = u.pathname.replace(/^\//, '').split('/')[0]
      return id || null
    }
    if (u.hostname.includes('youtube.com')) {
      const v = u.searchParams.get('v')
      if (v) return v
      const m = u.pathname.match(/\/embed\/([^/?]+)/)
      if (m?.[1]) return m[1]
      const s = u.pathname.match(/\/shorts\/([^/?]+)/)
      if (s?.[1]) return s[1]
    }
  } catch {
    return null
  }
  return null
}

export function getYouTubeEmbedSrc(videoId: string, autoplay = false): string {
  const q = new URLSearchParams({
    rel: '0',
    modestbranding: '1',
    ...(autoplay ? { autoplay: '1' } : {}),
  })
  return `https://www.youtube-nocookie.com/embed/${videoId}?${q}`
}
