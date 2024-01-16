import classes from "./timLineItems.module.scss";
import TimelineComponent from "../timelineComponent";

const TimeLine = () => {
  return (
    <div className={classes.timelineWrapper}>
      <TimelineComponent />
    </div>
  );
};

export default TimeLine;
