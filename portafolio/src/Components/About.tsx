import { useTranslation } from "react-i18next";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { LuDownload } from "react-icons/lu";
import { SocialMedia } from "../../Data/SocialMedia";
import { useChangePalette } from "../../store/useChangePalette";
import cvEn from "../Cv/CV - Eduardo Ferreras - EN.pdf";
import cvEs from "../Cv/CV - Eduardo Ferreras - ES.pdf";
function About() {
  const { t, i18n } = useTranslation();
  const nombrePaleta = useChangePalette((state) => state.nombre);
  const activeLanguage = (i18n.resolvedLanguage ?? i18n.language).split("-")[0];
  const cvFile = activeLanguage === "en" ? cvEn : cvEs;
  const cvDownloadName =
    activeLanguage === "en"
      ? "Eduardo-Ferreras-CV-EN.pdf"
      : "Eduardo-Ferreras-CV-ES.pdf";
  const technologies = [
    {
      name: "React",
      top: "9%",
      left: "-3%",
      color: "#8B5CF6",
      delay: "0s",
    },
    {
      name: "SQL",
      top: "46%",
      left: "-6%",
      color: "#FFFDF5",
      delay: "0.5s",
    },
    {
      name: "TypeScript",
      top: "25%",
      right: "-3%",
      color: "#F472B6",
      delay: "0.8s",
    },
    {
      name: "JavaScript",
      top: "74%",
      left: "2%",
      color: "#FBBF24",
      delay: "0.3s",
    },
    {
      name: "Node.js",
      top: "86%",
      right: "5%",
      color: "#34D399",
      delay: "1s",
    },
  ];
  return (
    <>
      <section data-theme={nombrePaleta} className="grid grid-cols-1 items-center gap-10 px-5 py-10 sm:px-8 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:py-16" id="about">
        <div className="flex min-w-0 flex-col gap-6 sm:gap-8">
          <span className="w-fit rounded-full border-2 bg-surface-header p-2 text-sm font-medium shadow-[5px_3px_0px_0px_#1D283A]">
            {t("title")} · {t("years_experience")}
          </span>
          <div className="flex flex-col gap-3 sm:gap-5">
            <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
              {t("greeting")} <span className="text-action-primary">{t("name")}</span>
            </h1>
            <p className="text-xl font-bold text-content-muted sm:text-2xl">
              {t("title")}
            </p>
          </div>
          <p className="text-base font-medium leading-relaxed sm:text-lg">{t("description")}</p>
          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-bold">{t("languages")}</h2>
            <ul className="flex flex-wrap gap-2">
              <li className="rounded-full border-2 border-outline-strong bg-surface-header px-4 py-1.5 text-sm font-semibold shadow-[3px_3px_0px_0px_#1D283A]">
                {t("language_spanish")}
              </li>
              <li className="rounded-full border-2 border-outline-strong bg-surface-header px-4 py-1.5 text-sm font-semibold shadow-[3px_3px_0px_0px_#1D283A]">
                {t("language_english")}
              </li>
            </ul>
          </div>
          <div className="flex flex-row gap-5 text-2xl">
            {SocialMedia.map((sm, index) => (
              <a
                key={sm.nombre || index}
                href={sm.link}
                title={sm.nombre}
                aria-label={sm.nombre}
                target="_blank"
                rel="noopener noreferrer"
                className="
    group inline-flex items-center justify-center
    rounded-full border-2 border-outline-strong
    bg-action-primary p-3
    text-content-primary
    shadow-[5px_4px_0px_0px_#1D283A]
    transition-all duration-200 ease-out
    hover:-translate-y-1
    hover:bg-action-hover
    hover:shadow-[7px_6px_0px_0px_#1D283A]
    active:translate-y-1
    active:shadow-[2px_2px_0px_0px_#1D283A]
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-accent-primary
    focus-visible:ring-offset-2
    [&>svg]:h-6 [&>svg]:w-6
  "
              >
                {sm.icons}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="
    group inline-flex items-center justify-center gap-3
    rounded-full border-2 border-outline-strong
    bg-action-primary px-6 py-3
    text-lg font-bold text-white
    shadow-[5px_4px_0px_0px_#1D283A]
    transition-all duration-200 ease-out
    hover:-translate-y-1
 
    hover:shadow-[7px_6px_0px_0px_#1D283A]
    active:translate-y-1
    active:shadow-[2px_2px_0px_0px_#1D283A]
    focus-visible:outline-none
    focus-visible:ring-2 focus-visible:ring-accent-primary
    focus-visible:ring-offset-2
    cursor-pointer
  "
            >
              <span>{t("view_my_work")}</span>

              <HiOutlineArrowSmallRight
                className="
      h-5 w-5 shrink-0
      transition-transform duration-200
      group-hover:translate-x-1
    "
              />
            </a>

            <a
              href={cvFile}
              download={cvDownloadName}
              aria-label={t("download_cv")}
              className="
    inline-flex items-center justify-center gap-3
    rounded-full border-2 border-outline-strong
    px-6 py-3
    text-lg font-bold  
    shadow-[5px_4px_0px_0px_#1D283A]
    transition-all duration-200 ease-out
    hover:-translate-y-1
    hover:bg-action-hover
    hover:shadow-[7px_6px_0px_0px_#1D283A]
    active:translate-y-1
    active:shadow-[2px_2px_0px_0px_#1D283A]
    focus-visible:outline-none
    focus-visible:ring-2 focus-visible:ring-accent-primary
    focus-visible:ring-offset-2
    cursor-pointer
  "
            >
              <LuDownload className="h-5 w-5 shrink-0" aria-hidden="true" />
              <span>{t("download_cv")}</span>
            </a>
          </div>
        </div>

        <div className="relative isolate mx-auto w-full min-w-0 max-w-2xl px-3 py-4 sm:px-5">
          {/* Marco del navegador */}
          <div
            className="
          overflow-hidden rounded-2xl
          border-2 border-[#1D283A]
          bg-[#FFFDF5]
          shadow-[8px_8px_0px_0px_#1D283A]
        "
          >
            {/* Barra superior */}
            <div
              className="
            flex items-center gap-3
            border-b-2 border-[#1D283A]
            px-3 py-3 sm:px-4
          "
            >
              {/* Indicadores de la ventana */}
              <div className="flex shrink-0 items-center gap-2">
                <span className="h-3 w-3 rounded-full border-2 border-[#1D283A] bg-[#F472B6]" />
                <span className="h-3 w-3 rounded-full border-2 border-[#1D283A] bg-[#FBBF24]" />
                <span className="h-3 w-3 rounded-full border-2 border-[#1D283A] bg-[#34D399]" />
              </div>

              {/* Barra de dirección */}
              <div
                className="
              min-w-0 flex-1 truncate
              rounded-full border-2 border-[#1D283A]
              bg-white px-3 py-1
              text-xs text-gray-500 sm:text-sm
            "
              >
                mi-portafolio.dev
              </div>
            </div>

            {/* Contenido de la pantalla */}
            <div className="p-3 sm:p-4">
              <div
                className="
              aspect-4/3 overflow-hidden
              rounded-xl border-2 border-[#1D283A]
              bg-[#FFFDF5]
            "
              >
                <img
                  src="/MainPicture.png"
                  alt={t("profile_image_alt")}
                  className="h-full w-full object-cover object-center"
                />
              </div>

              {/* Barra inferior decorativa */}
              <div
                className="
              mt-3 flex items-center gap-2
              rounded-xl bg-[#1D283A]
              px-3 py-3 font-mono text-xs
              text-white sm:text-sm
            "
              >
                <span className="font-bold text-emerald-400">$</span>
                <span>git commit -m "ship it"</span>
                <span className="ml-auto animate-pulse text-emerald-400">
                  _
                </span>
              </div>
            </div>
          </div>

          {/* Tecnologías flotantes */}
          {technologies.map((tech) => (
            <span
              key={tech.name}
              style={{
                top: tech.top,
                left: tech.left,
                right: tech.right,
                backgroundColor: tech.color,
                animationDelay: tech.delay,
              }}
              className="hidden sm:inline-flex
            absolute z-20
            items-center justify-center
            whitespace-nowrap
            rounded-full border-2 border-[#1D283A]
            px-3 py-1.5
            text-xs font-bold text-[#1D283A]
            shadow-[4px_4px_0px_0px_#1D283A]
            animate-float
            transition-colors duration-300
            hover:bg-action-hover
            sm:px-4 sm:py-2 sm:text-sm
          "
            >
              {tech.name}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}

export default About;
