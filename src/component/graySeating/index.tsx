import React from "react";
import classes from "./graySeating.module.scss";

const GraySeating = (props: any) => {
  const { item } = props;
  return (
    <div className={classes.seatInfo}>
      <div className={classes.employeeName}>{item.name}</div>
      <div className={classes.seatNo}>{item.id}</div>
    </div>
  );
};

export default GraySeating;
