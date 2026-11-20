import "i18next";
import { useTranslation } from "react-i18next";
import { LuGithub } from "react-icons/lu";
import { LuYoutube } from "react-icons/lu";
import { TfiNewWindow } from "react-icons/tfi";
import { Proyects } from "../../Data/ProyectsData";
import LineaOndulada from "../Components/GeometryComp/LineaOndulada";
import Poligono from "../Components/GeometryComp/Poligono";

function PersonalProyects() {
  const { t } = useTranslation();
  const featuredProjects = Proyects.filter((project) => project.featured);
  const otherProjects = Proyects.filter((project) => !project.featured);

  return (
    <section className="flex flex-col gap-8 px-5 py-12 sm:px-8 lg:px-10" id="projects">
      <div className="flex items-center justify-between gap-4">
       <div className="min-w-0">
         <span className="inline-flex w-fit rounded-full border-2 bg-surface-header px-3 py-1 text-sm font-bold tracking-wide text-contrast-strong shadow-[5px_3px_0px_0px_var(--card-shadow)] sm:text-base">
          {t("selected_work")}
        </span>
        <h2 className="mt-4 text-4xl font-bold sm:text-5xl">{t("projects_heading")}</h2>
        <LineaOndulada color="var(--action-primary)" />
       </div>
        <div className="hidden shrink-0 sm:block" aria-hidden="true"><Poligono /></div>
      </div>

      <section aria-labelledby="featured-projects-heading" className="flex flex-col gap-6">
        <h3 id="featured-projects-heading" className="text-2xl font-bold sm:text-3xl">
          {t("featured_projects")}
        </h3>
        <div className="flex flex-col gap-8">
          {featuredProjects.map((pro) => {
            return (
              <article key={pro.nombre} className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(19rem,0.8fr)] lg:items-center lg:gap-10">
                <img
                  src={pro.imagen}
                  alt={t(pro.imageAlt)}
                  loading="lazy"
                  decoding="async"
                  width="960"
                  height="540"
                  className="aspect-video w-full rounded-xl border-2 border-outline-strong bg-canvas object-cover object-center shadow-[3px_3px_0px_0px_var(--card-shadow)]"
                />
                <div className="flex min-w-0 flex-col gap-5">
                  <div className="flex flex-col gap-3">
                    <h4 className="text-2xl font-bold sm:text-3xl">{t(pro.nombre)}</h4>
                    <p className="whitespace-pre-line text-base leading-relaxed text-content-secondary sm:text-lg">
                      {t(pro.description)}
                    </p>
                    <h5 className="text-sm font-bold text-content-primary">{t("project_technologies")}</h5>
                    <div className="flex flex-wrap gap-2">
                      {pro.tecnologias.map((tech) => (
                        <span key={tech} className="rounded-full border border-outline/70 bg-icon-surface-primary px-3 py-1 text-sm font-medium text-icon-content">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    {pro.youtube && (
                      <a href={pro.youtube} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border-2 border-outline-strong px-4 py-2 text-sm font-bold transition-colors hover:bg-action-hover">
                        <LuYoutube aria-hidden="true" /> YouTube
                      </a>
                    )}
                    {pro.link && (
                      <a href={pro.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border-2 border-outline-strong bg-action-primary px-4 py-2 text-sm font-bold text-contrast-strong transition-colors hover:bg-action-hover">
                        <LuGithub aria-hidden="true" /> GitHub
                      </a>
                    )}
                    {pro.demo && (
                      <a href={pro.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border-2 border-outline-strong px-4 py-2 text-sm font-bold transition-colors hover:bg-action-hover">
                        <TfiNewWindow aria-hidden="true" /> {t("live_demo")}
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section aria-labelledby="other-projects-heading">
        <div className="flex w-full flex-col gap-5">
          <h3 id="other-projects-heading" className="text-start text-2xl font-bold sm:text-3xl">
            {t("other_projects")}
          </h3>
          <div className="grid grid-cols-1 gap-x-8 md:grid-cols-2 xl:grid-cols-3">
            {otherProjects.map((pro) => {
              return (
                <article key={pro.nombre} className="flex min-w-0 flex-col border-t border-outline py-5">
                  <div className="grid min-w-0 grid-cols-[8rem_minmax(0,1fr)] items-center gap-4 sm:grid-cols-[9rem_minmax(0,1fr)] xl:grid-cols-[10rem_minmax(0,1fr)]">
                    <img
                      src={pro.imagen}
                      alt={t(pro.imageAlt)}
                      loading="lazy"
                      decoding="async"
                      width="160"
                      height="96"
                      className="h-[5.5rem] w-32 rounded-lg border border-outline-strong bg-canvas object-cover sm:h-[5.5rem] sm:w-36 xl:h-24 xl:w-40"
                    />
                    <div className="flex min-w-0 flex-col gap-1">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <h4 className="text-lg font-bold">{t(pro.nombre)}</h4>
                        <span className="text-xs text-content-muted">{pro.tecnologias.join(" · ")}</span>
                      </div>
                      <p className="text-sm leading-relaxed text-content-secondary">{t(pro.description)}</p>
                      <div className="mt-3 flex flex-wrap items-center gap-2">
                        {pro.youtube && (
                          <a href={pro.youtube} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-outline-strong px-3 py-1.5 text-sm font-semibold transition-colors hover:bg-action-hover">
                            <LuYoutube aria-hidden="true" /> YouTube
                          </a>
                        )}
                        {pro.link && (
                          <a href={pro.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-outline-strong bg-action-primary px-3 py-1.5 text-sm font-semibold text-contrast-strong transition-colors hover:bg-action-hover">
                            <LuGithub aria-hidden="true" /> GitHub
                          </a>
                        )}
                        {pro.demo && (
                          <a href={pro.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-outline-strong px-3 py-1.5 text-sm font-semibold transition-colors hover:bg-action-hover">
                            <TfiNewWindow aria-hidden="true" /> {t("live_demo")}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </section>
  );
}

export default PersonalProyects;
