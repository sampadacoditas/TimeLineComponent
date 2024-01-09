import React from "react";
import classes from "./mainSection.module.scss";
import { cabins, dataArray } from "./data";
import RedSeating from "../redSeating";
import GraySeating from "../graySeating";
const MainSection = () => {
  return (
    <div className={classes.container}>
      <div className={classes.cabinInfo}>
        {cabins.map((element) => {
          return <div className={classes.cabins}>{element.name}</div>;
        })}
      </div>
      <div className={classes.parentContainer}>
        {dataArray.map((seat: any, indes: number) => {
          return (
            <div className={classes.smallContainer}>
              {seat.map((element: any, idx: number) => {
                return (
                  <>
                    {indes === 0 ? (
                      <RedSeating item={element} />
                    ) : indes % 2 === 0 ? (
                      <RedSeating item={element} />
                    ) : (
                      <GraySeating item={element} />
                    )}
                  </>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainSection;
