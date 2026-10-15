import { Tecnologias } from "../../Data/Tecnologias";
import { useTranslation } from "react-i18next";
import { useChangePalette } from "../../store/useChangePalette";
import LineaOndulada from "../Components/GeometryComp/LineaOndulada";
function Skill() {
  const { t } = useTranslation();
  const nombrePaleta = useChangePalette((state) => state.nombre);

  return (
    <div
      id="skills"
      data-theme={nombrePaleta}
      className="flex flex-col gap-8 p-10 scroll-smooth"
    >
      <div>
        <button className="flex w-fit flex-row rounded-full border-2 bg-header  pl-2 pr-2 text-lg  text-button4 shadow-[5px_3px_0px_0px_#1D283A]    tracking-widest  font-bold text-button4">
          {t("skills")}
        </button>

        <h2 className="text-5xl font-bold">{t("things_i_work_ with")}</h2>
        <LineaOndulada Color={"bg-button"} />
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {Tecnologias.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 rounded-lg border-2 border-foreground bg-header p-5 shadow-[5px_3px_0px_0px_#1D283A]    transition-transform duration-200 ease-in-out hover:-rotate-3 hover:scale-105   active:rotate-3 active:scale-95"
          >
            <div
              className="flex items-center justify-center rounded-lg border p-3 shadow-[5px_3px_0px_0px_#1D283A] "
              style={{
                backgroundColor: `var(--${tech.color})`,
              }}
            >
              <span
                title={tech.tittle}
                className="rounded-lg p-2 text-2xl text-button4 transition-transform duration-200 ease-in-out hover:-rotate-3 hover:scale-105   active:rotate-3 active:scale-95 delay-75"
                style={{
                  color: `var(--${tech.textColor})`,
                }}
              >
                {tech.icon}
              </span>
            </div>

            <span className="text-center text-lg font-bold text-button4">
              {tech.nombre}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skill;
