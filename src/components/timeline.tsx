import React from "react";
import styles from "./styles/Timeline.module.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { _defTimeLine as ittrData } from "../data/timelineData";

const Timeline = () => {
  return (
    <VerticalTimeline className={styles.time}>
      {ittrData.map((e) => {
        return (
          <VerticalTimelineElement
            key={e.id}
            className={["vertical-timeline-element", styles.timelineNode].join(
              " "
            )}
            dateClassName={styles.date}
            contentArrowStyle={e.contentArrowStyle}
            contentStyle={e.contentStyle}
            date={e.date}
            iconClassName={e.iconClassName}
            icon={e.icon}
          >
            <h3 className="vertical-timeline-element-title">{e.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{e.location}</h4>
            <p>{e.info}</p>
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
};

export default Timeline;

// TODO: Solve Arrow Problem --generalize some stuff
