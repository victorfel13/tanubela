import {
  Box,
  Drawer,
  IconButton,
  Link,
  List,
  ListItemButton,
  Stack,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { useState } from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaSpotify,
  FaTiktok,
  FaYoutube,
} from 'react-icons/fa'
import type { IconType } from 'react-icons/lib'
import { SiApplemusic, SiTidal } from 'react-icons/si'
import { navItems, socials } from '../../data/infoText'
import { WaveIcon } from '../shared/WaveIcon'

const iconByPlatform: Record<string, IconType> = {
  instagram: FaInstagram,
  tiktok: FaTiktok,
  facebook: FaFacebookF,
  youtube: FaYoutube,
  tidal: SiTidal,
  spotify: FaSpotify,
  'apple music': SiApplemusic,
}

const navLinkSx = {
  color: 'rgba(255,255,255,0.88)',
  fontSize: { xs: '0.82rem', md: '0.78rem' },
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  textDecoration: 'none',
  fontFamily: '"Outfit", system-ui, sans-serif',
  '&:hover': { color: '#fff' },
} as const

export function Navbar() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <Box
      component="header"
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 1100,
        bgcolor: '#000',
        borderBottom: '1px solid rgba(255,255,255,0.28)',
      }}
    >
      <Box
        sx={{
          width: '98%',
          maxWidth: 1460,
          mx: 'auto',
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          py: { xs: 1.25, md: 1.5 },
          px: { xs: 1.5, md: 2.5 },
        }}
      >
        <IconButton
          aria-label={isMobile ? (open ? 'Cerrar menú' : 'Abrir menú') : 'Ir al inicio'}
          component={isMobile ? 'button' : 'a'}
          href={isMobile ? undefined : '#inicio'}
          onClick={isMobile ? () => setOpen((v) => !v) : undefined}
          sx={{ color: '#fff', p: 0.75 }}
        >
          <WaveIcon height={{ xs: 14, md: 16 }} />
        </IconButton>

        <Box
          component="nav"
          aria-label="Secciones del sitio"
          sx={{
            flex: 1,
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'center',
          }}
        >
          <Stack direction="row" spacing={2.5}>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} sx={navLinkSx}>
                {item.label}
              </Link>
            ))}
          </Stack>
        </Box>

        <Stack direction="row" spacing={0.15} sx={{ flexShrink: 0, display: { xs: 'none', sm: 'flex' } }}>
          {socials.map((social) => {
            const Icon = iconByPlatform[social.platform.toLowerCase()]
            if (!Icon) return null
            return (
              <IconButton
                key={social.platform}
                component="a"
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.platform}
                size="small"
                sx={{ color: '#fff' }}
              >
                <Icon size={16} />
              </IconButton>
            )
          })}
        </Stack>
      </Box>

      <Drawer
        anchor="left"
        open={open && isMobile}
        onClose={closeMenu}
        PaperProps={{
          sx: {
            width: 'min(82vw, 280px)',
            bgcolor: '#000',
            borderRight: '1px solid rgba(255,255,255,0.28)',
            pt: 2,
          },
        }}
      >
        <Box sx={{ px: 2.5, pb: 2, color: '#fff' }}>
          <WaveIcon height={16} />
        </Box>
        <List sx={{ px: 1 }}>
          {navItems.map((item) => (
            <ListItemButton
              key={item.href}
              component="a"
              href={item.href}
              onClick={closeMenu}
              sx={{
                color: 'rgba(255,255,255,0.9)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontSize: '0.82rem',
                fontFamily: '"Outfit", system-ui, sans-serif',
              }}
            >
              {item.label}
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </Box>
  )
}
