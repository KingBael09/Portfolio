import React from "react";
import styles from "../styles/About.module.css";
import { DocumentTitle } from "../hooks/docTitle";

const About = () => {
  DocumentTitle("About");
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.heading}>#About Me</div>
        <div className={styles.about}>
          <div className={styles.highlight}>
            Hello I'm <span className={styles.name}>Jayesh</span>
          </div>
          <div className={styles.content}>
            <span>
              I am an aspiring Full-Stack Developer from India Looking for
              Opportunities.
            </span>
            <span> I like Coding, Watching Anime & Playing Games</span>
            <br />
            <span>
              TypeScript is The Best....{" "}
              <span className={styles.subMsg}>The Autocomplete is Godsent</span>
            </span>
            <br />
            <span>My Favourite Framework : NextJS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
