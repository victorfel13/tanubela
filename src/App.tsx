import { Box } from "@mui/material";
import { Contact } from "./components/Contact/Contact";
import { Shop } from "./components/Shop/Shop";
import { Footer } from "./components/Footer/Footer";
import { Gallery } from "./components/Gallery/Gallery";
import { Hero } from "./components/Hero/Hero";
import { GlobalPlayer } from "./components/music/GlobalPlayer";
import { Music } from "./components/music/Music";
import { Navbar, NAVBAR_HEIGHT } from "./components/Navbar/Navbar";
import { ScrollReveal } from "./components/shared/ScrollReveal";
import { Style } from "./components/Style/Style";
import { Video } from "./components/Video/Video";
import { usePlayback } from "./hooks/usePlayback";
import styleBackground from "./assets/Estatic_assets/backgroud 2.svg";
import heroBackground from "./assets/Estatic_assets/backgroung_hero.svg";
import heroLogo from "./assets/Estatic_assets/logo.svg";

export default function App() {
  const { currentTrack } = usePlayback();

  return (
    <Box
      sx={{
        bgcolor: "#000",
        color: "#fff",
        minHeight: "100vh",
        width: "100%",
        maxWidth: "100%",
        overflowX: "hidden",
        pb: currentTrack ? 8 : 0,
      }}
    >
      <Navbar />
      <Box
        component="main"
        sx={{
          pt: `${NAVBAR_HEIGHT.xs}px`,
          '@media (min-width: 900px)': {
            pt: `${NAVBAR_HEIGHT.md}px`,
          },
        }}
      >
      <Box id="inicio">
        <Hero img={heroLogo} backgroundImageSrc={heroBackground} />
      </Box>
      <ScrollReveal sectionId="estilo">
        <Style backgroundImageSrc={styleBackground} />
      </ScrollReveal>
      <ScrollReveal sectionId="musica">
        <Music />
      </ScrollReveal>
      <ScrollReveal sectionId="video">
        <Video />
      </ScrollReveal>
      <ScrollReveal sectionId="galeria">
        <Gallery />
      </ScrollReveal>
      <ScrollReveal sectionId="tienda">
        <Shop />
      </ScrollReveal>
      <ScrollReveal sectionId="contacto">
        <Contact />
      </ScrollReveal>
      <Footer />
      </Box>
      <GlobalPlayer />
    </Box>
  );
}
