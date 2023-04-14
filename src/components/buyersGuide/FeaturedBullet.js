import Styles from "../../styles/buyersGuide.module.css";
import { FaDirections } from "react-icons/fa";

const FeaturedBullet = ({ title, content }) => {
  return (
    <div className={Styles.bullet}>
      <div>
        <FaDirections className={Styles.icon} />
      </div>
      <div>
        <p className={Styles.title}>
          <strong>{title}</strong>
        </p>

        <p
          dangerouslySetInnerHTML={{ __html: content }}
          className={Styles.text}
        ></p>
      </div>
    </div>
  );
};

export default FeaturedBullet;
