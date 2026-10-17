import "i18next";
import { useTranslation } from "react-i18next";
import LineaOndulada from "../Components/GeometryComp/LineaOndulada";
import Poligono from "../Components/GeometryComp/Poligono";

function Experience() {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col gap-8 px-5 py-12 sm:px-8 lg:px-10" id="experience">
      <div className="flex items-center justify-between gap-4">
        <div className="min-w-0">
          <span className="inline-flex w-fit rounded-full border-2 bg-surface-header px-3 py-1 text-sm font-bold tracking-wide text-contrast-strong shadow-[5px_3px_0px_0px_#1D283A] sm:text-base">
            {t("my_journey")}
          </span>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">{t("experience")}</h2>
          <LineaOndulada color="var(--action-primary)" />
        </div>
        <div className="hidden shrink-0 sm:block" aria-hidden="true">
          <Poligono />
        </div>
      </div>

      <article className="flex flex-col gap-3 rounded-xl border-2 border-outline-strong bg-surface-header p-5 shadow-[3px_3px_0px_0px_#1D283A] transition-shadow hover:shadow-[5px_5px_0px_2px_#1D283A] sm:grid-cols-[minmax(10rem,0.35fr)_1fr] sm:gap-6 sm:p-7">
        <p className="text-sm font-semibold text-content-secondary sm:pt-1">
          {t("experience_period")}
        </p>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold text-contrast-strong sm:text-2xl">
            {t("experience_role")}
          </h3>
          <p className="text-base leading-relaxed text-content-secondary sm:text-lg">
            {t("experience_description")}
          </p>
        </div>
      </article>
    </section>
  );
}

export default Experience;
