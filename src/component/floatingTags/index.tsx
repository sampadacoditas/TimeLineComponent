import React, { useEffect, useRef, useState } from "react";
import classes from "./floatingTags.module.scss";
const FloatingTags = (props: any) => {
  const {
    direction,
    taskbar,
    // taskItem,
    zoomlevel,
    listElementWidth,
    subtaskBar,
  } = props;
  const tagRef = useRef(null);
  const [targetElementSize, setTargetElementSize] = useState(80);

  const calculateWidth = () => {
    const tagElement = tagRef.current;
    if (tagElement) {
      // @ts-ignore
      const width = tagElement.getBoundingClientRect().width;
      setTargetElementSize(width);
      console.log("tagElement width:", width);
    }
  };

  console.log(listElementWidth);
  useEffect(() => {
    calculateWidth();
  }, [zoomlevel]);

  return (
    <>
      {taskbar.map((item: any, index: any) => {
        return (
          <>
            {/* elementToShw < listElementWidth && */}
            {listElementWidth > targetElementSize * index + 1 && (
              <div
                ref={tagRef}
                className={
                  direction === "top"
                    ? classes.floatingContainer
                    : `${classes.floatingContainer} ${classes.linedirectionbottom}`
                }
              >
                <div className={classes.floatingTags}>hello</div>
                <div className={classes.straightLine}></div>
              </div>
            )}
          </>
        );
      })}
      {subtaskBar.map((taskBarelement: any, index: any) => {
        return (
          <></>
        )
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
