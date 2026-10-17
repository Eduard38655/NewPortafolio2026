import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useChangePalette } from "../store/useChangePalette";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import HeaderMenu from "./Components/Menu";
import Proyects from "./Components/Proyects";
import Services from "./Components/Services";
import Skills from "./Components/Skills";
import WhatsAppButton from "./Components/WhatsAppButton";
function App() {
  const nombrePaleta = useChangePalette((state) => state.nombre);
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const language = i18n.resolvedLanguage ?? i18n.language;
    const title = `${t("name")} | ${t("title")}`;
    const description = t("seo_description");
    const canonicalUrl = new URL(import.meta.env.BASE_URL, window.location.origin).href;
    const socialImage = new URL(`${import.meta.env.BASE_URL}MainPicture.png`, window.location.origin).href;

    document.documentElement.lang = language;
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
    document.querySelector('meta[property="og:url"]')?.setAttribute("content", canonicalUrl);
    document.querySelector('meta[property="og:image"]')?.setAttribute("content", socialImage);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", description);
    document.querySelector('meta[name="twitter:image"]')?.setAttribute("content", socialImage);

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.append(canonical);
    }
    canonical.href = canonicalUrl;

    let personSchema = document.querySelector<HTMLScriptElement>("#person-schema");
    if (!personSchema) {
      personSchema = document.createElement("script");
      personSchema.id = "person-schema";
      personSchema.type = "application/ld+json";
      document.head.append(personSchema);
    }
    personSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: t("name"),
      jobTitle: t("title"),
      description,
      url: canonicalUrl,
      image: socialImage,
      knowsAbout: ["React", "TypeScript", "Node.js", "PostgreSQL", "SQL Server", ".NET", "Tailwind CSS"],
      sameAs: ["https://github.com/Eduard38655"],
    });
  }, [i18n.language, i18n.resolvedLanguage, t]);

  return (
    <div
      data-theme={nombrePaleta}
      className="min-h-screen w-full bg-canvas text-content-primary bg-[radial-gradient(var(--pattern-dot)_1.5px,transparent_1.5px)] bg-size-[24px_24px]"
    >
      <HeaderMenu />
      <main>
        <About />
        <Skills />
        <Services />
        <Proyects />
        <Experience />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
