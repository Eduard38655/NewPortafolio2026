import "i18next";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function DialogEmail(params: type) {
  const { t } = useTranslation();
  const [Close, SetClose] = useState<boolean>(false);

  return (
    <>
      <dialog open>
        <div>
          <h4>{t("email_tittle_dialog")}</h4>
          <button onClick={() => SetClose(false)}>x</button>
        </div>

        <div>
          <div>
            <a href="mailto:eduao154@gmail.com">eduao154@gmail.com</a>
          </div>

          <button onClick={() => SetClose(false)}>{t("copy_email")}</button>
          <button onClick={() => SetClose(false)}>{t("cancel")}</button>
        </div>
      </dialog>
    </>
  );
}

export default DialogEmail;
