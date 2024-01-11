// import React, { useEffect, useRef, useState } from "react";
// import "./App.css";
// import moment from "moment";
// import TimeLine from "./component/timeLine";
// import FloatingTags from "./component/floatingTags";
// import { VisTimeline } from "./component/visTimeline";
// import { TimelineOptions } from "vis-timeline";

// function App() {
//   const oneMonthInMillis = 1000 * 60 * 60 * 24 * 30;
//   console.log(oneMonthInMillis);
//   const oneYearInMillis = oneMonthInMillis * 12;
//   console.log(oneYearInMillis / 2);
//   const sixMonthsInMillis = oneMonthInMillis * 6;
//   // const [startEnd] = React.useState([
//   //   moment().subtract(1, "m").toDate(),
//   //   moment().toDate(),
//   // ]);
//   // const [startEnd, setStartEnd] = useState([
//   //   // moment().subtract(1, "months").startOf("month").toDate(),
//   //   moment().endOf("month").toDate(),
//   // ]);

//   const [startEnd, setStartEnd] = useState([
//     moment().startOf("month").toDate(),
//     moment().endOf("month").toDate(),
//   ]);

//   const [startDate] = React.useState([
//     moment().subtract(1, "m").toDate(),
//     moment().toDate(),
//   ]);

//   console.log(startEnd);

//   // const options: TimelineOptions = {
//   //   horizontalScroll: true,
//   //   zoomKey: "ctrlKey",
//   //   orientation: "bottom",
//   //   zoomMin: 1000 * 60 * 60 * 240,
//   //   timeAxis: { scale: "month", step: 5 },
//   //   // timeAxis: { scale: "minute"},
//   //   // timeAxis: { scale: "day" },
//   //   // editable: true,
//   //   editable: {
//   //     add: true, // add new items by double tapping
//   //     updateTime: true, // drag items horizontally
//   //     updateGroup: true, // drag items from one group to another
//   //     remove: true, // delete an item by tapping the delete button top right
//   //     overrideItems: false, // allow these options to override item.editable
//   //   },
//   //   // snap: customSnapFunction(),
//   // };

//   const timelineRef = useRef<any>(null);
//   const [options, setOptions] = useState<TimelineOptions>({
//     horizontalScroll: true,
//     start: Date.now() - oneYearInMillis / 2, // Centering on the current date minus half a year
//     end: Date.now() + oneYearInMillis / 2,
//     // use the new locale
//     locale: "mylocale",
//     zoomKey: "ctrlKey",
//     orientation: "bottom",
//     // zoomMin: 1000 * 60 * 60 * 240,
//     // zoomMin: 5,
//     zoomMin: oneYearInMillis,

//     timeAxis: { scale: "month" },
//     // timeAxis: { scale: "day" },
//     autoResize: true,
//     editable: {
//       add: true,
//       updateTime: true,
//       updateGroup: true,
//       remove: true,
//       overrideItems: false,
//     },
//   });
//   const customStyles = `
//     .vis-item {
//       border-color: #000000;
//       background-color: #ffffff;
//       border-radius: 50% !important;
//       // height:5rem !important;
//       // width:5rem;
//     }
//   `;
//   const handleZoomIn = () => {
//     const percentage = 0.1; // Adjust this value as needed
//     const animationOptions = {
//       duration: 500,
//       easingFunction: "easeInOutQuad",
//     };

//     // Call the zoomIn function on the timeline instance
//     timelineRef.current &&
//       timelineRef.current.zoomIn(percentage, animationOptions, () => {
//         console.log("Zoom in completed");
//         // Your callback logic here
//       });
//   };
//   const groups = [
//     {
//       id: 1,
//       content: "Group1",
//     },
//   ];
//   const handleZoomEvent = () => {
//     const newOptions: TimelineOptions = {
//       ...options,
//       timeAxis: { scale: "day" },
//     };
//     setOptions(newOptions);
//   };
//   useEffect(() => {
//     const customTimeline = document.querySelector(".vis-timeline");
//     customTimeline?.addEventListener("wheel", handleZoomEvent);
//     return () => {
//       customTimeline?.removeEventListener("wheel", handleZoomEvent);
//     };
//   }, [options]);

//   const items = [
//     {
//       id: 11,
//       group: 1,
//       start: startEnd[0],
//       end: startEnd[1],
//       content: "kjhkjhkjkjhkjhkjhkjh",
//       // className: `tl-item ${"items"}`,
//     },
//     // {
//     //   id: 12,
//     //   group: 1,
//     //   start: startDate[0],
//     //   end: startEnd[1],
//     //   content: "kjhkjhkjkjhkjhkjhkjh",
//     //   // className: `tl-item ${"items"}`,
//     // },
//   ];
//   return (
//     <div style={{ marginTop: "12rem", padding: "6rem", overflowY: "auto" }}>
//       {/* <TimeLine /> */}
//       {/* <FloatingTags direction="top" /> */}
//       {/* <VisTimeline /> */}
//       <style>{customStyles}</style>
//       <VisTimeline groups={groups} options={options} items={items} />
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import moment from "moment";
import TimeLine from "./component/timeLine";
import FloatingTags from "./component/floatingTags";
import { VisTimeline } from "./component/visTimeline";
import { TimelineOptions } from "vis-timeline";

function App() {
  const oneMonthInMillis = 1000 * 60 * 60 * 24 * 30;
  const oneYearInMillis = oneMonthInMillis * 12;

  const initialStartDate = Date.now() - oneYearInMillis;

  const [startEnd, setStartEnd] = useState([
    moment(initialStartDate).startOf("month").toDate(),
    moment(initialStartDate).endOf("month").toDate(),
  ]);

  // const [startEnd] = React.useState([
  //   moment().subtract(1, "m").toDate(),
  //   moment().toDate(),
  // ]);
  // const [startEnd, setStartEnd] = useState([
  //   // moment().subtract(1, "months").startOf("month").toDate(),
  //   moment().endOf("month").toDate(),
  // ]);

  // const [startEnd, setStartEnd] = useState([
  //   moment().startOf("month").toDate(),
  //   moment().endOf("month").toDate(),
  // ]);

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

  const timelineRef = useRef<any>(null);
  const [options, setOptions] = useState<TimelineOptions>({
    horizontalScroll: true,
    // start: Date.now() - oneYearInMillis / 2, // Centering on the current date minus half a year
    // end: Date.now() + oneYearInMillis / 2,
    // start: initialStartDate, // Initial start date set to one year ago
    // end: Date.now() + oneYearInMillis ,
    // use the new locale
    locale: "mylocale",
    zoomKey: "ctrlKey",
    orientation: "bottom",
    // zoomMin: 1000 * 60 * 60 * 240,
    // zoomMin: 5,
    zoomMin: oneMonthInMillis,

    // timeAxis: { scale: "month" },
    timeAxis: { scale: "day" },
    autoResize: true,
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
  const handleZoomIn = () => {
    const percentage = 0.1; // Adjust this value as needed
    const animationOptions = {
      duration: 500,
      easingFunction: "easeInOutQuad",
    };

    // Call the zoomIn function on the timeline instance
    timelineRef.current &&
      timelineRef.current.zoomIn(percentage, animationOptions, () => {
        console.log("Zoom in completed");
        // Your callback logic here
      });
  };
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
    // {
    //   id: 12,
    //   group: 1,
    //   start: startDate[0],
    //   end: startEnd[1],
    //   content: "kjhkjhkjkjhkjhkjhkjh",
    //   // className: `tl-item ${"items"}`,
    // },
  ];
  return (
    <div style={{ marginTop: "12rem", padding: "1rem", overflowY: "auto" }}>
      {/* <TimeLine /> */}
      {/* <FloatingTags direction="top" /> */}
      {/* <VisTimeline /> */}
      <style>{customStyles}</style>
      <VisTimeline groups={groups} options={options} items={items} />
    </div>
  );
}

export default App;
