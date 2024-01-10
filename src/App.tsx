import React, { useEffect, useState } from "react";
import "./App.css";
import moment from "moment";
import TimeLine from "./component/timeLine";
import FloatingTags from "./component/floatingTags";
import { VisTimeline } from "./component/visTimeline";
import { TimelineOptions } from "vis-timeline";

function App() {
  const [startEnd] = React.useState([
    moment().subtract(1, "d").toDate(),
    moment().toDate(),
  ]);

  // const options: TimelineOptions = {
  //   horizontalScroll: true,
  //   zoomKey: "ctrlKey",
  //   orientation: "bottom",
  //   zoomMin: 1000 * 60 * 60 * 240,
  //   timeAxis: { scale: "month", step: 5 },
  //   // timeAxis: { scale: "minute"},
  //   // timeAxis: { scale: "day" },
  //   // editable: true,
  //   editable: {
  //     add: true, // add new items by double tapping
  //     updateTime: true, // drag items horizontally
  //     updateGroup: true, // drag items from one group to another
  //     remove: true, // delete an item by tapping the delete button top right
  //     overrideItems: false, // allow these options to override item.editable
  //   },
  //   // snap: customSnapFunction(),
  // };

  const [options, setOptions] = useState<TimelineOptions>({
    horizontalScroll: true,
    zoomKey: "ctrlKey",
    orientation: "bottom",
    zoomMin: 1000 * 60 * 60 * 240,
    timeAxis: { scale: "month", step: 5 },
    editable: {
      add: true,
      updateTime: true,
      updateGroup: true,
      remove: true,
      overrideItems: false,
    },
  });
  const customStyles = `
    .vis-item {
      border-color: #000000;
      background-color: #ffffff;
      border-radius: 50% !important;
      // height:5rem !important;
      // width:5rem;
    }
  `;

  const groups = [
    {
      id: 1,
      content: "Group1",
    },
  ];
  const handleZoomEvent = () => {
    const newOptions: TimelineOptions = {
      ...options,
      timeAxis: { scale: "day" },
    };
    setOptions(newOptions);
  };
  useEffect(() => {
    const customTimeline = document.querySelector(".vis-timeline");
    customTimeline?.addEventListener("wheel", handleZoomEvent);
    return () => {
      customTimeline?.removeEventListener("wheel", handleZoomEvent);
    };
  }, [options]);

  const items = [
    {
      id: 11,
      group: 1,
      start: startEnd[0],
      end: startEnd[1],
      content: "kjhkjhkjkjhkjhkjhkjh",
      // className: `tl-item ${"items"}`,
    },
  ];
  return (
    <div style={{ marginTop: "12rem", padding: "6rem", overflowY: "auto" }}>
      {/* <TimeLine /> */}
      {/* <FloatingTags direction="top" /> */}
      {/* <VisTimeline /> */}
      <style>{customStyles}</style>
      <VisTimeline groups={groups} options={options} items={items} />
    </div>
  );
}

export default App;
