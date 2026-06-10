import { Box, Typography } from '@mui/material'
import { Fragment } from 'react'
import { artistInfo, styleInfo } from '../../data/infoText'

type StyleProps = {
  backgroundImageSrc: string
}

export function Style({ backgroundImageSrc }: StyleProps) {
  const { email, managerLine, phone } = artistInfo.contact

  return (
    <Box
      sx={{
        width: '98%',
        maxWidth: 1460,
        mx: 'auto',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          bgcolor: '#000',
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr minmax(240px, 340px)' },
          gap: { xs: 3, md: 4 },
          alignItems: 'start',
          py: { xs: 3, md: 4 },
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {styleInfo.pressIntroParagraphs.map((text, index) => (
            <Typography
              key={index}
              sx={{
                color: 'rgba(255,255,255,0.95)',
                lineHeight: 1.7,
                fontSize: { xs: '0.9rem', md: '0.95rem' },
                fontWeight: 400,
              }}
            >
              {text}
            </Typography>
          ))}
        </Box>
        <StackedContact email={email} managerLine={managerLine} phone={phone} />
      </Box>

      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: 'min(85vh, 720px)', md: 'min(78vh, 820px)' },
          backgroundImage: `url(${backgroundImageSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: { xs: 28, md: 56 },
            bgcolor: 'rgba(255,255,255,0.22)',
            pointerEvents: 'none',
          }}
        />

        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'stretch',
            minHeight: { xs: 'min(85vh, 720px)', md: 'min(78vh, 820px)' },
            py: { xs: 2.5, md: 4 },
            px: { xs: 2, sm: 2.5, md: 4 },
          }}
        >
          <Box
            sx={{
              width: '100%',
              maxWidth: { xs: '100%', md: 480 },
              px: { xs: 2.5, md: 3.5 },
              py: { xs: 3, md: 4 },
              bgcolor: 'rgba(0, 0, 0, 0.48)',
              backdropFilter: 'blur(2px)',
            }}
          >
            <GenreStyleTitle title={styleInfo.title} />

            <Typography
              component="div"
              sx={{
                mt: 2,
                color: 'rgba(255,255,255,0.96)',
                lineHeight: 1.75,
                fontSize: { xs: '0.9rem', md: '0.95rem' },
                fontWeight: 400,
              }}
            >
              {styleInfo.introBefore}
              <Box component="span" sx={{ fontWeight: 700 }}>
                {styleInfo.introBold}
              </Box>
              {styleInfo.introAfter}
            </Typography>

            {styleInfo.bodyParagraphs.map((text, index) => (
              <Typography
                key={index}
                sx={{
                  mt: 2,
                  color: 'rgba(255,255,255,0.94)',
                  lineHeight: 1.75,
                  fontSize: { xs: '0.9rem', md: '0.95rem' },
                  fontWeight: 400,
                }}
              >
                {text}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

function GenreStyleTitle({ title }: { title: string }) {
  const upper = title.toUpperCase()
  const parts = upper.split('O')

  return (
    <Typography
      component="h2"
      sx={{
        fontWeight: 700,
        fontSize: { xs: '1rem', md: '1.1rem' },
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: '#fff',
        lineHeight: 1.35,
      }}
    >
      {parts.map((part, i) => (
        <Fragment key={i}>
          {part}
          {i < parts.length - 1 ? (
            <Box
              component="span"
              sx={{
                textDecoration: 'underline',
                textUnderlineOffset: '0.2em',
                textDecorationThickness: '1.5px',
                textDecorationColor: 'currentColor',
              }}
            >
              O
            </Box>
          ) : null}
        </Fragment>
      ))}
    </Typography>
  )
}

type StackedContactProps = {
  email: string
  managerLine: string
  phone: string
}

function StackedContact({ email, managerLine, phone }: StackedContactProps) {
  const rowSx = {
    py: 1.5,
    px: 2,
    fontFamily: '"Outfit", system-ui, sans-serif',
    fontSize: '0.85rem',
    letterSpacing: '0.04em',
    textTransform: 'uppercase' as const,
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        width: '100%',
        justifySelf: { md: 'end' },
      }}
    >
      <Box
        sx={{
          ...rowSx,
          bgcolor: '#000',
          border: '1px solid #fff',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        {email.toUpperCase()}
      </Box>
      <Box
        sx={{
          ...rowSx,
          bgcolor: '#d1d1d1',
          color: '#000',
          textAlign: 'left',
          textTransform: 'uppercase',
        }}
      >
        {managerLine}
      </Box>
      <Box
        sx={{
          ...rowSx,
          bgcolor: '#b9b4d8',
          color: '#000',
          textAlign: 'left',
          textTransform: 'none',
          letterSpacing: '0.08em',
        }}
      >
        {phone}
      </Box>
    </Box>
  )
}
