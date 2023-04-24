import Layout from "@/components/templates/Layout";
import {
  NSWDealers,
  QLDDealers,
  VICDealers,
  WADealers,
  SADealers,
  NZDealers,
} from "../components/dealers/Dealers";
import Styles from "../styles/dealers.module.css";
import DealerCard from "@/components/dealers/DealerCard";

const FindDealer = () => {
  return (
    <Layout layout="boxed">
      <p>A list of our official sales partners accross the country.</p>
      <h2 className={Styles.heading}>NSW</h2>
      <section className={Styles.container}>
        {NSWDealers.map((store) => {
          return <DealerCard key={store.name} store={store} />;
        })}
      </section>
      <h2 className={Styles.heading}>Queensland</h2>
      <section className={Styles.container}>
        {QLDDealers.map((store) => {
          return <DealerCard key={store.name} store={store} />;
        })}
      </section>
      <h2 className={Styles.heading}>Victoria</h2>
      <section className={Styles.container}>
        {VICDealers.map((store) => {
          return <DealerCard key={store.name} store={store} />;
        })}
      </section>

      <h2 className={Styles.heading}>Victoria</h2>
      <section className={Styles.container}>
        {VICDealers.map((store) => {
          return <DealerCard key={store.name} store={store} />;
        })}
      </section>
      <h2 className={Styles.heading}>Western Australia</h2>
      <section className={Styles.container}>
        {WADealers.map((store) => {
          return <DealerCard key={store.name} store={store} />;
        })}
      </section>
      <h2 className={Styles.heading}>South Australia Australia</h2>
      <section className={Styles.container}>
        {SADealers.map((store) => {
          return <DealerCard key={store.name} store={store} />;
        })}
      </section>
      <h2 className={Styles.heading}>New Zealand</h2>
      <section className={Styles.container}>
        {NZDealers.map((store) => {
          return <DealerCard key={store.name} store={store} />;
        })}
      </section>
    </Layout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      title: "Find A Sky-Watcher Dealer",
    },
  };
}

export default FindDealer;
