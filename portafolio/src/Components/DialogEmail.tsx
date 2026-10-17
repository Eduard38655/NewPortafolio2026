import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function DialogEmail({ onClose }: { onClose: () => void }) {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  const email = "eduao154@gmail.com";

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/40 p-4"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="email-dialog-title"
        className="flex w-full max-w-sm flex-col gap-5 rounded-xl border-2 border-outline-strong bg-surface-header p-5 shadow-[5px_5px_0px_0px_#1D283A]"
      >
        <div className="flex items-center justify-between gap-4">
          <h2 id="email-dialog-title" className="text-lg font-bold">
            {t("email_dialog_title")}
          </h2>
          <button type="button" onClick={onClose} aria-label={t("cancel")} className="rounded-md px-2 py-1 text-lg hover:bg-action-hover">
            ×
          </button>
        </div>

        <a href={`mailto:${email}`} className="w-full break-all rounded-lg border-2 bg-surface-header p-3 text-center text-sm text-content-muted">
          {email}
        </a>

        <div className="flex flex-wrap justify-center gap-3">
          <button type="button" onClick={copyEmail} className="rounded-lg bg-action-primary px-4 py-2 text-surface-header">
            {copied ? t("email_copied") : t("copy_email")}
          </button>
          <button type="button" onClick={onClose} className="rounded-lg bg-action-secondary px-4 py-2 text-content-primary">
            {t("cancel")}
          </button>
        </div>
      </section>
    </div>
  );
}

export default DialogEmail;
