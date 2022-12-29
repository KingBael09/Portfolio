import styles from "../styles/Home.module.css";
import Timeline from "../components/timeline";
import Typewriter from "../components/writterComponent";
import { FadingArrow } from "../components/fadingArrow";

const Home = () => {
  return (
    <div className={styles.container}>
      <div id="#top" className={styles.main}>
        <div className={styles.home}>
          <div className={styles.banner}>
            {"<"}Hello World{">"}
          </div>
          <div className={styles.info}>
            <div className={styles.altName}>
              <span className={styles.name}>Jayesh</span> <span>Here!</span>
            </div>
          </div>
          <div className={styles.desg}>
            <span>
              <span className={styles.initial}>I'm a </span>
              <span className={styles.altDesg}>
                <Typewriter />
              </span>
            </span>
          </div>
          <span className={styles.arrow}>
            <FadingArrow />
          </span>
        </div>
        <div className={styles.journey}>
          <div id="timeline" className={styles.heading}>
            #My Journey
          </div>
          <div className={styles.timeline}>
            <Timeline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

// TODO: ADD intrest Section
// TODO : Add Preloader