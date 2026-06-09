import { Box } from '@mui/material'

/** Icono de ojo del dossier Resonancia (aprox. al arte del press kit). */
export function ResonanciaEye() {
  return (
    <Box
      component="svg"
      viewBox="0 0 72 40"
      aria-hidden
      sx={{
        width: { xs: 56, md: 72 },
        height: 'auto',
        display: 'block',
        mt: 2,
      }}
    >
      <path
        d="M6 20 C18 6, 54 6, 66 20 C54 34, 18 34, 6 20 Z"
        fill="none"
        stroke="url(#eyeStroke)"
        strokeWidth="1.6"
      />
      <path d="M10 14 L10 26 M62 14 L62 26" stroke="url(#eyeStroke)" strokeWidth="1.4" />
      <path
        d="M36 28 C30 28, 26 24, 26 20 C26 16, 30 12, 36 12 C42 12, 46 16, 46 20 C46 24, 42 28, 36 28 Z"
        fill="none"
        stroke="url(#eyeStroke)"
        strokeWidth="1.4"
      />
      <defs>
        <linearGradient id="eyeStroke" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6ec4ff" />
          <stop offset="55%" stopColor="#d8d8d8" />
          <stop offset="100%" stopColor="#e85a5a" />
        </linearGradient>
      </defs>
    </Box>
  )
}
