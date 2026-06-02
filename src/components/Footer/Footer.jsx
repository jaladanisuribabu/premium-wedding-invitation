import DownloadInvitation
from "../DownloadInvitation/DownloadInvitation";

import ShareButton
from "../ShareButton/ShareButton";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <h2
        className="
        font-vibes
        text-6xl
        mb-4
        "
      >
        Thank You
      </h2>

      <p>
        We look forward to celebrating
        with you.
      </p>

      <div className="mt-8">
        <DownloadInvitation />
      </div>

      <div className="mt-8">
        <ShareButton />
      </div>

    </footer>
  );
}