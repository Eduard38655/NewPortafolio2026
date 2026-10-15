import "i18next";
import { useTranslation } from "react-i18next";
import { SocialMedia } from "../../Data/SocialMedia";
import MenuImgProfile from "../../public/MenuImgProfile.png";

function Footer() {
  const { t } = useTranslation();

  const Bar = [
    { nombre: "about", route: "#about" },
    { nombre: "projects", route: "#projects" },
    { nombre: "experience", route: "#experience" },
    { nombre: "skills", route: "#skills" },
  ];
  return (
    <>
      <footer className="flex flex-col items-center justify-center gap-4 bg-body-background py-8 text-center text-sm text-body-text bg-button5">
        <div className="flex flex-row items-center gap-4">
          <img
            src={MenuImgProfile}
            alt=""
            className="w-[50px] h-[50px] object-cover p-[5px]"
          />
          <h3 className="text-2xl font-bold text-color2"> {t("name")}</h3>
        </div>
        <span className="text-gray-color  text-2xl font-bold ">
          {t("tittle")}
        </span>

        <ul className="flex flex-row gap-5 text-lg font-semibold text-color2 cursor-pointer  ">
          {Bar.map((bar, index) => (
            <li
              key={index}
              id={t(bar.route)}
              className="hover:text-button-hover"
            >
              <a href={t(bar.route)}> {t(bar.nombre)}</a>
            </li>
          ))}
        </ul>

        <div className="flex flex-row gap-4">
          {SocialMedia.map((sm, index) => (
            <button
              key={index}
              className="p-4 rounded-full border-2 cursor-pointer text-xl border-header text-header hover:bg-button-hover hover:text-button5 "
            >
              <a href={sm.link} target="_blank">
                {sm.icons}
              </a>
            </button>
          ))}
        </div>

        <p className="text-color2 font-semibold text-normal">
          {t("desing")} {t("name")}
          {"."}
        </p>
      </footer>
    </>
  );
}

export default Footer;
