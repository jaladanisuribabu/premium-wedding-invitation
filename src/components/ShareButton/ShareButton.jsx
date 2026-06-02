import {
  WhatsappShareButton,
  FacebookShareButton,
  TelegramShareButton
} from "react-share";

export default function ShareButton() {

  const url =
    window.location.href;

  return (
    <div className="flex gap-4">

      <WhatsappShareButton
        url={url}
      >
        WhatsApp
      </WhatsappShareButton>

      <FacebookShareButton
        url={url}
      >
        Facebook
      </FacebookShareButton>

      <TelegramShareButton
        url={url}
      >
        Telegram
      </TelegramShareButton>

    </div>
  );
}