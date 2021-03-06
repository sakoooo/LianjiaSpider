import React from "react";
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util
} from "bizcharts";

// 基础折线图
class Basic extends React.Component {
  render() {
    const { dataSource = [] } = this.props;
    // const data = [
    //   {
    //     year: "1991",
    //     value: 3
    //   },
    //   {
    //     year: "1992",
    //     value: 4
    //   },
    //   {
    //     year: "1993",
    //     value: 3.5
    //   },
    //   {
    //     year: "1994",
    //     value: 5
    //   },
    //   {
    //     year: "1995",
    //     value: 4.9
    //   },
    //   {
    //     year: "1996",
    //     value: 6
    //   },
    //   {
    //     year: "1997",
    //     value: 7
    //   },
    //   {
    //     year: "1998",
    //     value: 9
    //   },
    //   {
    //     year: "1999",
    //     value: 13
    //   }
    // ];
    const cols = {
      count: {
        min: 0
      },
      item: {
        range: [0, 1]
      }
    };
    return (
      <div>
        <Chart height={400} data={dataSource} scale={cols} forceFit>
          <Axis name="item" />
          <Axis name="count" />
          <Tooltip
            crosshairs={{
              type: "y"
            }}
          />
          <Geom type="line" position="item*count" size={2} />
          <Geom
            type="point"
            position="item*count"
            size={4}
            shape={"circle"}
            style={{
              stroke: "#fff",
              lineWidth: 1
            }}
          />
        </Chart>
      </div>
    );
  }
}

export default Basic;
