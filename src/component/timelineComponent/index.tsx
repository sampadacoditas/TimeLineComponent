import { useEffect, useRef, useState } from "react";
import classes from "./timelineComponent.module.scss";
import FloatingTags from "../floatingTags";
import useWindowUtils from "../../hooks/useWindowUtils";
import DottedGraph from "../dottedGraph";

const TimelineComponent = () => {
  const [taskItem, setTaskItem] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const liRef = useRef(null);
  const [listElement, setListElement] = useState();
  const { windowDimensions } = useWindowUtils();
  const handleZoomIn = () => {
    setZoomLevel(zoomLevel + 0.1);
    setTaskItem(taskItem + 1);
  };

  const handleZoomOut = () => {
    if (zoomLevel > 0.1) {
      setZoomLevel(zoomLevel - 0.1);
      taskItem > 0 && setTaskItem(taskItem - 1);
    }
  };
  console.log("ll", zoomLevel);

  useEffect(() => {
    calculateWidth();
  }, [
    zoomLevel,
    windowDimensions.height,
    windowDimensions,
    windowDimensions.width,
  ]);

  const timelineData = [
    {
      text: "Project 1",
      className: "ps-sp-top",
      spanText: "01",
      color: "gray",
      duration: "6 Months",
      direction: "top",
      taskbar: [
        { label: "project 1" },
        { subtask: "sub" },
        { label: "project 1" },
        { subtask: "sub" },
        { subtask: "sub" },
        { label: "project 1" },
        { label: "project 1" },
        { label: "project 1" },
        { label: "project 1" },
        { label: "project 1" },
        { label: "project 1" },
        { label: "project 1" },
        { label: "project 1" },
        { subtask: "subtask1" },
        { subtask: "subtask1" },
        { label: "project 1" },
        { label: "project 1" },
      ],
    },
    {
      text: "Project 2",
      className: "ps-sp-bot",
      spanText: "02",
      color: "black",
      duration: "6 Months",
      direction: "bot",
      taskbar: [
        { label: "project 1" },
        { label: "project 1" },
        { subtask: "sub" },
        { subtask: "sub" },
      ],
    },
    {
      text: "Project 3",
      className: "ps-sp-top",
      spanText: "03",
      color: "gray",
      duration: "6 Months",
      direction: "top",
      taskbar: [
        { label: "project 1" },
        { label: "project 1" },
        { label: "project 1" },
        { label: "project 1" },
        { label: "project 1" },
        { label: "project 1" },
        { label: "project 1" },
      ],
      subtaskBar: [
        { label: "project 1" },
        { label: "project 1" },
        { label: "project 1" },
      ],
    },
  ];

  const calculateWidth = () => {
    const liElement = liRef.current;
    if (liElement) {
      // @ts-ignore
      const width = liElement.getBoundingClientRect().width;
      console.log("Width:", width);
      setListElement(width);
    }
  };
  console.log(">>>>", zoomLevel === 1);

  return (
    <div>
      <div
        style={{
          width: `${
            zoomLevel === 1
              ? "calc(100% - 6rem)"
              : `calc(${100 * zoomLevel}% - 6rem)`
          }`,
          position: "absolute",
          top: "1rem",
        }}
      >
        <DottedGraph
          dataSetXAxis={["jan", "june", "jan", "june", "jan", "june", "jan"]}
          datasetValue={[360, 400, 400, 500, 550, 600, 800]}
          lineType={"dashed"}
          id="uniqueId2"
          seriesStep={"end"}
          listElementWidth={listElement}
        />
      </div>
      <div
        style={{
          width: `${
            zoomLevel === 1
              ? "calc(100% - 6rem)"
              : `calc(${100 * zoomLevel}% - 6rem)`
          }`,
          position: "absolute",
          top: "5rem",
        }}
      >
        <DottedGraph
          dataSetXAxis={["jan", "june", "jan", "june", "jan", "june", "jan"]}
          datasetValue={[36, 40, 40, 50, 55, 60, 88]}
          lineType={"dashed"}
          id="uniqueId1"
          listElementWidth={listElement}
        />
      </div>
      <div className={classes.container}>
        <ol className={`${classes.timelineWrapper} ${classes.timelines}`}>
          {timelineData.map((item, index) => (
            <li
              key={index}
              ref={liRef}
              style={{
                backgroundColor: item.color,

                minWidth: `${
                  (zoomLevel === 1 ? zoomLevel : 100 * zoomLevel) /
                  timelineData.length
                }%`,
              }}
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
                <FloatingTags
                  direction={item.direction}
                  taskbar={item.taskbar}
                  zoomlevel={zoomLevel}
                  liRef={liRef}
                  listElementWidth={listElement}
                  subtaskBar={item.subtaskBar}
                />
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
      <button onClick={handleZoomIn}>Zoom In</button>
      <button onClick={handleZoomOut}>Zoom Out</button>
    </div>
  );
};

export default TimelineComponent;

// import React, { useState } from "react";
// import classes from "./timelineComponent.module.scss";
// import FloatingTags from "../floatingTags";

// const TimelineComponent = () => {
//   const [zoomLevels, setZoomLevels] = useState(new Array(14).fill(1)); // Assuming there are 14 items in timelineData
//   const [elementToZoom, setElementToZoom] = useState();
//   const [panX, setPanX] = useState(0);
//   console.log(elementToZoom);

//   const handleZoomIn = (index: any) => {
//     const newZoomLevels = [...zoomLevels];
//     newZoomLevels[index] += 0.1;
//     setZoomLevels(newZoomLevels);
//   };
//   // const handleWheel = (event: any) => {
//   //   // Zoom in/out on wheel
//   //   const scaleFactor = event.deltaY > 0 ? 1.1 : 0.9;
//   //   setZoomLevels((prevZoomLevels) =>
//   //     prevZoomLevels.map((zoomLevel) => zoomLevel * scaleFactor)
//   //   );
//   // };
//   const handleWheel = (event: any) => {
//     // Zoom in/out on wheel for the specific element
//     if (elementToZoom !== null) {
//       const scaleFactor = event.deltaY > 0 ? 1.1 : 0.9;
//       setZoomLevels((prevZoomLevels) =>
//         prevZoomLevels.map((zoomLevel, index) =>
//           index === elementToZoom ? zoomLevel * scaleFactor : zoomLevel
//         )
//       );
//     }
//   };

//   const handleZoomOut = (index: any) => {
//     const newZoomLevels = [...zoomLevels];
//     if (newZoomLevels[index] > 0.1) {
//       newZoomLevels[index] -= 0.1;
//       setZoomLevels(newZoomLevels);
//     }
//   };

//   const timelineData = [
//     {
//       text: "Project 1",
//       className: "ps-sp-top",
//       spanText: "01",
//       color: "gray",
//       duration: "6 Months",
//       direction: "top",
//     },
//     {
//       text: "Project 2",
//       className: "ps-sp-bot",
//       spanText: "02",
//       color: "black",
//       duration: "6 Months",
//       direction: "bot",
//     },
//     {
//       text: "Project 3",
//       className: "ps-sp-top",
//       spanText: "03",
//       color: "gray",
//       duration: "6 Months",
//       direction: "top",
//     },
//     {
//       text: "Project 4",
//       className: "ps-sp-bot",
//       spanText: "04",
//       color: "black",
//       duration: "6 Months",
//       direction: "bot",
//     },
//     {
//       text: "Bench",
//       className: "ps-sp-top",
//       spanText: "04",
//       color: "gray",
//       duration: "20 Days",
//       direction: "top",
//     },
//     {
//       text: "Project 5",
//       className: "ps-sp-bot",
//       spanText: "04",
//       color: "black",
//       duration: "6 Months",
//       direction: "bot",
//     },
//     {
//       text: "Bench",
//       className: "ps-sp-top",
//       spanText: "04",
//       color: "gray",
//       duration: "20 Days",
//       direction: "top",
//     },
//     {
//       text: "Project 5",
//       className: "ps-sp-bot",
//       spanText: "04",
//       color: "black",
//       duration: "6 Months",
//       direction: "bot",
//     },
//     {
//       text: "Bench",
//       className: "ps-sp-top",
//       spanText: "04",
//       color: "gray",
//       duration: "20 Days",
//       direction: "top",
//     },
//     {
//       text: "Project 5",
//       className: "ps-sp-bot",
//       spanText: "04",
//       color: "black",
//       duration: "6 Months",
//       direction: "bot",
//     },
//     {
//       text: "Bench",
//       className: "ps-sp-top",
//       spanText: "04",
//       color: "gray",
//       duration: "20 Days",
//       direction: "top",
//     },
//     {
//       text: "Project 5",
//       className: "ps-sp-bot",
//       spanText: "04",
//       color: "black",
//       duration: "6 Months",
//       direction: "bot",
//     },
//     {
//       text: "Bench",
//       className: "ps-sp-top",
//       spanText: "04",
//       color: "gray",
//       duration: "20 Days",
//       direction: "top",
//     },
//     {
//       text: "Project 5",
//       className: "ps-sp-bot",
//       spanText: "04",
//       color: "black",
//       duration: "6 Months",
//       direction: "bot",
//     },
//   ];
//   const handleMouseEnter = (index: any) => {
//     setElementToZoom(index);
//   };

//   return (
//     <div>
//       <div className={classes.container}>
//         <ol className={`${classes.timelineWrapper} ${classes.timelines}`}>
//           {timelineData.map((item, index) => (
//             <li
//               key={index}
//               onWheel={(event) => handleWheel(event)}
//               onMouseEnter={() => handleMouseEnter(index)}
//               style={{
//                 backgroundColor: item.color,
//                 transform: `scaleX(${zoomLevels[index]})`,
//               }}
//               className={
//                 item.className.includes("top")
//                   ? `${classes.listItems} ${classes.list}`
//                   : `${classes.listItems} ${classes.reverseList} `
//               }
//             >
//               <div
//                 className={
//                   item.className.includes("top")
//                     ? classes.itemPlacedtop
//                     : classes.itemPlacedbot
//                 }
//               >
//                 <FloatingTags direction={item.direction} />
//               </div>
//               <div
//                 className={
//                   item.className.includes("top")
//                     ? classes.textBottomPlaced
//                     : classes.textTopPlaced
//                 }
//               >
//                 <p>{item.text}</p>
//                 <p>Duration:{item.duration}</p>
//               </div>
//               <span className={item.className}></span>
//             </li>
//           ))}
//         </ol>
//       </div>
//       <div>
//         <button onClick={() => handleZoomIn(elementToZoom)}>Zoom In</button>
//         <button onClick={() => handleZoomOut(elementToZoom)}>Zoom Out</button>
//       </div>
//     </div>
//   );
// };

// export default TimelineComponent;
