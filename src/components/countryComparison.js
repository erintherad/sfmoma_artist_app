import React from 'react';
import { VictoryChart, VictoryStack, VictoryBar, VictoryAxis } from 'victory';

const myDataset = [
  [
      {x: "Photography", y: 4165},
      {x: "Architecture & Design", y: 63},
      {x: "Painting & Sculpture", y: 408},
      {x: "Media Arts", y: 14}
  ],
  [
      {x: "Photography", y: 638},
      {x: "Architecture & Design", y: 844},
      {x: "Painting & Sculpture", y: 66},
      {x: "Media Arts", y: 0}
  ]
];

export default class CountryComparison extends React.Component {
  transformData(dataset) {
    const totals = dataset[0].map((data, i) => {
      return dataset.reduce((memo, curr) => {
        return memo + curr[i].y;
      }, 0);
    });
    return dataset.map((data) => {
      return data.map((datum, i) => {
        return {x: datum.x, y: (datum.y / totals[i]) * 100};
      });
    });
  }

  render() {
    const dataset = this.transformData(myDataset);
    const countryComparison =
    <div>
      <VictoryChart height={400} width={400}
        domainPadding={{x: 30, y: 20}}
      >
          <VictoryStack
            colorScale={["tomato", "orange", "gold"]}
          >
            {dataset.map((data, i) => {
              return <VictoryBar data={data} key={i}/>;
            })}
          </VictoryStack>
          <VictoryAxis dependentAxis
            tickFormat={(tick) => `${tick}%`}
          />
          <VictoryAxis
            tickFormat={["Photography", "Architecture", "Painting", "Media Arts"]}
          />
      </VictoryChart>
    </div>

    return (
      <div className="col-md-4">
        <p>United States vs European Art</p>
        { countryComparison }
      </div>
    );
  }
}
