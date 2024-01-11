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
import { v4 as uuidv4 } from "uuid";

function App() {
  const oneMonthInMillis = 1000 * 60 * 60 * 24 * 30;
  const oneYearInMillis = oneMonthInMillis * 12;

  const initialStartDate = Date.now() - oneYearInMillis;

  // const [startEnd, setStartEnd] = useState([
  //   moment(initialStartDate).startOf("month").toDate(),
  //   moment(initialStartDate).endOf("month").toDate(),
  // ]);

  const [startEnd] = React.useState([
    moment().subtract(10, "y").toDate(),
    moment().toDate(),
  ]);
  const [startEndM] = React.useState([
    moment().toDate(),
    moment().add(6, "month").toDate(),
  ]);

  console.log("startEndM", startEndM);

  // const options: TimelineOptions = {
  //   start: startEnd[0],
  //   end: startEnd[1],
  //   min: startEnd[0],
  //   max: startEnd[1],
  //   horizontalScroll: true,
  //   // zoomKey: "ctrlKey",
  //   orientation: "both",
  //   zoomMin: 1000 * 60 * 60 * 240,
  // };

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
  const items = [
    {
      id: 11,
      group: 1,
      start: startEnd[0],
      end: startEnd[1],
      content: "kjhkjhkjkjhkjhkjhkjh",
      // className: `tl-item ${"items"}`,
    },
    { id: 1, content: "Event 1", start: "2022-01-01", group: 1, subgroup: 1 },
    { id: 2, content: "Event 2", start: "2022-03-15", group: 1, subgroup: 2 },
    { id: 3, content: "Event 3", start: "2022-08-10", group: 2, subgroup: 1 },
    // ... add more events as needed
    // {
    //   id: 12,
    //   group: 1,
    //   start: startDate[0],
    //   end: startEnd[1],
    //   content: "kjhkjhkjkjhkjhkjhkjh",
    //   // className: `tl-item ${"items"}`,
    // },
  ];

  const [options, setOptions] = useState<TimelineOptions>({
    horizontalScroll: true,
    min: startEnd[0],
    max: startEnd[1],
    start: startEndM[0],
    end: startEndM[1],
    groupOrder: "subgroup", // Order groups by subgroup
    groupOrderSwap: (a: any, b: any, groups: any) => {
      console.log(">>", groups);
      return groups[b].order - groups[a].order;
    },
    // start: Date.now() - oneYearInMillis / 2, // Centering on the current date minus half a year
    // end: Date.now() + oneYearInMillis / 2,
    // start: initialStartDate, // Initial start date set to one year ago
    // end: Date.now() + oneYearInMillis ,
    // use the new locale
    locale: "mylocale",
    zoomKey: "ctrlKey",
    orientation: "bottom",
    onMove: () => {
      console.log("first");
    },
    // zoomMin: 1000 * 60 * 60 * 240,
    // zoomMin: 10,
    zoomMin: 31500000000,
    // zoomMin: oneMonthInMillis,

    // groupOrder: "byStartDate", // This is optional, but it helps to order groups by start date
    // groupOrderSwap: (a: any, b: any, groups: any) => {
    //   console.log("groups");
    //   return groups[b].order - groups[a].order;
    // },
    // group: {
    //   by: "6 months",
    //   data: {
    //     order: (a: any, b: any) => {
    //       return a.start - b.start;
    //     },
    //   },
    // },
    // groupTemplate: (a, b, data) => {
    //   console.log(data);
    //   console.log("hello", a, b);
    //   return "";
    onUpdate: (item) => {
      console.log(":: item", item);
    },
    onMoveGroup: (item) => {
      console.log(":: item", item);
    },
    // },
    timeAxis: { scale: "month" },
    // timeAxis: { scale: "day" },
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

  const [load, setLoad] = React.useState(true);

  React.useEffect(() => {
    let observer = new MutationObserver((mutations) => {
      const start = document.getElementsByClassName("vis-february");
      const end = document.getElementsByClassName("vis-june");
      Array.from(start).forEach((node: any, i) => {
        console.log(":: i", i);

        if (node) {
          node.classList.add("start");
        }
        console.log(node);
      });

      Array.from(end).forEach((node: any) => {
        if (node) {
          node.classList.add("end");
        }
        console.log(node);
      });
    });

    observer.observe(document.body, {
      characterDataOldValue: true,
      subtree: true,
      childList: true,
      characterData: true,
    });
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      const textNodes = document.getElementsByClassName("vis-text");
      Array.from(textNodes).forEach((node) => {
        node.setAttribute("key", uuidv4());
      });
      const start = document.getElementsByClassName("vis-february");
      const end = document.getElementsByClassName("vis-june");
      Array.from(start).forEach((node: any, i) => {
        console.log(":: i", i);

        if (node) {
          node.classList.add("start");
        }
        console.log(node);
      });

      Array.from(end).forEach((node: any) => {
        if (node) {
          node.classList.add("end");
        }
        console.log(node);
      });
    }, 2000);
  }, []);

  return (
    <div style={{ marginTop: "12rem", padding: "1rem", overflowY: "auto" }}>
      {/* <TimeLine /> */}
      {/* <FloatingTags direction="top" /> */}
      {/* <VisTimeline /> */}
      <style>{customStyles}</style>
      <VisTimeline
        onLoadComplete={() => {
          console.log("first");
          const nodes = document.getElementsByClassName("vis-june");
          console.log(":: nodes", nodes);
        }}
        groups={groups}
        options={options}
        items={items}
      />
    </div>
  );
}

export default App;
