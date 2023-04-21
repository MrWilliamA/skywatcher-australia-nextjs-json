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
  const image_width = 350;
  const image_height = 400;

  const image_width_alt1 = 550;
  const image_height_alt1 = 200;

  const image_width_alt2 = 518;
  const image_height_alt3 = 188;

  return (
    <section className={styles.section}>
      <article className="refractors">
        <Link href="/categories/refractors">
          <Image
            src={refractors}
            alt="Refractors"
            width={image_width}
            height={image_height}
          />
          <h2>Refractors</h2>
        </Link>
      </article>
      <article className="dobsonians">
        <Link href="/categories/dobsonians">
          <Image
            src={dobsonians}
            alt="Dobsonians"
            width={image_width}
            height={image_height}
          />
          <h2>Dobsonians</h2>
        </Link>
      </article>

      <article className="otas">
        <Link href="/categories/otas">
          <Image
            src={otas}
            alt="OTAs"
            width={image_width_alt1}
            height={image_height_alt1}
          />
          <h2>OTAs</h2>
        </Link>
      </article>

      <article className="maks">
        <Link href="/categories/maksutov-cassegrains">
          <Image
            src={maks}
            alt="Maksutov Cassegrains"
            width={image_width_alt1}
            height={image_height_alt1}
          />
          <h2>Maksutov Cassegrains</h2>
        </Link>
      </article>
      <article className="acuter">
        <Link href="/categories/acuter">
          <Image
            src={acuter}
            alt="Acuter"
            width={image_width_alt1}
            height={image_height_alt1}
          />
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
          <Image
            src={reflectors}
            alt="Reflectors"
            width={image_width}
            height={image_height}
          />
          <h2>Reflectors</h2>
        </Link>
      </article>
      <article className="mounts">
        <Link href="/categories/mounts">
          <Image
            src={mounts}
            alt="Mounts"
            width={image_width}
            height={image_height}
          />
          <h2>Mounts</h2>
        </Link>
      </article>
    </section>
  );
};

export default CatMasonry;
