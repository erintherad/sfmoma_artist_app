import React    from 'react';
import ReactDOM from 'react-dom';
import { VictoryChart,
         VictoryStack,
         VictoryGroup,
         VictoryPortal,
         VictoryArea,
         VictoryScatter,
         VictoryLabel
        } from 'victory';

export default class TypeComparison extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  // componentWillMount() {
  //   fetch(`/api/collection/artworks/?date_display=2000&department=Architecture and Design`)
  //     .then(res => res.json())
  //     .catch(e => e)
  //     .then(res => console.log(res.count));
  // }

  render() {
    // Painting and Sculpture, Photography, Architecture and Design over time
    var stackedMediumOverTime =
      <div className="col-md-4">
        <VictoryChart scale={{x: "time"}} width={400} height={400} animate={{ duration: 2000 }}>
          <VictoryStack colorScale={["tomato", "orange", "gold"]}>
            <VictoryGroup
              data={[
                {x: new Date(1900, 0, 1), y: 2},
                {x: new Date(1925, 0, 1), y: 26},
                {x: new Date(1975, 0, 1), y: 98},
                {x: new Date(2000, 0, 1), y: 29}
              ]}
            >
              <VictoryArea/>
              <VictoryPortal>
                <VictoryScatter
                  style={{ data: {fill: "black"}}}
                />
              </VictoryPortal>
            </VictoryGroup>
            <VictoryGroup
              data={[
                {x: new Date(1900, 0, 1), y: 6},
                {x: new Date(1925, 0, 1), y: 6},
                {x: new Date(1975, 0, 1), y: 61},
                {x: new Date(2000, 0, 1), y: 211}
              ]}
            >
              <VictoryArea/>
             <VictoryPortal>
                <VictoryScatter
                  style={{ data: {fill: "black"}}}
                />
              </VictoryPortal>
            </VictoryGroup>
            <VictoryGroup
              data={[
                {x: new Date(1900, 0, 1), y: 9},
                {x: new Date(1925, 0, 1), y: 21},
                {x: new Date(1975, 0, 1), y: 224},
                {x: new Date(2000, 0, 1), y: 103}
              ]}
            >
              <VictoryArea/>
              <VictoryPortal>
                <VictoryScatter
                  style={{ data: {fill: "black"}}}
                />
              </VictoryPortal>
            </VictoryGroup>
          </VictoryStack>
        </VictoryChart>
      </div>

    return (
      <div>
        <p>Photography, Painting, and Architecture created and obtained over the last 20th Century</p>
        { stackedMediumOverTime }
      </div>
    );
  }
}
