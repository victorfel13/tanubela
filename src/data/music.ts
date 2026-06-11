import auraAudio from '../assets/audio/Tanúbela & Entrópica - Aura.mp3'
import despertarRemixAudio from '../assets/audio/DESPERTAR (CRISTOPHER JUNGLE REMIX)  MSTR_r1_session_20260305.mp3'
import despertarAudio from '../assets/audio/Tanúbela - Despertar.mp3'
import sagradaAudio from '../assets/audio/Tanúbela - Sagrada.mp3'
import sourceAudio from '../assets/audio/Tanúbela - Source.mp3'
import tribalAudio from '../assets/audio/Tanúbela - Tribal.mp3'
import auraCover from '../assets/cover/aura.jpg'
import despertarCover from '../assets/cover/despertar.jpg'
import despertarRemixCover from '../assets/cover/Remix-Despertar-COVER-Tanúbela-1080-x-1080px.jpg.jpeg'
import sagradaCover from '../assets/cover/sagrada.jpg'
import sourceCover from '../assets/cover/source.jpg'
import tribalCover from '../assets/cover/tribal.jpg'

export type MusicTrack = {
  id: string
  title: string
  year: string
  releaseType: string
  trackCount: number
  description: string
  coverLabel?: string
  coverSrc?: string
  audioUrl: string
  links: {
    spotify?: string
    youtube?: string
    apple?: string
  }
}

export const musicData: MusicTrack[] = [
  {
    id: 'tribal',
    title: 'Tribal',
    year: '2023',
    releaseType: 'Sencillo',
    trackCount: 1,
    description:
      'Primer sencillo como solista. Lanzada en abril 2023. Habla acerca de reconocer a la tribu que te rodea y honrar a las tribus de las que haz formado parte en el pasado. Sembrando bendiciones para tribus futuras.',
    coverSrc: tribalCover,
    audioUrl: tribalAudio,
    links: {
      spotify: 'https://open.spotify.com/intl-es/track/6I76oYlOr5RiZjAUVsi6KU',
      youtube: '#',
      apple: '#',
    },
  },
  {
    id: 'despertar',
    title: 'Despertar',
    year: '2023',
    releaseType: 'Sencillo',
    trackCount: 1,
    description:
      'Lanzada en diciembre de 2023. Canción acerca del despertar espiritual como un llamado a romper contratos energéticos o kármicos hechos en vidas pasadas.',
    coverSrc: despertarCover,
    audioUrl: despertarAudio,
    links: {
      spotify: 'https://open.spotify.com/intl-es/track/19S2YGYOKFrK5qOfsC0d5H',
      youtube: '#',
    },
  },
  {
    id: 'despertar-cristopher-jungle-remix',
    title: 'Despertar - Cristopher Jungle Remix',
    year: '2026',
    releaseType: 'Sencillo',
    trackCount: 1,
    description:
      'Remix de Despertar en colaboración con Cristopher Jungle. Lanzado en 2026 como sencillo, expandiendo la atmósfera original hacia una lectura electrónica más profunda y envolvente.',
    coverSrc: despertarRemixCover,
    audioUrl: despertarRemixAudio,
    links: {
      spotify: 'https://open.spotify.com/intl-es/track/5prRUKTBpsiseaHcfwoIV0',
      youtube: '#',
    },
  },
  {
    id: 'source',
    title: 'Source',
    year: '2024',
    releaseType: 'Sencillo',
    trackCount: 1,
    description:
      'Lanzada en octubre 2024. Esta canción fue hecha para visibilizar nuestro poder interior que muchas veces apagamos o permitimos que se apague. Source trata acerca de recordar ese poder que yace dentro de nosotros y nuestra capacidad de reconocer esta fuerza interior.',
    coverSrc: sourceCover,
    audioUrl: sourceAudio,
    links: {
      spotify: 'https://open.spotify.com/intl-es/track/6l33FHzbyOTQp2zXwfbvrL',
      youtube: '#',
    },
  },
  {
    id: 'sagrada',
    title: 'Sagrada',
    year: '2025',
    releaseType: 'Sencillo',
    trackCount: 1,
    description:
      'Lanzada en marzo 2025. Una canción que honra nuestra ira interior y la reconoce como una emoción poderosa y sagrada, invitándonos a transitarla con consciencia, sin condenarla y a transmutarla en algo auspicioso.',
    coverSrc: sagradaCover,
    audioUrl: sagradaAudio,
    links: {
      spotify: 'https://open.spotify.com/intl-es/track/5EBJi3tNXj4eQoFOdphPDU',
      youtube: '#',
    },
  },
  {
    id: 'aura',
    title: 'Aura',
    year: '2025',
    releaseType: 'Sencillo',
    trackCount: 1,
    description:
      "Lanzada en julio 2025. 'Aura' feat. Entrópica, artista chilena con gran trayectoria en el experimental latinoamericano. Esta colaboración no sólo representa una conexión artística entre dos países y estilos, sino un manifiesto sonoro que honra el perdón, la transformación interior y la esencia verdadera dentro cada unx de nosotrxs.",
    coverSrc: auraCover,
    audioUrl: auraAudio,
    links: {
      spotify: 'https://open.spotify.com/intl-es/track/4GGVeAGDT7WV8oSwBPuFOe',
      youtube: '#',
    },
  },
]
