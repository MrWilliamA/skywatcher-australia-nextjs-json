import Head from "next/head";
import data from "/productData/products.json";
import ProductGrid from "../../components/products/productGrid/ProductGrid";
import Image from "next/image";
import Styles from "../../styles/categories.module.css";
import Layout from "@/components/templates/Layout";

const dobsonians = () => {
  const tableTopDobs = data.products.filter((product) =>
    product.tags.includes("Tabletop Dobsonians")
  );

  const classicDobs = data.products.filter((product) =>
    product.tags.includes("Classic Dobsonians")
  );

  const collapsibleDobs = data.products.filter((product) =>
    product.tags.includes("Collapsible Dobsonians")
  );

  const starGateDobs = data.products.filter((product) =>
    product.tags.includes("Stargate Dobsonians")
  );

  return (
    <>
      <Head>
        <title>Sky-Watcher Australia Dobsonians</title>
        <meta
          name="description"
          content="Sky-Watcher Australia Dobsonians - Astronomy telescopes, binoculars and spotting scopes."
        />
      </Head>
      <Layout layout="boxed">
        <main className={Styles.main}>
          <section className={Styles.top}>
            <div className={Styles.text}>
              <h2>The Ultimate In Light Gathering</h2>
              <p>
                A Dobsonian telescope is an altazimuth-mounted Newtonian
                telescope design popularised by John Dobson starting in the
                1960s and credited with vastly increasing the size of telescopes
                available to amateur astronomers. The design is optimised for
                visually observing faint, deep-sky objects such as nebulae and
                galaxies.
              </p>
              <p>
                Dobsonian telescopes are incredibly good light gatherers and are
                great for amateurs and professional astronomers alike. They are
                also very economical compared to other telescopes. The optical
                part of the telescope or OTA (Optical Tube Assembly) is the same
                as a Newtonian reflector telescope.
              </p>
              <p>
                From its inception, telescope makers have been modifying the
                Dobsonian design to fit their needs. The original design fit the
                needs and available supplies of one person—John Dobson. Other
                people devised variants that fit their own needs, abilities, and
                access to parts. This has led to significant diversity in
                “Dobsonian” design.
              </p>
            </div>
            <div className={Styles.image}>
              <Image
                src="/images/pageImages/early-dobsonian.jpg"
                alt="Reflectors"
                width="288"
                height="228"
              />
            </div>
          </section>
          <section className={Styles.productList}>
            {collapsibleDobs.length > 0 && (
              <>
                <h2>Collapsible Dobsonians</h2>
                <p>
                  “Classic” design tube assemblies require a large van for
                  transport. Designers started coming up with disassembleable or
                  collapsible variations that could be brought to a site in a
                  small SUV, hatchback, or even a sedan. This innovation allowed
                  the amateur astronomy community access to even larger
                  apertures.
                </p>
                <ProductGrid products={collapsibleDobs} />
              </>
            )}

            {classicDobs.length > 0 && (
              <>
                <h2>Classic Dobsonians</h2>
                <p>
                  As it says, the tube is solid therefore making it robust and
                  strong with no assembly time – ready to go!
                </p>
                <ProductGrid products={classicDobs} />
              </>
            )}

            {tableTopDobs.length > 0 && (
              <>
                <h2>Tabletop Dobsonians</h2>
                <p>
                  A TableTop Dobsonian is just that – the perfect size to fit on
                  your table! It is large enough to view night sky objects such
                  as the Moon, planets, and bright nebulas and star clusters,
                  yet compact enough to sit on a desk or store in your cupboard.
                </p>
                <ProductGrid products={tableTopDobs} />
              </>
            )}

            {starGateDobs.length > 0 && (
              <>
                <h2>Stargate Dobsonians</h2>
                <p>
                  Sky-Watcher StarGate Dobsonians with their huge light
                  gathering capabilities provide the ultimate WOW factor
                  experience for aficionados of visual astronomy.
                </p>
                <ProductGrid products={starGateDobs} />
              </>
            )}
          </section>
        </main>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      title: "Sky-Watcher Dobsonians",
    },
  };
}

export default dobsonians;
