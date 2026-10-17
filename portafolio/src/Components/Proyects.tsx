import "i18next";
import { useTranslation } from "react-i18next";
import { LuGithub } from "react-icons/lu";
import { TfiNewWindow } from "react-icons/tfi";
import { Proyects } from "../../Data/ProyectsData";
import LineaOndulada from "../Components/GeometryComp/LineaOndulada";
import Poligono from "../Components/GeometryComp/Poligono";

function PersonalProyects() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col gap-8 px-5 py-12 sm:px-8 lg:px-10" id="projects">
      <div className="flex items-center justify-between gap-4">
       <div className="min-w-0">
         <span className="inline-flex w-fit rounded-full border-2 bg-surface-header px-3 py-1 text-sm font-bold tracking-wide text-contrast-strong shadow-[5px_3px_0px_0px_#1D283A] sm:text-base">
          {t("selected_work")}
        </span>
        <h2 className="mt-4 text-4xl font-bold sm:text-5xl">{t("projects_heading")}</h2>
        <LineaOndulada color="var(--action-primary)" />
       </div>
        <div className="hidden shrink-0 sm:block" aria-hidden="true"><Poligono /></div>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
        {Proyects.map((pro) => (
          <div
            key={pro.nombre}
            className="flex min-w-0 flex-col overflow-hidden rounded-xl border-2 border-outline-strong bg-surface-header shadow-[3px_3px_0px_0px_#1D283A] transition duration-200 hover:-translate-y-1 hover:shadow-[5px_5px_0px_2px_#1D283A]"
          >
            <img
              src={pro.imagen}
              alt={t(pro.imageAlt)}
              loading="lazy"
              decoding="async"
              className="aspect-video w-full border-b-2 border-outline-strong bg-canvas object-cover object-center"
            />

            <div className="flex flex-1 flex-col justify-between gap-5 p-4 sm:p-5">
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-bold">{t(pro.nombre)}</h3>
                <div className="flex flex-wrap gap-2">
                    {pro.tecnologias.map((tech) => (
                      <span key={tech} className="rounded-full bg-contrast-strong px-3 py-1 text-sm text-surface-header">
                        {tech}
                      </span>
                    ))}
                </div>
                <p className="w-full whitespace-normal wrap-break-word text-sm leading-relaxed text-content-muted">
                  {t(pro.description)}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href={pro.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border-2 border-outline-strong bg-contrast-strong px-4 py-2 text-sm font-bold text-surface-header transition-colors hover:bg-service-accent-1">
                  <LuGithub aria-hidden="true" /> Github
                </a>
                <a href={pro.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border-2 border-outline-strong px-4 py-2 text-sm font-bold transition-colors hover:bg-action-hover">
                  <TfiNewWindow aria-hidden="true" /> {t("live_demo")}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PersonalProyects;
