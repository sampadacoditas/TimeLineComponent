// import * as echarts from "echarts";
// import React, { useEffect } from "react";

// const DottedGraph = (props: any) => {
//   const { title } = props;
//   useEffect(() => {
//     const dom = document.getElementById("chart-container");
//     const myChart: any = echarts.init(dom, null, {
//       renderer: "canvas",
//       useDirtyRect: false,
//     });

//     const option = {
//       darkMode: "auto",
//       // title: {
//       //   text: "Stacked Line",
//       // },

//       tooltip: {
//         trigger: "axis",
//       },
//       legend: {
//         data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
//       },
//       grid: {
//         left: "3%",
//         right: "4%",
//         bottom: "3%",
//         containLabel: true,
//         backgroundColor: "red",
//         // show: false,
//       },
//       //   toolbox: {
//       //     feature: {
//       //       saveAsImage: {},
//       //     },
//       //   },
//       xAxis: {
//         type: "category",
//         boundaryGap: false,
//         data: ["jan", "june", "jan", "june", "jan", "june", "jan"],
//         axisLine: { show: false },
//         axisLabel: {
//           show: false,
//         },
//         show: false,
//       },
//       yAxis: {
//         type: "value",
//         axisLabel: {
//           show: false,
//         },
//         splitLine: {
//           show: false,
//         },
//       },
//       series: [
//         {
//           //   name: "Email",
//           type: "line",
//           //   stack: "Total",
//           data: [36, 40, 40, 50, 55, 60, 88],
//           lineStyle: {
//             color: "black", // Customize the line color
//             width: 2, // Customize the line width
//             type: "dashed", // Customize the line type (dashed, solid, etc.)
//           },
//           itemStyle: {
//             color: "transparent", // Set the color to transparent or match the background color
//           },

//           markPoint: {
//             data: [
//               {
//                 type: "max",
//                 name: "Max Value",
//                 symbol: "pin", // Use a pin symbol for the max value
//                 label: {
//                   color: "black", // Set the color of the label text for the max value
//                   fontSize: "2rem",
//                 },
//               },
//               {
//                 type: "min",
//                 name: "Min Value",
//                 symbol: "pin", // Use a pin symbol for the min value
//                 label: {
//                   color: "black", // Set the color of the label text for the max value
//                   fontSize: "2rem",
//                 },
//               },
//             ],
//           },

//           //   backgroundColor: "transparent",

//           show: false, // Set show to false to hide the X-axis labels
//         },
//       ],
//     };

//     if (option && typeof option === "object") {
//       myChart.setOption(option);
//     }

//     const resizeChart = () => {
//       myChart.resize();
//     };

//     window.addEventListener("resize", resizeChart);

//     // Cleanup the chart on component unmount
//     return () => {
//       myChart.dispose();
//       window.removeEventListener("resize", resizeChart);
//     };
//   }, []);

//   return (
//     <div id="chart-container" style={{ width: "100%", height: "400px" }} />
//   );
// };

// export default DottedGraph;

import * as echarts from "echarts";
import React, { useEffect, useState } from "react";

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

    // Cleanup the chart on component unmount
    return () => {
      myChart.dispose();
      window.removeEventListener("resize", resizeChart);
    };
  }, [id]);
  console.log("first", listWidth);

  return (
    <div
      id={`chart-container-${id}`}
      style={{ width: `100%`, height: "200px" }}
    />
  );
};

export default DottedGraph;
