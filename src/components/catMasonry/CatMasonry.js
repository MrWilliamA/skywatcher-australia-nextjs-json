import styles from "../../styles/catMasonry.module.css";
import Image from "next/image";
import Link from "next/link";
const refractors = "/images/featuredCats/refractors.png";
const dobsonians = "/images/featuredCats/dobsonians.png";
const otas = "/images/featuredCats/otas.png";
const maks = "/images/featuredCats/maks.png";
const acuter = "/images/featuredCats/acuter.png";
const accessories = "/images/featuredCats/accessories.png";
const reflectors = "/images/featuredCats/reflectors.png";
const mounts = "/images/featuredCats/mounts.png";

const CatMasonry = () => {
  return (
    <section className={styles.section}>
      <article className="refractors">
        <Image src={refractors} alt="Refractors" width="350" height="400" />
        <h2>
          <Link href="/categories/refractors">Refractors</Link>
        </h2>
      </article>
      <article className="dobsonians">
        <Image src={dobsonians} alt="Dobsonians" width="350" height="400" />
        <h2>
          <Link href="/categories/dobsonians">Dobsonians</Link>
        </h2>
      </article>

      <article className="otas">
        <Image src={otas} alt="OTAs" width="550" height="200" />
        <h2>
          <Link href="/categories/otas">OTAs</Link>
        </h2>
      </article>

      <article className="maks">
        <Image src={maks} alt="Maksutov Cassegrains" width="550" height="200" />
        <h2>
          <Link href="/categories/maksutov-cassegrains">
            Maksutov Cassegrains
          </Link>
        </h2>
      </article>
      <article className="acuter">
        <Image src={acuter} alt="Acuter" width="550" height="200" />
        <h2>
          <Link href="/categories/acuter">Acuter</Link>
        </h2>
      </article>
      <article className="accessories">
        <Image src={accessories} alt="Accessories" width="518" height="188" />
        <h2>
          <Link href="/categories/accessories">Accessories</Link>
        </h2>
      </article>

      <article className="reflectors">
        <Image src={reflectors} alt="Reflectors" width="350" height="400" />
        <h2>
          <Link href="/categories/reflectors">Reflectors</Link>
        </h2>
      </article>
      <article className="mounts">
        <Image src={mounts} alt="Mounts" width="350" height="400" />
        <h2>
          <Link href="/categories/mounts">Mounts</Link>
        </h2>
      </article>
    </section>
  );
};

export default CatMasonry;
