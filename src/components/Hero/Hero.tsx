import { Box } from '@mui/material'

type HeroProps = {
  img: string
  backgroundImageSrc: string
}

export function Hero({ img, backgroundImageSrc }: HeroProps) {
  return (
    <Box
      sx={{
        width: '98%',
        minHeight: { xs: '62vh', md: '80vh' },
        maxWidth: 1460,
        mx: 'auto',
        py: 2,
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: `url(${backgroundImageSrc})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: { xs: '175%', md: '140%' },
        backgroundPosition: { xs: '20% 42%', md: '0% 45%' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
          minWidth: { xs: 80, sm: 120 },
          minHeight: { xs: 220, sm: 320, md: 400 },
          width: { xs: '24%', sm: '18%', md: '12%' },
          position: 'absolute',
          top: '50%',
          left: { xs: '20%', sm: '14%', md: '14%' },
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Box
          component="img"
          src={img}
          alt="Tanúbela"
          sx={{
            width: { xs: 52, sm: 64, md: 80 },
            height: 'auto',
            objectFit: 'contain',
            maxHeight: { xs: 200, md: 300 },
            display: 'block',
          }}
        />
      </Box>
    </Box>
  )
}
