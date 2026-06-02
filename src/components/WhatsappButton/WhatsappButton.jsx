import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/919999999999"
      target="_blank"
      rel="noreferrer"
      className="
      fixed
      bottom-24
      right-6
      z-50
      w-16
      h-16
      rounded-full
      bg-green-500
      text-white
      flex
      items-center
      justify-center
      text-3xl
      shadow-xl
      "
    >
      <FaWhatsapp />
    </a>
  );
}