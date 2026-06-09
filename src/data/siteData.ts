/**
 * Archivo puente (compatibilidad).
 * La data ahora esta separada por responsabilidad en:
 * - `infoText.ts`
 * - `images.ts`
 * - `videos.ts`
 * - `music.ts`
 */
export type { SocialLink } from './infoText'
export type { MusicTrack } from './music'

export { artistInfo, socials, extrasInfo, manifestoInfo } from './infoText'
export { musicData } from './music'
export { galleryItems, pressLogos, galleryItemsSourceMode } from './images'
export { mainVideo } from './videos'

