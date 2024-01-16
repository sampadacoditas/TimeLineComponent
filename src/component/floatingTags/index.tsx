import { Fragment, useEffect, useRef, useState } from "react";
import classes from "./FloatingTags.module.scss";
import useWindowUtils from "../../hooks/useWindowUtils";
import { IFloatingTags } from "./IFloatingTags";
const FloatingTags = (props: IFloatingTags) => {
  const { direction, taskbar, zoomlevel, listElementWidth } = props;

  const tagRef = useRef<HTMLDivElement | null>(null);
  const { windowDimensions } = useWindowUtils();
  const [targetElementSize, setTargetElementSize] = useState<number>(80);

  const calculateWidth = () => {
    const element = tagRef.current;
    if (element) {
      const width = element.getBoundingClientRect().width;
      setTargetElementSize(width);
    }
  };

  useEffect(() => {
    calculateWidth();
  }, [
    zoomlevel,
    listElementWidth,
    windowDimensions.height,
    windowDimensions.width,
  ]);
  return (
    <Fragment>
      {Array.isArray(taskbar) &&
        taskbar?.map((item: any, index: number) => {
          return (
            <Fragment>
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
                    <Fragment>
                      <div className={classes.floatingTags}>{item.label}</div>
                      <div className={classes.straightLine}></div>
                    </Fragment>
                  ) : (
                    <Fragment>
                      <div className={classes.floatingTags}>{item.subtask}</div>
                      <div className={classes.straightLinesubtask}></div>
                    </Fragment>
                  )}
                </div>
              )}
            </Fragment>
          );
        })}
    </Fragment>
  );
};

export default FloatingTags;
