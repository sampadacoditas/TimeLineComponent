import TimelineComponent from "../TimelineComponent";
import classes from "./TimLine.module.scss";

const TimeLine = () => {
  return (
    <div className={classes.timelineWrapper}>
      <TimelineComponent />
    </div>
  );
};

export default TimeLine;
