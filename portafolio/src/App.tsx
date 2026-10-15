import HeaderMenu from "./Components/Menu";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Services from "./Components/Services";
import Footer from "./Components/Footer";
import { useTranslation } from "react-i18next";
import Proyects from "./Components/Proyects";
import { useChangePalette } from "../store/useChangePalette";
function App() {
  const nombrePaleta = useChangePalette((state) => state.nombre);

  return (
    <article
      data-theme={nombrePaleta}
      className="   min-h-screen w-full bg-body-background bg-[radial-gradient(#d1ccc0_1.5px,transparent_1.5px)] bg-[size:24px_24px] scroll-smooth"
    >
      <HeaderMenu />
      <About />
      <Skills />
      <Proyects />
      <Services />
      <Footer />
    </article>
  );
}

export default App;
