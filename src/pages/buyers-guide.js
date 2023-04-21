import Styles from "../styles/buyersGuide.module.css";
import TelescopeRow from "../components/buyersGuide/TelescopeRow";
import Layout from "@/components/templates/Layout";
import FeaturedBulletGrid from "@/components/buyersGuide/FeaturedBulletGrid";
import Image from "next/image";
import Link from "next/link";

const buyersGuide = () => {
  return (
    <>
      <Layout layout="boxed">
        <section className={Styles.container}>
          <h2>Where to Start?</h2>
          <p>
            There’s no one “perfect” telescope — just as there’s no such thing
            as a perfect car or a perfect house. Instead, you should choose a
            telescope based on your observing interests, lifestyle, and budget.
            Many (arguably most) good starter scopes cost $400 or more, though
            some superb choices are available for under $250.
          </p>
          <p>
            Here is a guide to help you make sense of the world of telescope
            models available today. Armed with these few basics, you’ll have a
            good idea what to look for (and what to avoid) when scouring the
            marketplace for your new scope.
          </p>
          <p>
            There are two essentials to look out for: high-quality optics and a
            steady, smoothly working mount. And all other things being equal,
            big scopes show more and are easier to use than small ones, but
            don’t overlook portability and convenience — the best scope for you
            is the one you’ll actually use.
          </p>
          <h2>There Are Three Main Types Of Telescopes</h2>
          <p>
            Generally, telescopes fall into 3 different categories; Refractors,
            Reflectors and Compound telescopes. These three telescope types use
            different optics to achieve the same result: making distant objects
            look bigger and brighter than they appear to your eye.
          </p>
          <p>
            <strong>REFRACTORS</strong> have a lens at the front of the tube —
            it’s the type you’re probably most familiar with. While generally
            low maintenance, they quickly get expensive as the aperture
            increases.
          </p>
          <p>
            <strong>REFLECTORS</strong> gather light using a mirror at the rear
            of the main tube. For a given aperture, these are generally the
            least expensive type, but you’ll need to adjust the optical
            alignment every now and then.
          </p>
          <p>
            <strong>COMPOUND</strong> (or catadioptric) telescopes, which use a
            combination of lenses and mirrors, offer compact tubes and
            relatively light weight; two popular designs you’ll often see are
            called Schmidt-Cassegrains and Maksutov-Cassegrains.
          </p>
          <TelescopeRow />
        </section>
      </Layout>
      <Layout layout="full">
        <section className={Styles.fullContainer}>
          <Layout layout="boxed">
            <h2>Things To Consider When Buying A Telescope</h2>
            <FeaturedBulletGrid />
          </Layout>
        </section>
        <div className={Styles.fullWidthBtn}>
          <Link href="/telescope-finder">
            <h2>TRY OUR TELESCOPE FINDER</h2>
          </Link>
        </div>
      </Layout>
      <Layout layout="boxed">
        <h2>Aperture: A Telescopes Most Important Feature</h2>
        <Image
          src="/images/pageImages/aperture-image.jpg"
          alt="Telescope Aperture"
          width="220"
          height="219"
          style={{ float: "right", marginLeft: "25px" }}
        />
        <p>
          The most important characteristic of a telescope is its aperture — the
          diameter of its light-gathering lens or mirror, often called the
          objective. Look for the telescope’s specifications near its focuser,
          at the front of the tube, or on the box. The aperture’s diameter (D)
          will be expressed either in millimeters or, less commonly, in inches
          (1 inch equals 25.4 mm). As a rule of thumb, your telescope should
          have at least 2.8 inches (70 mm) aperture — and preferably more.
        </p>
        <p>
          A larger aperture lets you see fainter objects and finer detail than a
          smaller one can. But a good small scope can still show you plenty —
          especially if you live far from city lights. For example, from a dark
          location you can spot dozens of galaxies beyond our own Milky Way
          through a scope with an aperture of 80 mm (3.1 inches). But you’d
          probably need a 6- or 8-inch telescope to see those same galaxies from
          a typical suburban backyard. And regardless of how bright or dark your
          skies are, the view through a telescope with plenty of aperture is
          more impressive than the view of the same object through a smaller
          scope.
        </p>
        <h2>Mounts: Supporting Your Telescope</h2>
        <Image
          src="/images/pageImages/azmount.jpg"
          alt="Alt-Azimuth Mount"
          width="200"
          height="300"
          style={{ float: "right", marginLeft: "25px" }}
        />
        <p>
          Astronomers consider their telescope’s mount to be equally as
          important as the telescope/optical tube – and sometimes spend more
          money on the mount than what is sitting on top of it.
        </p>
        <p>A mount’s job is to:</p>
        <ul>
          <li>
            Keep the telescope from shaking – at high power, every little wobble
            or vibration is magnified so much that the whole image can become
            un-viewable.
          </li>
          <li>
            Allow the telescope to move extremely smoothly. Celestial objects
            don’t stand still for you to look at. Or, more precisely, they do
            stand still, but they appear to move across the sky as Earth rotates
            underneath you.
          </li>
        </ul>
        <Image
          src="/images/pageImages/sa-mount.jpg"
          alt="Alt-Azimuth Mount"
          width="200"
          height="240"
          style={{ float: "left", marginRight: "25px" }}
        />
        <p>
          Your telescope will need something sturdy to support it. Many
          telescopes come conveniently packaged with tripods or mounts (see our
          Telescope Kits). Be aware that a tripod that’s good enough for taking
          your family snapshots may not be steady enough for astronomy. Mounts
          designed specifically for telescopes usually forgo the single-screw
          attachment blocks in favour of larger, more robust rings or plates.
        </p>
        <p>
          On some mounts the scope swings left and right, up and down, just as
          it would on a photo tripod; these are known as altitude-azimuth (or
          simply alt-az) mounts. Many reflectors come on an elegantly simple
          wooden platform, known as a Dobsonian, that’s a variation of the
          alt-az mount. A more involved mechanism, designed to track the motion
          of the stars by turning on a single axis, is termed an equatorial
          mount. These tend to be larger and heavier than alt-az designs; to use
          an equatorial mount properly you’ll also need to align it to Polaris,
          the North Star.
        </p>
        <p>
          Some telescopes come with small motors to move them around the sky
          with the push of a keypad button. In the more advanced models of this
          type, often called “GO TO” telescopes, a small computer is built into
          the hand control. Once you’ve entered the current date, time, and your
          location (and many newer models don’t even require you to do that),
          the scope can point itself to, and track, thousands of celestial
          objects. Some “GO TO”s let you choose a guided tour of the best
          celestial showpieces, complete with a digital readout describing
          what’s known about each object.
        </p>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      title: "First Time Buyers Guide",
    },
  };
}

export default buyersGuide;
