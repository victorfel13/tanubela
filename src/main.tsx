import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { PlaybackProvider } from './context/PlaybackContext.tsx'

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: { default: '#000', paper: '#0a0a0a' },
  },
  typography: {
    fontFamily: '"Outfit", system-ui, sans-serif',
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PlaybackProvider>
        <App />
      </PlaybackProvider>
    </ThemeProvider>
  </StrictMode>,
)
