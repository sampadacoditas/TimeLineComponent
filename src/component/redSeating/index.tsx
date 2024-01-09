import React from "react";
import classes from "./redSeating.module.scss";

const RedSeating = (props: any) => {
  const { item } = props;
  return (
    <div className={classes.seatInfo}>
      <div className={classes.seatNo}>{item.id}</div>
      <div className={classes.employeeName}>{item.name}</div>
    </div>
  );
};

export default RedSeating;
