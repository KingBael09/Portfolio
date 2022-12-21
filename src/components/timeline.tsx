import React from "react";
import styles from "./styles/Timeline.module.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap, FaBirthdayCake, FaBuilding } from "react-icons/fa";

const contEdu = {
  background: "hsl(222, 12%, 20%)",
};
const contPresent = {
  background: "hsl(219, 70%, 49%)",
};
const arrPresentR = { borderRight: "7px solid  hsl(219, 70%, 49%)" };
const contZero = {
  background: "hsl(0, 66%, 47%)",
};
const arrZeroR = { borderRight: "7px solid  hsl(0, 66%, 47%)" };

const Timeline = () => {
  return (
    <>
      <VerticalTimeline className={styles.time}>
        <VerticalTimelineElement
          className={["vertical-timeline-element", styles.timelineNode].join(
            " "
          )}
          contentStyle={contZero}
          dateClassName={styles.date}
          contentArrowStyle={arrZeroR}
          date="9th Nov 2002"
          iconClassName={styles.zeroIcon}
          icon={<FaBirthdayCake />}
        >
          <h3 className="vertical-timeline-element-title">@Day Zero</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className={["vertical-timeline-element", styles.timelineNode].join(
            " "
          )}
          dateClassName={styles.date}
          contentStyle={contEdu}
          date="~ to 2018"
          iconClassName={styles.intIcon}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">
            Nashik Cambridge School
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Nashik, IN</h4>
          <p>Schooling till 10th</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className={["vertical-timeline-element", styles.timelineNode].join(
            " "
          )}
          dateClassName={styles.date}
          date="2018 to 2020"
          contentStyle={contEdu}
          iconClassName={styles.intIcon}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">
            Matoshri Jr College
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Nashik, IN</h4>
          <p>12th : Science Stream</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className={["vertical-timeline-element", styles.timelineNode].join(
            " "
          )}
          dateClassName={styles.date}
          contentStyle={contEdu}
          date="2020 to 2024"
          iconClassName={styles.intIcon}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">
            Government College of Engineering
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Aurangabad, IN</h4>
          <p>B.Tech : Computer Science Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className={["vertical-timeline-element", styles.timelineNode].join(
            " "
          )}
          contentStyle={contPresent}
          dateClassName={styles.date}
          date="Present"
          contentArrowStyle={arrPresentR}
          iconClassName={styles.finalIcon}
          icon={<FaBuilding />}
        >
          <h3 className="vertical-timeline-element-title">Next Big Thing</h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
};

export default Timeline;

// TODO: Make Timeline Data in /Data for easy Upgradation
// TODO: Solve Arrow Problem --generalize some stuff
