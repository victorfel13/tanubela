import { Box, Link, Stack, Typography } from '@mui/material'
import { artistInfo, footerInfo } from '../../data/infoText'

export function Footer() {
  const { email } = artistInfo.contact

  return (
    <Box
      component="footer"
      sx={{
        width: '98%',
        maxWidth: 1460,
        mx: 'auto',
        bgcolor: '#000',
        border: '1px solid rgba(255,255,255,0.28)',
        py: { xs: 3, md: 4 },
        px: { xs: 2, md: 3 },
        textAlign: 'center',
      }}
    >
      <Stack alignItems="center" spacing={0.75}>
        <Typography
          sx={{
            color: '#fff',
            fontWeight: 700,
            fontSize: { xs: '1rem', md: '1.1rem' },
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          {footerInfo.artistName}
        </Typography>
        <Typography
          sx={{
            color: 'rgba(255,255,255,0.62)',
            fontSize: '0.82rem',
            letterSpacing: '0.06em',
          }}
        >
          {footerInfo.tagline}
        </Typography>
        <Link
          href={`mailto:${email}`}
          sx={{
            mt: 0.5,
            color: 'rgba(255,255,255,0.88)',
            fontSize: '0.82rem',
            letterSpacing: '0.04em',
            textDecoration: 'none',
            '&:hover': { color: '#fff' },
          }}
        >
          {email}
        </Link>
      </Stack>

      <Box
        sx={{
          mt: { xs: 3, md: 3.5 },
          pt: 2,
          borderTop: '1px solid rgba(255,255,255,0.12)',
        }}
      >
        {footerInfo.rightsLines.map((line) => (
          <Typography
            key={line}
            sx={{
              color: 'rgba(255,255,255,0.45)',
              fontSize: '0.75rem',
              letterSpacing: '0.03em',
              lineHeight: 1.7,
            }}
          >
            {line}
          </Typography>
        ))}
        <Typography
          sx={{
            mt: 1.25,
            color: 'rgba(255,255,255,0.38)',
            fontSize: '0.72rem',
            letterSpacing: '0.04em',
          }}
        >
          {footerInfo.siteCredit}
        </Typography>
      </Box>
    </Box>
  )
}
