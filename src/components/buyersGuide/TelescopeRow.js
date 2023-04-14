import Image from "next/image";
import Styles from "../../styles/telescopeRow.module.css";

const telescopeRow = () => {
  return (
    <>
      <article className={Styles.container}>
        <div className={Styles.inner}>
          <Image
            src="/images/pageImages/telescopes-explanation-reflectors.jpg"
            alt="Sky-Watcher Reflectors"
            width="400"
            height="400"
          />
          <div className={Styles.text}>
            <p>
              <strong>ADVANTAGES</strong>
            </p>
            <ul>
              <li>Lowest cost per inch of aperture</li>
              <li>Simple design, easy to adjust and modify</li>
              <li>
                Viewing from top of tube allows short tripod (or none in case of
                Dobsonian)
              </li>
            </ul>

            <p>
              <strong>DISADVANTAGES</strong>
            </p>
            <ul>
              <li>Requires periodic adjustment (collimation)</li>
              <li>Open tube is prone to collect dust</li>
              <li>Usually biggest tube per unit of aperture.</li>
            </ul>
          </div>
        </div>
        <div className={Styles.inner}>
          <Image
            src="/images/pageImages/telescopes-explanation-refractors.jpg"
            alt="Sky-Watcher Reflectors"
            width="400"
            height="400"
          />
          <div className={Styles.text}>
            <p>
              <strong>ADVANTAGES</strong>
            </p>
            <ul>
              <li>Best performance per inch of aperture</li>
              <li>Rugged construction, sealed tube</li>
              <li>Usually no need for user adjustment</li>
              <li>Quick cooldown</li>
            </ul>

            <p>
              <strong>DISADVANTAGES</strong>
            </p>
            <ul>
              <li>Highest cost per inch of aperture</li>
              <li>Long tube with eyepiece at rear requires tall mount.</li>
            </ul>
          </div>
        </div>
        <div className={Styles.inner}>
          <Image
            src="/images/pageImages/telescopes-explanation-cassegrains.jpg"
            alt="Sky-Watcher Reflectors"
            width="400"
            height="400"
          />
          <div className={Styles.text}>
            <p>
              <strong>ADVANTAGES</strong>
            </p>
            <ul>
              <li>Most compact tube per inch of aperture</li>
              <li>Short tube is easy to mount</li>
              <li>Eyepiece height varies least</li>
              <li>Sealed tube</li>
            </ul>

            <p>
              <strong>DISADVANTAGES</strong>
            </p>
            <ul>
              <li>Fairly high cost per inch of aperture</li>
              <li>Requires periodic adjustment (collimation)</li>
              <li>Longest cooldown time of any design.</li>
            </ul>
          </div>
        </div>
      </article>
    </>
  );
};

export default telescopeRow;
