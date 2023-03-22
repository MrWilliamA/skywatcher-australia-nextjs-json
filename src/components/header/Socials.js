import Link from "next/link";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";

const Socials = ({ className }) => {
  return (
    <div className={className}>
      <Link href="https://www.facebook.com/SkyWatcherAustralia/">
        <FaFacebookSquare />
      </Link>
      |
      <Link href="https://www.instagram.com/skywatcheraustralia/">
        <FaInstagram />
      </Link>
      |
      <Link href="https://www.youtube.com/channel/UC3JAO_hZYRZNH-n7rbrgZTg/featured">
        <FaYoutube />
      </Link>
    </div>
  );
};

export default Socials;
