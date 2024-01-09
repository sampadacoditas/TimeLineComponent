import React from "react";
import TimelineComponent from "../timelineComponent";
import classes from "./timLineItems.module.scss";
const TimLineItems = () => {
    return (
    <div className={classes.timelineWrapper}>
      <TimelineComponent />
    </div>
  );
};

export default TimLineItems;
