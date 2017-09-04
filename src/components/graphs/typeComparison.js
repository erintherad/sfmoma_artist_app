import React    from 'react';
import { VictoryChart,
         VictoryStack,
         VictoryGroup,
         VictoryPortal,
         VictoryArea,
         VictoryScatter
        } from 'victory';

export default class TypeComparison extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // Architecture and Design, Photography, and Painting and Sculpture over time
    var stackedMediumOverTime =
      <div>
        <VictoryChart scale={{x: "time"}} animate={{ duration: 2000 }} height={400} width={400}>
          <VictoryStack colorScale={["tomato", "orange", "gold"]}>
            <VictoryGroup
              data={[
                {x: new Date(1900, 0, 1), y: 68},
                {x: new Date(1925, 0, 1), y: 190},
                {x: new Date(1975, 0, 1), y: 1268},
                {x: new Date(2000, 0, 1), y: 3448}
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
                {x: new Date(1900, 0, 1), y: 316},
                {x: new Date(1925, 0, 1), y: 824},
                {x: new Date(1975, 0, 1), y: 2581},
                {x: new Date(2000, 0, 1), y: 2971}
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
                {x: new Date(1900, 0, 1), y: 640},
                {x: new Date(1925, 0, 1), y: 2444},
                {x: new Date(1975, 0, 1), y: 3326},
                {x: new Date(2000, 0, 1), y: 5116}
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
      <div className="col-md-4">
        <div className="graph white-container-style">
          <h3 className="graph-header">Art from the 20th Century</h3>
          <div className="row">
            <div className="graph-img-div">
              { stackedMediumOverTime }
            </div>
          </div>
        </div>
      </div>
    );
  }
}