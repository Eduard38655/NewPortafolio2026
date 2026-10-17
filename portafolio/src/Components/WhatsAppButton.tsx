import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/18299160676?text=Hola%2C%20me%20interesa%20conocer%20tus%20servicios."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbeme por WhatsApp"
      title="Escríbeme por WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex size-14 items-center justify-center rounded-full border-2 border-[#102A27] bg-[#25D366] text-3xl text-white shadow-[4px_4px_0px_0px_#102A27] transition-transform hover:-translate-y-1 hover:shadow-[5px_6px_0px_0px_#102A27] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#25D366] active:translate-y-0"
    >
      <FaWhatsapp aria-hidden="true" />
    </a>
  );
}

export default WhatsAppButton;