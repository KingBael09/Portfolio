import React, { useState } from "react";
import styles from "../styles/About.module.css";
import { DocumentTitle } from "../hooks/docTitle";
import EasterEgg from "../components/easterEgg";
import axios from "axios";

// const url: string = "lol";
const url: string = "https://animechan.vercel.app/api/random";

const About = () => {
  DocumentTitle("About");
  const [dialog, Setdialog] = useState(false);
  const [loading, setloading] = useState(true);
  const [data, setData]: any = useState(null);

  const handleOnClose = () => {
    Setdialog(false);
  };
  const handleOnOpen = () => {
    Setdialog(true);
  };

  const fetch = async () => {
    setloading(true);

    try {
      const data = axios.get(url);
      const res = await data;
      setData(res.data);
      setloading(false);
    } catch (error) {
      console.log("failed");
      setloading(false);
    }
  };

  return (
    <div className={styles.container}>
      <EasterEgg
        loading={loading}
        data={data}
        action={handleOnClose}
        status={dialog}
      />
      <div className={styles.main}>
        <div className={styles.heading}>
          <span
            onClick={() => {
              handleOnOpen();
              fetch();
            }}
          >
            #About Me
          </span>
        </div>
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
