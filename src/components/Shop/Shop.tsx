import { Box, Button, Stack, Typography } from '@mui/material'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { shopInfo } from '../../data/infoText'
import { SectionBanner } from '../shared/SectionBanner'

const LAVENDER = '#b9b4d8'

export function Shop() {
  return (
    <Box
      sx={{
        width: '98%',
        maxWidth: 1460,
        mx: 'auto',
        border: '1px solid rgba(255,255,255,0.28)',
        px: 0,
        overflow: 'hidden',
      }}
    >
      <SectionBanner title={shopInfo.title} titleSide="left" />

      <Box
        sx={{
          bgcolor: LAVENDER,
          px: { xs: 2, md: 3 },
          py: { xs: 3, md: 3.5 },
          textAlign: 'center',
        }}
      >
        <Typography
          sx={{
            color: '#111',
            fontSize: { xs: '0.85rem', md: '0.9rem' },
            lineHeight: 1.65,
            mb: 2.5,
          }}
        >
          {shopInfo.subtitle}
        </Typography>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={1.5}
          justifyContent="center"
          alignItems="center"
        >
          <Button
            component="a"
            href={shopInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            startIcon={<FaInstagram size={16} />}
            sx={{
              minWidth: { xs: '100%', sm: 200 },
              py: 1.1,
              color: '#111',
              borderColor: 'rgba(0,0,0,0.45)',
              letterSpacing: '0.1em',
              fontSize: '0.78rem',
              '&:hover': { borderColor: '#111', bgcolor: 'rgba(255,255,255,0.35)' },
            }}
          >
            {shopInfo.instagramLabel}
          </Button>
          <Button
            component="a"
            href={shopInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            startIcon={<FaWhatsapp size={16} />}
            sx={{
              minWidth: { xs: '100%', sm: 200 },
              py: 1.1,
              color: '#111',
              borderColor: 'rgba(0,0,0,0.45)',
              letterSpacing: '0.1em',
              fontSize: '0.78rem',
              '&:hover': { borderColor: '#111', bgcolor: 'rgba(255,255,255,0.35)' },
            }}
          >
            {shopInfo.whatsappLabel}
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}
