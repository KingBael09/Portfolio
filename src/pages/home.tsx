import React from "react";
import styles from "../styles/Home.module.css";
import { BsChevronDoubleDown } from "react-icons/bs";
import { FaGraduationCap, FaBirthdayCake, FaBuilding } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const contEdu = {
  background: "hsl(222, 12%, 20%)", // color: "#fff",
};
const contPresent = {
  background: "hsl(219, 70%, 49%)", // color: "hsl(0, 0%, 100%)",
};
const arrPresentR = { borderRight: "7px solid  hsl(219, 70%, 49%)" };
const contZero = {
  background: "hsl(0, 66%, 47%)", // color: "hsl(0, 0%, 100%)",
};
const arrZeroR = { borderRight: "7px solid  hsl(0, 66%, 47%)" };

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
          <div id="timeline" className={styles.heading}>
            #My Journey
          </div>
          <div className={styles.timeline}>
            <VerticalTimeline className={styles.time}>
              <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={contZero}
                contentArrowStyle={arrZeroR}
                date="9th Nov 2002"
                iconClassName={styles.altIcon}
                icon={<FaBirthdayCake />}
                dateClassName={styles.date}
              >
                <h3 className="vertical-timeline-element-title">@Day Zero</h3>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={contEdu}
                date="~ to 2018"
                iconClassName={styles.intIcon}
                icon={<FaGraduationCap />}
                dateClassName={styles.date}
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
                className={"vertical-timeline-element-lmao"}
                date="2018 to 2020"
                contentStyle={contEdu}
                iconClassName={styles.intIcon}
                icon={<FaGraduationCap />}
                dateClassName={styles.date}
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
                iconClassName={styles.intIcon}
                icon={<FaGraduationCap />}
                dateClassName={styles.date}
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
                contentArrowStyle={arrPresentR}
                iconClassName={styles.finalIcon}
                icon={<FaBuilding />}
                dateClassName={styles.date}
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


// TODO: ADD intrest Section