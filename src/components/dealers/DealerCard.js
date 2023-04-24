import Image from "next/image";
import Styles from "../../styles/dealers.module.css";
import { FaArrowAltCircleRight } from "react-icons/fa";

const DealerCard = ({ store }) => {
  return (
    <article key={store.name}>
      <div>
        {store.image && (
          <Image src={store.image} width="300" height="300" alt={store.name} />
        )}
        {store.name && (
          <p>
            <strong>{store.name}</strong>
          </p>
        )}
        {store.address && (
          <p>
            <strong>Address: </strong>
            <a href={store.location} target="_blank">
              {store.address}
            </a>
          </p>
        )}
        {store.email && (
          <p>
            <strong>Email: </strong>
            <a href={"mailto:" + store.email}>{store.email}</a>
          </p>
        )}
        {store.phone && (
          <p>
            <strong>Phone: </strong>
            <a href={"tel:" + store.phone}>{store.phone}</a>
          </p>
        )}
        {store.website && (
          <p className={Styles.linkText}>
            <a href={store.website} target="_blank">
              <strong>
                Website
                <FaArrowAltCircleRight className={Styles.link} />
              </strong>
            </a>
          </p>
        )}
      </div>
    </article>
  );
};
export default DealerCard;
