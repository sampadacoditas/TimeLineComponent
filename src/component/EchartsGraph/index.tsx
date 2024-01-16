import * as echarts from "echarts";
import React, { useEffect, useState } from "react";
import classes from "./echartsGraph.module.scss";
const DottedGraph = (props: any) => {
  const {
    title = "",
    dataSetXAxis,
    datasetValue,
    lineType,
    id,
    seriesStep,
    listElementWidth,
  } = props;

  const [listWidth, setListWidth] = useState(listElementWidth);

  useEffect(() => {
    console.log("hello", listElementWidth);
    setListWidth(listElementWidth);
  }, [listElementWidth]);

  useEffect(() => {
    const dom = document.getElementById(`chart-container-${id}`);
    const myChart: any = echarts.init(dom, null, {
      renderer: "canvas",
      useDirtyRect: false,
    });

    const option = {
      title: {
        text: `${title}`,
      },
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },

      xAxis: {
        type: "category",
        boundaryGap: false,
        data: dataSetXAxis,
        axisLine: { show: false },
        axisLabel: {
          show: false,
        },
        show: false,
      },
      yAxis: {
        type: "value",
        axisLabel: {
          show: false,
        },
        splitLine: {
          show: false,
        },
      },
      series: [
        {
          name: "",
          type: "line",
          stack: "",
          step: seriesStep,
          data: datasetValue,
          lineStyle: {
            color: "black",
            width: 2,
            type: lineType,
          },

          itemStyle: {
            color: "transparent",
          },

          markPoint: {
            data: [
              {
                type: "max",
                name: "Max Value",
                symbol: "pin",

                label: {
                  color: "black",
                  fontSize: "1rem",
                  formatter: function (d: any) {
                    return `${d.data.value}$`;
                  },
                },
              },
              {
                type: "min",
                name: "Min Value",
                symbol: "pin",
                label: {
                  color: "black",
                  fontSize: "1rem",
                  formatter: function (d: any) {
                    return `${d.data.value}$`;
                  },
                },
              },
            ],
          },

          show: false,
        },
      ],
    };

    if (option && typeof option === "object") {
      myChart.setOption(option);
    }

    const resizeChart = () => {
      myChart.resize();
    };

    window.addEventListener("resize", resizeChart);

    return () => {
      myChart.dispose();
      window.removeEventListener("resize", resizeChart);
    };
  }, [id]);

  return (
    <div id={`chart-container-${id}`} className={classes.echartContainer} />
  );
};

export default DottedGraph;
