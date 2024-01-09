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
    <section className="ps-timeline-sec">
      <div className="container">
        <ol className={`ps-timeline ${classes.timelines}`}>
          {timelineData.map((item, index) => (
            <li
              key={index}
              style={{ backgroundColor: item.color }}
              className={
                item.className.includes("top")
                  ? classes.list
                  : classes.reverseList
              }
            >
              <div
                className={
                  item.className.includes("top")
                    ? "img-handler-top"
                    : "img-handler-bot"
                }
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                
                }}
              >
                <FloatingTags direction={item.direction} />
              </div>
              <div
                className={item.className.includes("top") ? "ps-bot" : "ps-top"}
              >
                <p>{item.text}</p>
                <p>Duration:{item.duration}</p>
              </div>
              <span className={item.className}></span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default TimelineComponent;
