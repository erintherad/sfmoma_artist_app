import React    from 'react';
import ReactDOM from 'react-dom';
import { VictoryChart,
         VictoryStack,
         VictoryGroup,
         VictoryPortal,
         VictoryArea,
         VictoryScatter
        } from 'victory';

class TypeComparison extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    fetch(`/api/collection/artworks/?date_display=1900&department=Photography`)
      .then(res => res.json())
      .catch(e => e)
      .then(res => console.log(res.count));
  }

  render() {
    // Painting and Sculpture, Photography, Architecture and Design over time
    var stackedMediumOverTime =
      <div>
        <VictoryChart scale={{x: "time"}} width={400} height={400}>
          <VictoryStack colorScale="warm">
            <VictoryGroup
              data={[
                {x: new Date(1986, 1, 1), y: 2},
                {x: new Date(1996, 1, 1), y: 3},
                {x: new Date(2006, 1, 1), y: 5},
                {x: new Date(2016, 1, 1), y: 4}
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
                {x: new Date(1986, 1, 1), y: 4},
                {x: new Date(1996, 1, 1), y: 3},
                {x: new Date(2006, 1, 1), y: 2},
                {x: new Date(2016, 1, 1), y: 5}
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
                {x: new Date(1986, 1, 1), y: 3},
                {x: new Date(1996, 1, 1), y: 1},
                {x: new Date(2006, 1, 1), y: 4},
                {x: new Date(2016, 1, 1), y: 2}
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
        <h1>Art Stats</h1>
        { stackedMediumOverTime }
      </div>
    );
  }
}

ReactDOM.render(
  <TypeComparison />,
  document.getElementById('typeComparison')
)
