import styles from "../../styles/catMasonry.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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
        <Link href="/categories/refractors">
          <Image src={refractors} alt="Refractors" width="350" height="400" />
          <h2>Refractors</h2>
        </Link>
      </article>
      <article className="dobsonians">
        <Link href="/categories/dobsonians">
          <Image src={dobsonians} alt="Dobsonians" width="350" height="400" />
          <h2>Dobsonians</h2>
        </Link>
      </article>

      <article className="otas">
        <Link href="/categories/otas">
          <Image src={otas} alt="OTAs" width="550" height="200" />
          <h2>OTAs</h2>
        </Link>
      </article>

      <article className="maks">
        <Link href="/categories/maksutov-cassegrains">
          <Image
            src={maks}
            alt="Maksutov Cassegrains"
            width="550"
            height="200"
          />
          <h2>Maksutov Cassegrains</h2>
        </Link>
      </article>
      <article className="acuter">
        <Link href="/categories/acuter">
          <Image src={acuter} alt="Acuter" width="550" height="200" />
          <h2>Acuter</h2>
        </Link>
      </article>
      <article className="accessories">
        <Link href="/categories/accessories">
          <Image src={accessories} alt="Accessories" width="518" height="188" />
          <h2>Accessories</h2>
        </Link>
      </article>

      <article className="reflectors">
        <Link href="/categories/reflectors">
          <Image src={reflectors} alt="Reflectors" width="350" height="400" />
          <h2>Reflectors</h2>
        </Link>
      </article>
      <article className="mounts">
        <Link href="/categories/mounts">
          <Image src={mounts} alt="Mounts" width="350" height="400" />
          <h2>Mounts</h2>
        </Link>
      </article>
    </section>
  );
};

export default CatMasonry;
