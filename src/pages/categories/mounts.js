import Head from "next/head";
import data from "/productData/products.json";
import ProductGrid from "../../components/products/productGrid/ProductGrid";
import Image from "next/image";
import Styles from "../../styles/categories.module.css";
import Layout from "@/components/templates/Layout";

const mounts = () => {
  const allMounts = data.products.filter((product) =>
    product.tags.includes("Mounts")
  );

  const azMounts = allMounts.filter((product) => product.tags.includes("AZ"));

  const eqMounts = allMounts.filter((product) => product.tags.includes("EQ"));

  const azEq = allMounts.filter((product) => product.tags.includes("AZEQ"));

  const starAdventurer = allMounts.filter((product) =>
    product.tags.includes("Star Adventurers")
  );

  return (
    <>
      <Head>
        <title>Sky-Watcher Australia Mounts</title>
        <meta
          name="description"
          content="Sky-Watcher Australia Mounts - Alt-Azimuth and Equatorial."
        />
      </Head>
      <Layout layout="boxed">
        <main className={Styles.main}>
          <div className={`${Styles.text} ${Styles.full}`}>
            <h2>Smooth, Sturdy and Unbreakable.</h2>
            <p>
              Telescope optics are glamorous and fun to talk about. But the hunk
              of metal or wood that supports the scope — the telescope mount— is
              every bit as important as the optical tube. In fact,
              astro-photographers sometimes spend considerably more money on
              their mounts than on their scopes.
            </p>
            <p>
              The first job of the mount is to keep the telescope from shaking,
              which is much harder than it sounds. At high power, every little
              wobble or vibration is magnified so much that the whole image
              becomes un-viewable. A mount also has to allow the telescope to
              move extremely smoothly. Celestial objects don’t stand still for
              you to look at. Or, more precisely, they do stand still, but they
              appear to move across the sky as Earth rotates underneath you. At
              200× it takes about a minute for an object to cross from one edge
              of the eyepiece to the other. To keep an object centered, you have
              to move the scope frequently and in very tiny increments.
            </p>
            <Image
              src="/images/pageImages/mount.jpg"
              alt="Reflectors"
              width="300"
              height="385"
              style={{ float: "right", margin: "20px" }}
            />
            <p>
              The very simplest kind of mount is the Dobsonian design. Dobsonian
              mounts do only the two tasks outlined above — keep the scope
              steady and let it move smoothly — and they do those two jobs
              extremely well, and at very low weight and cost. That makes them
              exceedingly popular for large reflectors, which would be
              impractical to mount any other way.
            </p>
            <p>
              The more complex mounts are split into 2 main groups – Equatorial
              mounts and Alt-Azimuth mounts (see more below). Many mounts have
              motor drives that track celestial objects automatically. This is
              essential for astrophotography and a great convenience for
              high-power planetary viewing. But deep-sky objects stay in view
              relatively long at the modest magnifications typically used to
              view them, so motor drive is less critical for deep-sky observing.
            </p>

            <p>
              <strong>Computerised Mounts</strong>
            </p>
            <p>
              Computerised mounts are practically in a class of their own,
              though they are actually variations of either an Alt-Az or
              Equatorial that is controlled by an in-built computer. All you
              have to do is find the object you’re after in the computerised
              controller and the powered mount will do the rest!
            </p>
            <p>
              A computerised telescope will swivel by itself to find the object
              you’re looking for and will keep it in your field of view, making
              it perfect for beginners who don’t know their way around the sky
              yet. Computerised equatorial mounts are able to smoothly track
              objects, so are ideal for taking longer exposures in
              astrophotography.
            </p>
          </div>

          <section className={Styles.productList}>
            {azEq.length > 0 && (
              <>
                <h2>AZEQ Mounts</h2>
                <p>
                  The innovative combination of both Altitude-Azimuth (AZ) and
                  Equatorial (EQ) capabilities. With an AZEQ mount, astronomers
                  no longer need to choose between the ease of use of an AZ
                  mount or the precision of an EQ mount, as they can have the
                  best of both worlds.
                </p>
                <ProductGrid products={azEq} />
              </>
            )}

            {eqMounts.length > 0 && (
              <>
                <h2>Equatorial Mounts</h2>
                <p>
                  An Equatorial mount moves the telescope in an arc, allowing
                  the user to track objects much more easily as they move across
                  the sky. This means you only have to adjust a single axis to
                  track the object to keep it in your field of view.
                </p>
                <ProductGrid products={eqMounts} />
              </>
            )}

            {azMounts.length > 0 && (
              <>
                <h2>Alt-Azimuth Mounts</h2>
                <p>
                  Alt-Azimuth, or Alt-Az, mounts are simple telescope mounts
                  that are quick to set up and easy to use. These telescopes
                  have two axes of movement: altitude (up/down), and azimuth
                  (left/right). As an object like the moon moves across the sky,
                  you will need to adjust both of these directions every now and
                  then to keep it in your view.
                </p>
                <ProductGrid products={azMounts} />
              </>
            )}

            {starAdventurer.length > 0 && (
              <>
                <h2>Star Adventurer Mounts</h2>
                <p>
                  Sky-Watcher Star Adventurer is a user friendly modular mount
                  designed for wide field astrophotography and time-lapse
                  photography. It is a precise, portable and stable celestial
                  tracking platform for sidereal, solar and lunar tracking with
                  automatic DSLR shutter release control (using snap shot cable
                  sold separately). Moreover, it comes pre-programmed with
                  parameters assisting you to create interesting stop motion and
                  time-lapse videos with your DSLR.
                </p>
                <ProductGrid products={starAdventurer} />
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
      title: "Sky-Watcher Mounts",
    },
  };
}

export default mounts;
