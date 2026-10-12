import { Proyects } from "../../Data/Proyects";
import "i18next";
import { useTranslation } from "react-i18next";
import { LuGithub } from "react-icons/lu";
import { TfiNewWindow } from "react-icons/tfi";

function Proyects(params: type) {
  const { t } = useTranslation();
  return (
    <>
      <button>
        <p id="#proyects">{t("selected_work")}</p>
      </button>
      <h2>{t("Projects_I've_built")}</h2>

      {Proyects.map((pro, index) => (
        <div key={index}>
          {pro.nombre}

          <imagen src={pro.imagen} />

          <div>
            <li>
              {pro.tecnologias.map((tech, i) => (
                <span key={i}>{tech.nombre}</span>
              ))}
            </li>
          </div>
          <p>{pro.description}</p>
          <div>
            <button>
              <a href={pro.link} target="_blank" rel="noopener noreferrer">
                <LuGithub /> Github
              </a>
            </button>
            <button>
              <a href={pro.demo} target="_blank" rel="noopener noreferrer">
                <TfiNewWindow /> {t("Live_Demo")}
              </a>
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Proyects;
/**  nombre:"",
    imagen:"",
    tecnologias:[{nombre:""}],
link:"",
demo:"", description:"" */
