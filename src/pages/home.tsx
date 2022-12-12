import React from "react";
import styles from "../styles/Home.module.css";
import { BsChevronDoubleDown } from "react-icons/bs";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
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
                <Typewriter
                  options={{
                    strings: [
                      "Student",
                      "Pro Coder!",
                      "Full-Stack Dev",
                      "Linux Enthusiast",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </span>
          </div>
          <span className={styles.arrow}>
            <BsChevronDoubleDown />
          </span>
        </div>
        <div className={styles.journey}>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
