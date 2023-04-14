import Styles from "../../styles/buyersGuide.module.css";
import FeaturedBullet from "./FeaturedBullet";

const FeaturedBulletGrid = () => {
  const bullets = [
    {
      title: "Telescope, Dobsonian, OTA - Which is Which?",
      content:
        '<p>Too much choice? Confused by the terminology? Take a look at our <a href="/glossary">Glossary</a> page and <a href="/faq">FAQ</a> page to understand more about the technology and terminology used in the world of telescopes and the night sky.</p>',
    },
    {
      title: "What Do You Want To Do With Your Telescope?",
      content:
        '<p>If transporting your telescope to different sites is an important criteria for you take a look at our range of <a href="/categories/dobsonians">collapsible telescopes</a> – designed to be portable and simple to put together.</p>',
    },
    {
      title: "What Do You Want To See?",
      content:
        "<p>Cheaper models will give you a close range and are suitable for looking at the moon whereas costlier models allow you to see further into space. If you want to do astrophotography, it’s much easier to learn on a small scope than a big one.</p>",
    },
    {
      title: "What Is Your Budget?",
      content:
        "<p>Telescopes vary greatly in price – starting from around $150 up to many thousands – so it’s a good idea to set your budget at the beginning. Make sure you have a look at the advantages and disadvantages of the the various telescope types above.</p>",
    },
    {
      title: "Space, Where To Put It?",
      content:
        "<p>Where is your telescope going to live? The common thought is that a telescope will take up a lot of room and some can, but they can also be small and compact. We have a wide range of sizes from the neatly sized TableTop Dobsonians right up to the giant light bucket 20″ Stargate Dobsonian that stands at just over 2 metres.</p>",
    },
    {
      title: "Will I Need A Mount For My Telescope?",
      content:
        "<p>It depends on what type of telescope you buy – the TELESCOPE KITS include the mount. The Dobsonian telescopes don’t need a mount whereas the OTAs are just tubes and definitely need a mount. Read more about mounts further down the page.</p>",
    },
  ];
  return (
    <section className={Styles.featuredBullets}>
      {bullets.map((item, key) => {
        return (
          <FeaturedBullet key={key} title={item.title} content={item.content} />
        );
      })}
    </section>
  );
};

export default FeaturedBulletGrid;
