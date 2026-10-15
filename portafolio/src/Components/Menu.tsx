import { IoIosColorPalette } from "react-icons/io";
import { useState } from "react";
import { Palette } from "../../Data/Paleta.js";
import { useTranslation } from "react-i18next";
import { useChangePalette } from "../../store/useChangePalette";
import DialogEmail from "../Components/DialogEmail.js";
import MenuImgProfile from "../../public/MenuImgProfile.png";
function HeaderMenu() {
  const [SowPalette, setSowPalette] = useState<boolean>(false);

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
  const [selected, SetSelect] = useState<string>("#about");

  return (
    <>
      {showDialog && <DialogEmail />}
      <header
        data-theme={nombrePaleta}
        className="z-1 border-b-2  flex flex-row items-center justify-around self-center p-4 bg-header font-outfit sticky top-0
        "
      >
        <div className="flex flex-row items-center  gap-3">
          <img
            src={MenuImgProfile}
            alt=""
            className="w-[50px] h-[50px] object-cover p-[5px]"
          />
          {""}
          <h1 className="font-bold text-lg text-align">{t("name")}</h1>
        </div>
        <nav>
          <ul className="flex flex-row gap-2 text-base font-medium items-center">
            {Bar.map((nav, index) => (
              <li
                key={index}
                onClick={() => SetSelect(nav.route)}
                className={`${selected == nav.route ? "bg-button-hover p-2 rounded-b-lg" : " hover:bg-button-hover p-2 rounded-full"}`}
              >
                <a href={t(nav.route)}> {t(nav.nombre)}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-row gap-5 items-center justify-between">
          <div className=" cursor-pointer p-2  pl-2 pr-2 rounded-full shadow-[5px_3px_0px_0px_#1D283A] border-2">
            <div
              onClick={() => setSowPalette((prev) => !prev)}
              className=" flex flex-row gap-3  justify-center   items-center  "
            >
              <button
                type="button"
                className="text-sm font-normal cursor-pointer "
              >
                <span className="flex flex-row  gap-2 items-center text-base font-medium">
                  <IoIosColorPalette /> Colors
                </span>
              </button>

              <div className="flex flex-row gap-1 text-lg  ">
                <span
                  className="w-3 h-3 rounded-full inline-block border-1 "
                  style={{
                    backgroundColor: selectedColor.color1,
                  }}
                />

                <span
                  className="w-3 h-3 rounded-full inline-block border-1"
                  style={{
                    backgroundColor: selectedColor.color2,
                  }}
                />

                <span
                  className="w-3 h-3 rounded-full inline-block border-1"
                  style={{
                    backgroundColor: selectedColor.color3,
                  }}
                />

                <span
                  className="w-3 h-3 rounded-full inline-block border-1"
                  style={{
                    backgroundColor: selectedColor.color4,
                  }}
                />
              </div>
            </div>

            {SowPalette && (
              <div className="w-1/5  mt-5 mr-50  border-2 rounded-2xl flex flex-col     gap-0 absolute z-10 pl-3 pr-3 p-3 bg-header">
                <span className="text-base font-medium p-0"> Palleta</span>
                {Palette.map((item, index) => (
                  <button
                    type="button"
                    key={index}
                    onClick={() => {
                      cargarColor(item.nombre);
                      setSowPalette(false);
                    }}
                    className={`  flex flex-row items-center cursor-pointer rounded-lg gap-4 p-2  hover:bg-button-hover transition-colors ${nombrePaleta === item.nombre ? "bg-button6 border-2" : ""}`}
                  >
                    <div className="flex flex-row items-center gap-1   ">
                      <span
                        className="inline-block w-4 h-4 rounded-full shrink-0 border-1 text-sm"
                        style={{ backgroundColor: item.color1 }}
                      />

                      <span
                        className="inline-block w-4 h-4 rounded-full shrink-0 border-1"
                        style={{ backgroundColor: item.color2 }}
                      />

                      <span
                        className="inline-block w-4 h-4 rounded-full shrink-0 border-1"
                        style={{ backgroundColor: item.color3 }}
                      />

                      <span
                        className="inline-block w-4 h-4 rounded-full shrink-0 border-1"
                        style={{ backgroundColor: item.color4 }}
                      />
                    </div>
                    <h3 className="text-left">{item.nombre}</h3>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-5 h-10">
            <button
              type="button"
              onClick={() => SetDialog(true)}
              className="text-base cursor-pointer  rounded-full p-2  pl-2 pr-2 bg-button text-header shadow-[5px_3px_0px_0px_#1D283A] border-2"
            >
              {t("contact")}
            </button>

            <div className="p-2 pl-2 pr-2 rounded-full font-medium text-base cursor-pointer shadow-[5px_3px_0px_0px_#1D283A] border-2">
              <select
                value={i18n.resolvedLanguage ?? i18n.language}
                onChange={(e) => changeLanguage(e.target.value)}
                className="border-none  w-full focus:outline-none cursor-pointer"
              >
                {lenguajes.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderMenu;
