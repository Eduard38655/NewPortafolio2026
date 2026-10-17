import { useTranslation } from "react-i18next";
import { Tecnologias } from "../../Data/Tecnologias";
import { useChangePalette } from "../../store/useChangePalette";
import LineaOndulada from "../Components/GeometryComp/LineaOndulada";
import Poligono from "../Components/GeometryComp/Poligono";

function Skill() {
  const { t } = useTranslation();
  const nombrePaleta = useChangePalette((state) => state.nombre);

  return (
    <div
      id="skills"
      data-theme={nombrePaleta}
      className="flex flex-col gap-8 px-5 py-12 sm:px-8 lg:px-10"
    >
      <div className="flex flex-row justify-between items-center ">
        <div>
          <span className="inline-flex w-fit rounded-full border-2 bg-surface-header px-3 py-1 text-sm font-bold tracking-wide text-contrast-strong shadow-[5px_3px_0px_0px_#1D283A] sm:text-base">
            {t("skills")}
          </span>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">{t("technologies_heading")}</h2>
          <LineaOndulada color="var(--action-primary)" />
        </div>
        <Poligono />
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {Tecnologias.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 rounded-lg border-2 border-outline-strong bg-surface-header p-5 shadow-[5px_3px_0px_0px_#1D283A]    transition-transform duration-200 ease-in-out hover:-rotate-3 hover:scale-105   active:rotate-3 active:scale-95"
          >
            <div
              className="flex items-center justify-center rounded-lg border p-3 shadow-[5px_3px_0px_0px_#1D283A] "
              style={{
                backgroundColor: `var(--${tech.color})`,
              }}
            >
              <span
                title={tech.tittle}
                className="rounded-lg p-2 text-2xl text-contrast-strong transition-transform duration-200 ease-in-out hover:-rotate-3 hover:scale-105   active:rotate-3 active:scale-95 delay-75"
                style={{
                  color: `var(--${tech.textColor})`,
                }}
              >
                {tech.icon}
              </span>
            </div>

            <span className="text-center text-lg font-bold text-contrast-strong">
              {tech.nombre}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skill;
