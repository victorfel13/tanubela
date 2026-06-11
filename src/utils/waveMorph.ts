export type WaveWeights = {
  sine: number
  square: number
  saw: number
}

export function getIconWaveWeights(scrollProgress: number, iconIndex: number): WaveWeights {
  const starts = [2, 0, 1]
  const phase = (starts[iconIndex] + scrollProgress * 3) % 3

  if (phase < 1) {
    return { sine: 1 - phase, square: phase, saw: 0 }
  }
  if (phase < 2) {
    const t = phase - 1
    return { sine: 0, square: 1 - t, saw: t }
  }

  const t = phase - 2
  return { sine: t, square: 0, saw: 1 - t }
}

function sampleWave(phase: number, weights: WaveWeights): number {
  const sine = Math.sin(phase)
  const square = Math.sign(Math.sin(phase)) || 0
  const period = 2 * Math.PI
  const normalized = (((phase % period) + period) % period) / period
  const saw = 2 * normalized - 1

  return sine * weights.sine + square * weights.square + saw * weights.saw
}

export function buildStrokeWavePath(
  weights: WaveWeights,
  width: number,
  height: number,
  cycles = 1,
  samples = 28,
): string {
  const midY = height / 2
  const amplitude = height * 0.34
  let path = ''

  for (let i = 0; i <= samples; i++) {
    const x = (i / samples) * width
    const phase = (x / width) * Math.PI * 2 * cycles
    const y = midY - amplitude * sampleWave(phase, weights)
    path += i === 0 ? `M ${x.toFixed(2)} ${y.toFixed(2)}` : ` L ${x.toFixed(2)} ${y.toFixed(2)}`
  }

  return path
}

export const NAV_WAVE_ICONS = [
  { x: 1.5, width: 24 },
  { x: 34.5, width: 24 },
  { x: 67.5, width: 24 },
] as const
