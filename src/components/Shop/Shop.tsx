import { Box, Button, IconButton, Modal, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { shopInfo } from '../../data/infoText'
import { shopItems, type ShopItem } from '../../data/shop'
import { SectionBanner } from '../shared/SectionBanner'

const LAVENDER = '#b9b4d8'

export function Shop() {
  const [activeItem, setActiveItem] = useState<ShopItem | null>(null)

  const closeLightbox = () => setActiveItem(null)

  const unlockBodyScroll = () => {
    document.body.style.removeProperty('overflow')
    document.body.style.removeProperty('padding-right')
  }

  return (
    <Box
      sx={{
        width: '98%',
        maxWidth: 1460,
        mx: 'auto',
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
            {shopInfo.whatsappLabel} · {shopInfo.phone}
          </Button>
        </Stack>
      </Box>

      {shopItems.length > 0 ? (
        <Box
          sx={{
            bgcolor: '#000',
            px: { xs: 2, md: 3 },
            py: { xs: 2.5, md: 3 },
          }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: 'repeat(2, 1fr)',
                sm: 'repeat(3, 1fr)',
                md: 'repeat(4, 1fr)',
              },
              gap: 1,
            }}
          >
            {shopItems.map((item) => (
              <Box
                key={item.id}
                component="button"
                type="button"
                aria-label="Ver imagen en grande"
                onClick={() => setActiveItem(item)}
                sx={{
                  p: 0,
                  border: 'none',
                  bgcolor: '#111',
                  cursor: 'pointer',
                  width: '100%',
                  aspectRatio: '1',
                  overflow: 'hidden',
                  '&:hover img': { opacity: 0.88 },
                }}
              >
                <Box
                  component="img"
                  src={item.src}
                  alt=""
                  loading="lazy"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    display: 'block',
                    transition: 'opacity 0.2s ease',
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      ) : null}

      <Modal
        open={activeItem !== null}
        onClose={closeLightbox}
        onTransitionExited={unlockBodyScroll}
        aria-labelledby="shop-lightbox-title"
        keepMounted={false}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: { xs: 2, md: 3 },
        }}
        slotProps={{
          backdrop: {
            sx: { bgcolor: 'rgba(0,0,0,0.92)' },
          },
        }}
      >
        <Box
          onClick={closeLightbox}
          sx={{
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            outline: 'none',
          }}
        >
          <IconButton
            aria-label="Cerrar"
            onClick={closeLightbox}
            sx={{
              position: 'fixed',
              top: { xs: 12, md: 20 },
              right: { xs: 12, md: 20 },
              zIndex: 1,
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.35)',
              borderRadius: 0,
              width: 44,
              height: 44,
              fontSize: '1.1rem',
              letterSpacing: '0.08em',
              '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' },
            }}
          >
            ✕
          </IconButton>

          {activeItem ? (
            <Box
              component="img"
              src={activeItem.src}
              alt=""
              id="shop-lightbox-title"
              onClick={(event) => event.stopPropagation()}
              sx={{
                maxWidth: 'min(96vw, 920px)',
                maxHeight: 'min(88vh, 920px)',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          ) : null}
        </Box>
      </Modal>
    </Box>
  )
}
