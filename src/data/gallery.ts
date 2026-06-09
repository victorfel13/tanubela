import resonanciaBack from '../assets/cover/no/Resonancia-Cover-Sesión-Back-Resonance.png'
import resonanciaFront from '../assets/cover/no/Resonancia-Cover-Sesión-Front.png'

export type ResonanciaTrack = {
  title: string
  accent: 'blue' | 'red'
}

export const resonanciaInfo = {
  tracklist: [
    { title: 'TRIBAL', accent: 'blue' },
    { title: 'SOURCE', accent: 'blue' },
    { title: 'SAGRADA', accent: 'blue' },
    { title: 'MÁS ALLÁ', accent: 'blue' },
    { title: 'AURA FEAT. ENTRÓPICA', accent: 'red' },
    { title: 'DESPERTAR', accent: 'blue' },
    { title: 'RESONANCIA', accent: 'red' },
  ] satisfies ResonanciaTrack[],
  description:
    'Resonancia es un viaje musical que invita a sentir el sonido como energía viva. Cada tema surge de una búsqueda interior: un eco entre el alma, la tierra y el movimiento. Este LP fusiona la voz como instrumento principal con texturas electrónicas, percusiones etéreas y paisajes orgánicos que evocan la resonancia energética, sonora y vibracional. Es un manifiesto sonoro sobre la conexión entre lo visible y lo invisible, una invitación a escuchar con el cuerpo y a reconocerse en la frecuencia del todo.',
  images: {
    front: resonanciaFront,
    back: resonanciaBack,
  },
} as const
