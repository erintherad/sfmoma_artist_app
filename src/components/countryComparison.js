import React    from 'react';
import { VictoryBar,
         VictoryAxis,
         VictoryLabel,
         VictoryStack
        } from 'victory';

const dataA = [
  {x: "Photography", y: 57},
  {x: "Painting", y: 40},
  {x: "Architecture", y: 38},
  {x: "video", y: 37}
];

const dataB = dataA.map((point) => {
  const y = Math.round(point.y + 3 * (Math.random() - 0.5));
  return { ...point, y };
});

const width = 200;
const height = 200;

export default class CountryComparison extends React.Component {

  render() {
    var countryComparison =
    <svg viewBox={`0 0 200 200`}
      style={{ width: "100%", height: "auto" }}
    >
      <VictoryStack horizontal
        height={height}
        width={width}
        style={{ data: { width: 20 }, labels: { fontSize: 11 } }}
      >
        <VictoryBar
          style={{ data: { fill: "orange" } }}
          data={dataA}
          y={(data) => (-Math.abs(data.y))}
          labels={(data) => (`${Math.abs(data.y)}%`)}
        />
        <VictoryBar
          style={{ data: { fill: "gold" } }}
          data={dataB}
          labels={(data) => (`${Math.abs(data.y)}%`)}
        />
      </VictoryStack>

      <VictoryAxis dependentAxis
        height={height}
        width={width}
        style={{
          axis: { stroke: "transparent" },
          ticks: { stroke: "transparent" },
          tickLabels: { fontSize: 8, fill: "black" }
        }}
        tickLabelComponent={<VictoryLabel x={100} textAnchor="middle"/>}
        tickValues={dataA.map((point) => point.x).reverse()}
      />
    </svg>

    return (
      <div className="col-md-4">
        <p>United States vs European Art</p>
        { countryComparison }
      </div>
    );
  }
}
