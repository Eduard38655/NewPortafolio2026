import { Proyects } from "../../Data/ProyectsData";
import "i18next";
import { useTranslation } from "react-i18next";
import { LuGithub } from "react-icons/lu";
import { TfiNewWindow } from "react-icons/tfi";

function PersonalProyects(params: type) {
  const { t } = useTranslation();
  return (
    <article className="p-10">
      <div className="flex flex-col gap-5">
        <button
          id="proyects"
          className="  bg-header text-lg p-2 rounded-2xl  font-bold  border-2 shadow-[5px_3px_0px_0px_#1D283A]"
        >
          {t("selected_work")}
        </button>
        <h2 className="text-4xl font-bold ">{t("Projects_I've_built")}</h2>
      </div>

      <div className="flex flex-wrap  gap-5 w-full ">
        {Proyects.map((pro, index) => (
          <div
            key={index}
            className="rounded-lg border-1 gap-2 bg-header w-[370px] h-[460px] shadow-[3px_3px_0px_0px_#1D283A] hover:shadow-[5px_3px_0px_0px_#1D283A]"
          >
            <img
              src={pro.imagen}
              className="w-full h-1/2 rounded-t-lg
          "
            />

            <div className="flex flex-col justify-between gap-10  p-5">
              <div>
                <p> {pro.nombre}</p>
                <ul>
                  <li>
                    {pro.tecnologias.map((tech, i) => (
                      <span key={i}>{tech.nombre}</span>
                    ))}
                  </li>
                </ul>
                <p>{pro.description}</p>
              </div>

              <div className="flex flex-row gap-5 ">
                <button className=" gap-5 p-2  border-1 pl-4 pr-4 rounded-full text-header  bg-button4 font-bold">
                  <a
                    href={pro.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row items-center gap-2"
                  >
                    <LuGithub /> Github
                  </a>
                </button>
                <button className="border-2 p-2 pl-3 pr-2  rounded-full font-bold">
                  <a
                    href={pro.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row  items-center gap-2 text-sm"
                  >
                    <TfiNewWindow /> {t("Live_Demo")}
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

export default PersonalProyects;
