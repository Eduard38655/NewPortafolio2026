import { useTranslation } from "react-i18next";
import { BsWindowSidebar } from "react-icons/bs";
import { FaPenNib } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { RiSpeedUpFill } from "react-icons/ri";

import { ServicesData } from "../../Data/ServicesData";
import { useChangePalette } from "../../store/useChangePalette";
import LineaOndulada from "../Components/GeometryComp/LineaOndulada";

const serviceIcons = [BsWindowSidebar, MdWeb, FaPenNib, RiSpeedUpFill];

function Services() {
  const { t } = useTranslation();
  const nombrePaleta = useChangePalette((state) => state.nombre);

  return (
    <section
      id="services"
      data-theme={nombrePaleta}
      className="flex flex-col gap-10 p-6 sm:p-10"
    >
      {/* Encabezado */}
      <div className="flex flex-col items-start gap-4">
        <span className="w-fit rounded-full border-2 bg-surface-header px-3 py-2 text-lg font-bold tracking-widest text-contrast-strong shadow-[5px_3px_0px_0px_#1D283A]">
          {t("service_intro")}
        </span>

        <h2 className="text-4xl font-bold text-contrast-strong sm:text-5xl">
          {t("services")}
        </h2>

        <LineaOndulada color="var(--action-primary)" />
      </div>

      {/* Tarjetas de servicios */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {ServicesData.map((service, index) => {
          const Icon = serviceIcons[index % serviceIcons.length];

          return (
            <article
              key={service.id ?? service.title ?? index}
              className="flex flex-col gap-5 rounded-lg border-2 border-outline-strong bg-surface-header p-5 shadow-[3px_3px_0px_0px_#1D283A] hover:shadow-[5px_3px_0px_0px_#1D283A]"
            >
              <div className="flex items-center justify-between">
                <div
                  className="rounded-lg border-2 border-outline-strong p-4 text-2xl"
                  style={{
                    backgroundColor: `var(--${service.backgroundColor})`,
                  }}
                >
                  <Icon aria-hidden="true" />
                </div>

                <span className="text-3xl font-bold text-content-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-contrast-strong">
                  {t(service.title)}
                </h3>

                <p className="text-base font-normal text-content-muted">
                  {t(service.description)}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
