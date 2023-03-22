import Link from "next/link";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Socials from "./Socials";

const preHeader = () => {
  return (
    <section className="preheader">
      <Socials className="socials" />
      <div class="announcement">
        <Link href="#">
          Sky-Watcher Competitions
          <FaArrowAltCircleRight />
        </Link>
      </div>
    </section>
  );
};

export default preHeader;
