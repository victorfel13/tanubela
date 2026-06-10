import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { type FormEvent, useState } from 'react'
import { artistInfo, contactInfo } from '../../data/infoText'

const LAVENDER = '#b9b4d8'

const fieldSx = {
  '& .MuiOutlinedInput-root': {
    color: '#111',
    fontSize: '0.88rem',
    bgcolor: 'rgba(255,255,255,0.55)',
    '& fieldset': { borderColor: 'rgba(0,0,0,0.28)' },
    '&:hover fieldset': { borderColor: 'rgba(0,0,0,0.45)' },
    '&.Mui-focused fieldset': { borderColor: '#111' },
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(0,0,0,0.55)',
    fontSize: '0.88rem',
    '&.Mui-focused': { color: '#111' },
  },
} as const

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const subject = encodeURIComponent(`Contacto press kit — ${name}`)
    const body = encodeURIComponent(
      `Nombre: ${name}\nCorreo: ${email}\n\n${message}`,
    )

    window.location.href = `mailto:${artistInfo.contact.email}?subject=${subject}&body=${body}`
  }

  return (
    <Box
      component="section"
      sx={{
        width: '98%',
        maxWidth: 1460,
        mx: 'auto',
        bgcolor: LAVENDER,
        py: { xs: 3, md: 4 },
        px: { xs: 2, md: 3 },
      }}
    >
      <Box sx={{ maxWidth: 520, mx: 'auto', textAlign: 'center' }}>
        <Typography
          component="h2"
          sx={{
            color: '#111',
            fontWeight: 600,
            fontSize: { xs: '0.95rem', md: '1rem' },
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
          }}
        >
          {contactInfo.title}
        </Typography>
        <Typography
          sx={{
            mt: 1,
            mb: 3,
            color: 'rgba(0,0,0,0.72)',
            fontSize: '0.85rem',
            lineHeight: 1.6,
          }}
        >
          {contactInfo.subtitle}
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ textAlign: 'left' }}>
          <Stack spacing={2}>
            <TextField
              label={contactInfo.fields.name}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              fullWidth
              sx={fieldSx}
            />
            <TextField
              label={contactInfo.fields.email}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              fullWidth
              sx={fieldSx}
            />
            <TextField
              label={contactInfo.fields.message}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              fullWidth
              multiline
              minRows={4}
              sx={fieldSx}
            />
            <Button
              type="submit"
              variant="outlined"
              fullWidth
              sx={{
                py: 1.25,
                color: '#111',
                borderColor: 'rgba(0,0,0,0.55)',
                letterSpacing: '0.12em',
                fontSize: '0.82rem',
                '&:hover': {
                  borderColor: '#111',
                  bgcolor: 'rgba(255,255,255,0.35)',
                },
              }}
            >
              {contactInfo.submitLabel}
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}
