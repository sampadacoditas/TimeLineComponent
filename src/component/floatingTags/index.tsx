import React, { useEffect, useRef, useState } from "react";
import classes from "./floatingTags.module.scss";
import useWindowUtils from "../../hooks/useWindowUtils";
const FloatingTags = (props: any) => {
  const {
    direction,
    taskbar,
    liRef,
    // taskItem,
    zoomlevel,
    listElementWidth,
    subtaskBar,
  } = props;
  const tagRef = useRef(null);
  const subTaskRef = useRef(null);
  const { windowDimensions } = useWindowUtils();
  console.log(tagRef);
  console.log(direction);
  const [targetElementSize, setTargetElementSize] = useState(80);
  const [subtargetElementSize, setSubTargetElementSize] = useState(64);

  const calculateWidth = (ref: any, setSize: any) => {
    const element = ref.current;
    if (element) {
      const width = element.getBoundingClientRect().width;
      setSize(width);
    }
  };

  useEffect(() => {
    calculateWidth(tagRef, setTargetElementSize);
    calculateWidth(subTaskRef, setSubTargetElementSize);
  }, [
    zoomlevel,
    listElementWidth,
    windowDimensions.height,
    windowDimensions.width,
  ]);
  return (
    <>
      {taskbar.map((item: any, index: any) => {
        console.log(item);
        return (
          <>
            {/* elementToShw < listElementWidth && */}
            {listElementWidth > targetElementSize * index && (
              <div
                ref={tagRef}
                className={
                  direction === "top"
                    ? `${classes.floatingContainer} ${classes.top} ${
                        item.subtask && classes.subTask
                      }`
                    : `${classes.floatingContainer} ${
                        classes.linedirectionbottom
                      } ${item.subtask && classes.bottomreverse}`
                }
              >
                {item.label ? (
                  <>
                    <div className={classes.floatingTags}>{item.label}</div>
                    <div className={classes.straightLine}></div>
                  </>
                ) : (
                  <>
                    <div className={classes.floatingTags}>{item.subtask}</div>
                    <div className={classes.straightLinesubtask}></div>
                  </>
                )}
              </div>
            )}
          </>
        );
      })}
    </>
  );
};

// import { useState } from "react";
// import classes from "./floatingTags.module.scss";

// const FloatingTags = (props: any) => {
//   const { direction, taskbar } = props;

//   const [visibleItems, setVisibleItems] = useState(1); // Initially show only 1 item

//   return (
//     <>
//       {taskbar.slice(0, visibleItems).map((item: any, index: number) => (
//         <div
//           key={index}
//           className={
//             direction === "top"
//               ? classes.floatingContainer
//               : `${classes.floatingContainer} ${classes.linedirectionbottom}`
//           }
//         >
//           <div className={classes.floatingTags}>{/* Your content here */}</div>
//           <div className={classes.straightLine}></div>
//         </div>
//       ))}
//       {taskbar.length > 1 && visibleItems < taskbar.length && (
//         <button onClick={() => setVisibleItems(visibleItems + 1)}>
//           Show More
//         </button>
//       )}
//     </>
//   );
// };
export default FloatingTags;
