import { Box } from '@mui/material'
import { useScrollProgress } from '../../hooks/useScrollProgress'
import {
  buildStrokeWavePath,
  getIconWaveWeights,
  NAV_WAVE_ICONS,
} from '../../utils/waveMorph'

type WaveIconProps = {
  height?: number | { xs?: number; sm?: number; md?: number }
}

const VIEW_WIDTH = 93.54
const VIEW_HEIGHT = 14.14

export function WaveIcon({ height = { xs: 12, md: 14 } }: WaveIconProps) {
  const scrollProgress = useScrollProgress()

  return (
    <Box
      component="svg"
      viewBox={`0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`}
      aria-hidden
      sx={{
        display: 'block',
        height,
        width: 'auto',
        flexShrink: 0,
      }}
    >
      {NAV_WAVE_ICONS.map((icon, index) => {
        const weights = getIconWaveWeights(scrollProgress, index)
        const d = buildStrokeWavePath(weights, icon.width, VIEW_HEIGHT)

        return (
          <path
            key={index}
            d={d}
            transform={`translate(${icon.x} 0)`}
            fill="none"
            stroke="#fff"
            strokeWidth={2.65}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )
      })}
    </Box>
  )
}
