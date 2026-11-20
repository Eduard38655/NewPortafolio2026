import "i18next";
import { useTranslation } from "react-i18next";
import LineaOndulada from "../Components/GeometryComp/LineaOndulada";
import Poligono from "../Components/GeometryComp/Poligono";
import { experiences } from "../Data/ExperienceData";

function Experience() {
  const { t } = useTranslation();
  const visibleExperiences = experiences.filter(
    (experience) =>
      experience.show &&
      experience.roleKey.trim().length > 0 &&
      experience.periodKey.trim().length > 0,
  );

  if (visibleExperiences.length === 0) {
    return null;
  }

  return (
    <section className="flex flex-col gap-8 px-5 py-12 sm:px-8 lg:px-10" id="experience">
      <div className="flex items-center justify-between gap-4">
        <div className="min-w-0">
          <span className="inline-flex w-fit rounded-full border-2 bg-surface-header px-3 py-1 text-sm font-bold tracking-wide text-contrast-strong shadow-[5px_3px_0px_0px_var(--card-shadow)] sm:text-base">
            {t("my_journey")}
          </span>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">{t("experience")}</h2>
          <LineaOndulada color="var(--action-primary)" />
        </div>
        <div className="hidden shrink-0 sm:block" aria-hidden="true">
          <Poligono />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {visibleExperiences.map((experience) => (
          <article
            key={`${experience.roleKey}-${experience.periodKey}`}
            className="flex flex-col gap-4 rounded-xl border-2 border-outline-strong bg-surface-header p-5 shadow-[3px_3px_0px_0px_var(--card-shadow)] transition-shadow hover:shadow-[5px_5px_0px_2px_var(--card-shadow)] sm:p-7"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <h3 className="text-xl font-bold text-contrast-strong sm:text-2xl">
                {t(experience.roleKey)}
              </h3>
              <p className="shrink-0 text-sm font-semibold text-content-secondary">
                {t(experience.periodKey)}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
