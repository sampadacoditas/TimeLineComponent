import React from "react";
import classes from "./floatingTags.module.scss";
const FloatingTags = (props: any) => {
  const { direction } = props;
  return (
    <div
      className={
        direction === "top"
          ? classes.floatingContainer
          : `${classes.floatingContainer} ${classes.linedirectionbottom}`
      }
    >
      <div className={classes.floatingTags}>hello</div>
      <div className={classes.straightLine}></div>
    </div>
  );
};

export default FloatingTags;
