import { Box } from '@mui/material'
import sineDecor from '../../assets/Estatic_assets/sine_icon.svg'

type WaveIconProps = {
  height?: number | { xs?: number; sm?: number; md?: number }
}

export function WaveIcon({ height = { xs: 12, md: 14 } }: WaveIconProps) {
  return (
    <Box
      component="img"
      src={sineDecor}
      alt=""
      aria-hidden
      sx={{
        display: 'block',
        height,
        width: 'auto',
        objectFit: 'contain',
        flexShrink: 0,
      }}
    />
  )
}
