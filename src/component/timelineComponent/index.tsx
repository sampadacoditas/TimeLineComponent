

import React from "react";
import classes from "./timelineComponent.module.scss";
import FloatingTags from "../floatingTags";

const TimelineComponent = () => {
  const timelineData = [
    {
      text: "Project 1",
      className: "ps-sp-top",
      spanText: "01",
      color: "gray",
      duration: "6 Months",
      direction: "top",
    },
    {
      text: "Project 2",
      className: "ps-sp-bot",
      spanText: "02",
      color: "black",
      duration: "6 Months",
      direction: "bot",
    },
    {
      text: "Project 3",
      className: "ps-sp-top",
      spanText: "03",
      color: "gray",
      duration: "6 Months",
      direction: "top",
    },
    {
      text: "Project 4",
      className: "ps-sp-bot",
      spanText: "04",
      color: "black",
      duration: "6 Months",
      direction: "bot",
    },
    {
      text: "Bench",
      className: "ps-sp-top",
      spanText: "04",
      color: "gray",
      duration: "20 Days",
      direction: "top",
    },
    {
      text: "Project 5",
      className: "ps-sp-bot",
      spanText: "04",
      color: "black",
      duration: "6 Months",
      direction: "bot",
    },
    {
      text: "Bench",
      className: "ps-sp-top",
      spanText: "04",
      color: "gray",
      duration: "20 Days",
      direction: "top",
    },
    {
      text: "Project 5",
      className: "ps-sp-bot",
      spanText: "04",
      color: "black",
      duration: "6 Months",
      direction: "bot",
    },
    {
      text: "Bench",
      className: "ps-sp-top",
      spanText: "04",
      color: "gray",
      duration: "20 Days",
      direction: "top",
    },
    {
      text: "Project 5",
      className: "ps-sp-bot",
      spanText: "04",
      color: "black",
      duration: "6 Months",
      direction: "bot",
    },
  ];

  return (
    <div>
      <div className={classes.container}>
        <ol className={`${classes.timelineWrapper} ${classes.timelines}`}>
          {timelineData.map((item, index) => (
            <li
              key={index}
              style={{ backgroundColor: item.color }}
              className={
                item.className.includes("top")
                  ? `${classes.listItems} ${classes.list}`
                  : `${classes.listItems} ${classes.reverseList} `
              }
            >
              <div
                className={
                  item.className.includes("top")
                    ? classes.itemPlacedtop
                    : classes.itemPlacedbot
                }
              >
                <FloatingTags direction={item.direction} />
              </div>
              <div
                className={
                  item.className.includes("top")
                    ? classes.textBottomPlaced
                    : classes.textTopPlaced
                }
              >
                <p>{item.text}</p>
                <p>Duration:{item.duration}</p>
              </div>
              <span className={item.className}></span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default TimelineComponent;
