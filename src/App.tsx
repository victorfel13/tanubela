import { Box } from "@mui/material";
import { Contact } from "./components/Contact/Contact";
import { Shop } from "./components/Shop/Shop";
import { Footer } from "./components/Footer/Footer";
import { Gallery } from "./components/Gallery/Gallery";
import { Hero } from "./components/Hero/Hero";
import { GlobalPlayer } from "./components/music/GlobalPlayer";
import { Music } from "./components/music/Music";
import { Navbar } from "./components/Navbar/Navbar";
import { Style } from "./components/Style/Style";
import { Video } from "./components/Video/Video";
import styleBackground from "./assets/Estatic_assets/backgroud 2.svg";
import heroBackground from "./assets/Estatic_assets/backgroung_hero.svg";
import heroLogo from "./assets/Estatic_assets/logo.svg";

export default function App() {
  return (
    <Box sx={{ bgcolor: "#000", color: "#fff", minHeight: "100vh", pb: 12 }}>
      <Navbar />
      <Box id="inicio">
        <Hero img={heroLogo} backgroundImageSrc={heroBackground} />
      </Box>
      <Box id="estilo">
        <Style backgroundImageSrc={styleBackground} />
      </Box>
      <Box id="musica">
        <Music />
      </Box>
      <Box id="video">
        <Video />
      </Box>
      <Box id="galeria">
        <Gallery />
      </Box>
      <Box id="tienda">
        <Shop />
      </Box>
      <Box id="contacto">
        <Contact />
      </Box>
      <Footer />
      <GlobalPlayer />
    </Box>
  );
}
