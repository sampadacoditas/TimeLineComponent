import React from "react";
import classes from "./facingSeats.module.scss";

const FacingSeats = (props: any) => {
  const { item } = props;
  return (
    <div>
      <div className={classes.seatInfo}>
        <div className={classes.seatNo}>{item.id}</div>
        <div className={classes.employeeName}>{item.name}</div>
      </div>
      <div className={classes.seatInfo}>
        <div className={classes.employeeName}>{item.name}</div>
        <div className={classes.seatNo}>{item.id}</div>
      </div>
    </div>
  );
};

export default FacingSeats;
