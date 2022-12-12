import React from "react";
import styles from "../styles/Home.module.css";
import { BsChevronDoubleDown } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const icoStyle = {
  background: "hsl(0, 0%, 100%)",
  color: "#fff",
  outline: " 2px solid black",
};
const contEdu = {
  background: "hsl(0, 0%, 15%)",
  color: "#fff",
};
const contPresent = {
  background: "hsl(219, 70%, 49%)",
  color: "hsl(0, 0%, 100%)",
};
const contZero = {
  background: "hsl(0, 65%, 51%)",
  color: "hsl(0, 0%, 100%)",
};

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
          <div className={styles.heading}>My Journey</div>

          <div className={styles.timeline}>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={contZero}
                // contentArrowStyle={{
                //   borderRight: "7px solid  rgb(33, 150, 243)",
                // }}
                date="9th Nov 2002"
                iconStyle={icoStyle}
              >
                <h3 className="vertical-timeline-element-title">
                  @Day Zero
                </h3>
                {/* <h4 className="vertical-timeline-element-subtitle">
                  Nashik, IN
                </h4>
                <p>Schooling till 10th</p> */}
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={contEdu}
                // contentArrowStyle={{
                //   borderRight: "7px solid  rgb(33, 150, 243)",
                // }}
                date="~ to 2018"
                iconStyle={icoStyle}
              >
                <h3 className="vertical-timeline-element-title">
                  Nashik Cambridge School
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Nashik, IN
                </h4>
                <p>Schooling till 10th</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element"
                date="2018 to 2020"
                contentStyle={contEdu}
                iconStyle={icoStyle}
              >
                <h3 className="vertical-timeline-element-title">
                  Matoshri Jr College
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Nashik, IN
                </h4>
                <p>12th : Science Stream</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={contEdu}
                date="2020 to 2024"
                iconStyle={icoStyle}
              >
                <h3 className="vertical-timeline-element-title">
                  Government College of Engineering
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Aurangabad, IN
                </h4>
                <p>B.Tech : Computer Science Engineering</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={contPresent}
                date="Present"
                iconStyle={icoStyle}
              >
                <h3 className="vertical-timeline-element-title">
                  Next Big Thing
                </h3>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
