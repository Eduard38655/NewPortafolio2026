import "i18next";
import { useTranslation } from "react-i18next";
import { SocialMedia } from "../../Data/SocialMedia";
function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <footer>
        <h3> {t("name")}</h3>

        <span>{t("tittle")}</span>
        <ul>
          <li id="#home">{t("Home")}</li>
          <li id="#about">{t("About")}</li>
          <li id="#Skills">{t("skill")}</li>
          <li id="#proyects">{t("proyects")}</li>
          <li id="#experience">{t("experience")}</li>
          <li id="#contact">{t("contact")}</li>
        </ul>

        <div>
          {SocialMedia.map((sm, index) => (
            <>
              <button key={index}>
                <a href={sm.link}>{sm.icons}</a>
              </button>
            </>
          ))}
        </div>

        <p>
          {t("desing")} {t("name")}
          {" . "}
        </p>
      </footer>
    </>
  );
}

export default Footer;
