import HeaderMenu from "./Components/Menu";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Services from "./Components/Services";
import Footer from "./Components/Footer";
function App() {
  return (
    <article className="   min-h-screen w-full bg-[#fdfbf7] bg-[radial-gradient(#d1ccc0_1.5px,transparent_1.5px)] bg-[size:24px_24px]">
      <HeaderMenu />
      <About />
      <Skills />
      <Services />
      <Footer />
    </article>
  );
}

export default App;
