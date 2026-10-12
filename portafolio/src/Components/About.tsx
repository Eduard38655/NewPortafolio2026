import React from "react";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { SocialMedia } from "../../Data/SocialMedia.jsx";
import { useTranslation } from "react-i18next";
import { RiDownload2Line } from "react-icons/ri";
import { useChangePalette } from "../../store/useChangePalette";
import MainPicture from "../../public/MainPicture.png";
function About(params: type) {
  const { t } = useTranslation();
  const nombrePaleta = useChangePalette((state) => state.nombre);
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
      <section data-theme={nombrePaleta} className="flex flex-row p-10">
        <div className="flex flex-col  gap-8">
          <button className="text-sm font-medium bg-header  w-fit flex flex-row rounded-full p-2  border-2 shadow-[5px_3px_0px_0px_#1D283A]">
            <p id="#about">
              {" "}
              {t("tittle")} * {t("years_experience")}
            </p>
          </button>
          <div className="flex flex-col gap-6 ">
            <h2 className="text-5xl font-bold  ">
              {t("grettings")} <span className="text-button">{t("name")}</span>
            </h2>
            <span className="text-gray-color text-2xl font-bold">
              {t("tittle")}
            </span>
          </div>
          <p className="font-medium text-lg">{t("description")}</p>
          <div className="flex flex-row gap-5 text-2xl  ">
            {SocialMedia.map((sm, index) => (
              <button title={sm.nombre} key={index}>
                {" "}
                <a
                  key={index}
                  href={sm.link}
                  title={sm.nombre}
                  aria-label={sm.nombre}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  text-header
    group inline-flex items-center justify-center
    rounded-full border-2 border-foreground
    bg-button p-3
    text-foreground
    shadow-[5px_4px_0px_0px_#1D283A]
    transition-all duration-200 ease-out
    hover:-translate-y-1
    hover:bg-button-hover
    hover:shadow-[7px_6px_0px_0px_#1D283A]
    active:translate-y-1
    active:shadow-[2px_2px_0px_0px_#1D283A]
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-primary
    focus-visible:ring-offset-2
    [&>svg]:h-6 [&>svg]:w-6
  "
                >
                  {sm.icons}
                </a>
              </button>
            ))}
          </div>

          <div className="flex flex-row items-center gap-4 w-auto">
            <button
              type="button"
              className="
    group inline-flex items-center justify-center gap-3
    rounded-full border-2 border-foreground
    bg-button px-6 py-3
    text-lg font-bold text-white
    shadow-[5px_4px_0px_0px_#1D283A]
    transition-all duration-200 ease-out
    hover:-translate-y-1
 
    hover:shadow-[7px_6px_0px_0px_#1D283A]
    active:translate-y-1
    active:shadow-[2px_2px_0px_0px_#1D283A]
    focus-visible:outline-none
    focus-visible:ring-2 focus-visible:ring-primary
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
            </button>

            <button
              type="button"
              className="
    inline-flex items-center justify-center gap-3
    rounded-full border-2 border-foreground
    px-6 py-3
    text-lg font-bold  
    shadow-[5px_4px_0px_0px_#1D283A]
    transition-all duration-200 ease-out
    hover:-translate-y-1
    hover:bg-button-hover
    hover:shadow-[7px_6px_0px_0px_#1D283A]
    active:translate-y-1
    active:shadow-[2px_2px_0px_0px_#1D283A]
    focus-visible:outline-none
    focus-visible:ring-2 focus-visible:ring-primary
    focus-visible:ring-offset-2
    cursor-pointer
  "
            >
              <RiDownload2Line className="h-5 w-5 shrink-0 transition-transform duration-200 group-hover:translate-y-0.5" />
              <span>{t("Descargar_CV")}</span>
            </button>
          </div>
        </div>

        <div className="relative isolate mx-auto w-full max-w-2xl px-3 py-4">
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
              aspect-[4/3] overflow-hidden
              rounded-xl border-2 border-[#1D283A]
              bg-[#FFFDF5]
            "
              >
                <img
                  src={MainPicture}
                  alt="Mi fotografía de perfil"
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
              className="
            absolute z-20
            inline-flex items-center justify-center
            whitespace-nowrap
            rounded-full border-2 border-[#1D283A]
            px-3 py-1.5
            text-xs font-bold text-[#1D283A]
            shadow-[4px_4px_0px_0px_#1D283A]
            animate-float
            transition-colors duration-300
            hover:bg-button-hover
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
