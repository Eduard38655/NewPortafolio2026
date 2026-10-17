import "i18next";
import { useTranslation } from "react-i18next";
import { SocialMedia } from "../../Data/SocialMedia";

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
      <footer className="flex flex-col items-center justify-center gap-4 bg-surface-footer px-5 py-8 text-center text-sm text-surface-header">
        <div className="flex flex-row items-center gap-4">
          <img
            src="/MenuImgProfile.png"
            alt=""
            width="50"
            height="50"
            className="size-12.5 object-cover p-1.25"
          />
          <p className="text-2xl font-bold">{t("name")}</p>
        </div>
        <p className="text-content-muted text-xl font-bold sm:text-2xl">
          {t("title")}
        </p>

        <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-base font-semibold sm:text-lg">
          {Bar.map((bar) => (
            <li key={bar.nombre} className="hover:text-action-hover">
              <a href={bar.route}>{t(bar.nombre)}</a>
            </li>
          ))}
        </ul>

        <div className="flex flex-row gap-4">
          {SocialMedia.map((sm) => (
            <a
              key={sm.nombre}
              href={sm.link}
              aria-label={sm.nombre}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-surface-header p-3 text-xl text-surface-header hover:bg-action-hover hover:text-surface-footer"
            >
              {sm.icons}
            </a>
          ))}
        </div>

        <p className="font-semibold">
          {t("footer_credit")} {t("name")}.
        </p>
      </footer>
    </>
  );
}

export default Footer;
