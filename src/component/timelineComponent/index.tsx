import { useEffect, useRef, useState } from "react";
import classes from "./timelineComponent.module.scss";
import FloatingTags from "../floatingTags";
import useWindowUtils from "../../hooks/useWindowUtils";
import DottedGraph from "../EchartsGraph";
import { dataSetXAxis, timelineData } from "./data";

const TimelineComponent = () => {
  const [taskItem, setTaskItem] = useState<number>(0);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const liRef = useRef<any | null>(null);
  const [listElementWidth, setListElementWidth] = useState<number>(0);
  const { windowDimensions } = useWindowUtils();

  const customWidth = `${
    zoomLevel === 1 ? "calc(100% - 6rem)" : `calc(${100 * zoomLevel}% - 6rem)`
  }`;

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

  const calculateWidth = () => {
    const liElement = liRef.current;
    if (liElement) {
      const width = liElement?.getBoundingClientRect()?.width;
      setListElementWidth(width);
    }
  };

  useEffect(() => {
    calculateWidth();
  }, [
    zoomLevel,
    windowDimensions.height,
    windowDimensions,
    windowDimensions.width,
  ]);

  return (
    <div>
      <div
        style={{
          width: customWidth,
        }}
        className={classes.stepGraph}
      >
        <DottedGraph
          dataSetXAxis={dataSetXAxis}
          datasetValue={[360, 400, 400, 500, 550, 600, 800]}
          lineType={"dashed"}
          id="2"
          seriesStep={"end"}
          listElementWidth={listElementWidth}
        />
      </div>
      <div style={{ width: customWidth }} className={classes.dottedGraph}>
        <DottedGraph
          dataSetXAxis={dataSetXAxis}
          datasetValue={[36, 40, 40, 50, 55, 60, 88]}
          lineType={"dashed"}
          id="1"
          listElementWidth={listElementWidth}
        />
      </div>
      <div className={classes.container}>
        <ol className={`${classes.timelineWrapper} ${classes.timelines}`}>
          {!!timelineData &&
            timelineData?.map((item, index) => (
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
                    listElementWidth={listElementWidth}
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
