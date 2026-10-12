import { Tecnologias } from "../../Data/Tecnologias";
import "i18next";
import { useTranslation } from "react-i18next";
function Skill() {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <button>
          <p id="#skill">{t("skills")}</p>
        </button>
        <h2>{t("things_i_work_ with")}</h2>

        {Tecnologias.map((tech, index) => (
          <div key={index}>
            {tech.nombre}
            <span title={tech.tittle}>{tech.icon}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default Skill;
