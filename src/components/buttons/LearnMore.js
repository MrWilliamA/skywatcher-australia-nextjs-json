import Link from "next/link";
import { FaArrowAltCircleRight } from "react-icons/fa";

const LearnMore = ({ href }) => {
  return (
    <Link href={href} className="link">
      Learn More <FaArrowAltCircleRight />
    </Link>
  );
};

export default LearnMore;
