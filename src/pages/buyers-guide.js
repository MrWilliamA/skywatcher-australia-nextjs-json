import Styles from "../styles/buyersGuide.module.css";
import TelescopeRow from "../components/buyersGuide/TelescopeRow";
import Layout from "@/components/templates/Layout";

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
          <h2>There Are Three main Types Of Telescopes</h2>
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
          </Layout>
        </section>
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
