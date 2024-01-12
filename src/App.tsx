import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import moment from "moment";
import TimeLine from "./component/timeLine";
import FloatingTags from "./component/floatingTags";
import { VisTimeline } from "./component/visTimeline";
import { TimelineOptions } from "vis-timeline";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [startEnd] = React.useState([
    moment().subtract(10, "y").toDate(),
    moment().toDate(),
  ]);
  const [startEndM] = React.useState([
    moment().toDate(),
    moment().add(6, "month").toDate(),
  ]);

  const timelineRef = useRef<any>(null);
  const items = [
    {
      id: 11,
      group: 1,
      start: startEnd[0],
      end: startEnd[1],
      content: "kjhkjhkjkjhkjhkjhkjh",
      className: `tl-item ${"items"}`,
    },
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
    <div style={{ padding: "1rem", overflowY: "auto" }}>
      <TimeLine />
      {/* <FloatingTags direction="top" /> */}
      {/* <VisTimeline /> */}
      {/* <style>{customStyles}</style> */}
      {/* <VisTimeline
        onLoadComplete={() => {
          console.log("first");
          const nodes = document.getElementsByClassName("vis-june");
          console.log(":: nodes", nodes);
        }}
        groups={groups}
        options={options}
        items={items}
      /> */}
    </div>
  );
}

export default App;
