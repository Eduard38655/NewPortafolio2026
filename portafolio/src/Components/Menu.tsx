import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoIosColorPalette } from "react-icons/io";
import { Palette } from "../../Data/Paleta";
import { useChangePalette } from "../../store/useChangePalette";
import DialogEmail from "../Components/DialogEmail.js";
function HeaderMenu() {
  const [showPalette, setShowPalette] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const lenguajes = [
    { code: "es", name: "🇪🇸 Español" },
    { code: "en", name: "🇺🇸 English" },
  ];
  const Bar = [
    { nombre: "about", route: "#about" },
    { nombre: "projects", route: "#projects" },
    { nombre: "experience", route: "#experience" },
    { nombre: "skills", route: "#skills" },
  ];
  const nombrePaleta = useChangePalette((state) => state.nombre);
  const cargarColor = useChangePalette((state) => state.cargarColor);

  // Obtener la paleta actualmente seleccionada
  const selectedColor =
    Palette.find((item) => item.nombre === nombrePaleta) ?? Palette[0];

  const [showDialog, SetDialog] = useState<boolean>(false);

  return (
    <>
      {showDialog && <DialogEmail onClose={() => SetDialog(false)} />}
      <header
        data-theme={nombrePaleta}
        className="sticky top-0 z-40 flex flex-wrap items-center justify-between gap-3 border-b-2 bg-surface-header px-4 py-3 font-outfit sm:px-6"
      >
        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <img
            src="/MenuImgProfile.png"
            alt=""
            width="50"
            height="50"
            className="size-10 shrink-0 object-cover p-1 sm:size-12.5"
          />
          <p className="truncate text-base font-bold sm:text-lg">{t("name")}</p>
        </div>
        <nav
          id="main-navigation"
          aria-label={t("main_navigation")}
          className={`${mobileOpen ? "block" : "hidden"} absolute left-0 right-0 top-full border-b-2 bg-surface-header px-4 py-3 shadow-md md:static md:block md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
        >
          <ul className="flex flex-col gap-1 text-base font-medium md:flex-row md:items-center md:gap-2">
            {Bar.map((nav) => (
              <li key={nav.nombre}>
                <a
                  href={nav.route}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-full px-3 py-2 transition-colors hover:bg-action-hover focus-visible:bg-action-hover"
                >
                  {t(nav.nombre)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <div className="relative">
            <button
              type="button"
              aria-expanded={showPalette}
              aria-label={t("color_palette")}
              onClick={() => setShowPalette((previous) => !previous)}
              className="flex items-center gap-2 rounded-full border-2 px-2 py-2 text-sm font-medium shadow-[3px_3px_0px_0px_#1D283A] sm:px-3"
            >
              <IoIosColorPalette aria-hidden="true" />
              <span className="hidden sm:inline">{t("colors")}</span>
              <div className="flex flex-row gap-1 text-lg  ">
                <span
                  className="inline-block h-3 w-3 rounded-full border"
                  style={{
                    backgroundColor: selectedColor.color1,
                  }}
                />

                <span
                  className="inline-block h-3 w-3 rounded-full border"
                  style={{
                    backgroundColor: selectedColor.color2,
                  }}
                />

                <span
                  className="inline-block h-3 w-3 rounded-full border"
                  style={{
                    backgroundColor: selectedColor.color3,
                  }}
                />

                <span
                  className="inline-block h-3 w-3 rounded-full border"
                  style={{
                    backgroundColor: selectedColor.color4,
                  }}
                />
              </div>
            </button>

            {showPalette && (
              <div className="absolute right-0 top-full z-50 mt-2 flex w-64 max-w-[calc(100vw-2rem)] flex-col gap-1 rounded-2xl border-2 bg-surface-header p-3 shadow-lg">
                <span className="p-1 text-sm font-medium">{t("color_palette")}</span>
                {Palette.map((item) => (
                  <button
                    type="button"
                    key={item.nombre}
                    onClick={() => {
                      cargarColor(item.nombre);
                      setShowPalette(false);
                    }}
                    className={`  flex flex-row items-center cursor-pointer rounded-lg gap-4 p-2  hover:bg-action-hover transition-colors ${nombrePaleta === item.nombre ? "bg-accent-tertiary border-2" : ""}`}
                  >
                    <div className="flex flex-row items-center gap-1   ">
                      <span
                        className="inline-block h-4 w-4 shrink-0 rounded-full border text-sm"
                        style={{ backgroundColor: item.color1 }}
                      />

                      <span
                        className="inline-block h-4 w-4 shrink-0 rounded-full border"
                        style={{ backgroundColor: item.color2 }}
                      />

                      <span
                        className="inline-block h-4 w-4 shrink-0 rounded-full border"
                        style={{ backgroundColor: item.color3 }}
                      />

                      <span
                        className="inline-block h-4 w-4 shrink-0 rounded-full border"
                        style={{ backgroundColor: item.color4 }}
                      />
                    </div>
                    <span className="text-left">{item.nombre}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => SetDialog(true)}
              className="cursor-pointer rounded-full border-2 bg-action-primary px-3 py-2 text-sm text-surface-header shadow-[3px_3px_0px_0px_#1D283A] sm:px-4 sm:text-base"
            >
              {t("contact")}
            </button>

            <label className="sr-only" htmlFor="language-select">{t("language")}</label>
            <div className="rounded-full border-2 px-2 py-2 text-sm font-medium shadow-[3px_3px_0px_0px_#1D283A] sm:text-base">
              <select
                id="language-select"
                value={i18n.resolvedLanguage ?? i18n.language}
                onChange={(e) => changeLanguage(e.target.value)}
                className="w-full cursor-pointer border-none bg-transparent focus:outline-none"
              >
                {lenguajes.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="button"
              aria-label={mobileOpen ? t("close_menu") : t("open_menu")}
              aria-expanded={mobileOpen}
              aria-controls="main-navigation"
              onClick={() => setMobileOpen((previous) => !previous)}
              className="rounded-lg border-2 px-3 py-2 text-sm font-semibold md:hidden"
            >
              {mobileOpen ? "×" : "☰"}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderMenu;
