import React    from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import { VictoryPie,
         VictoryLabel,
         VictoryChart,
         VictoryStack,
         VictoryGroup,
         VictoryArea,
         VictoryPortal,
         VictoryScatter,
         VictoryTheme
        } from 'victory';

class Visualization extends React.Component {

  constructor() {
    super();
    this.state = {
      femaleArtistCount: 0,
      maleArtistCount: 0,
      data: this.getData()
    };
  }

  componentWillMount() {
    this.getArtistCount("female", "femaleArtistCount");
    this.getArtistCount("male", "maleArtistCount");

    fetch(`/api/collection/artworks/?date_display=1900&department=Photography`)
      .then(res => res.json())
      .catch(e => e)
      .then(res => console.log(res.count));
  }

  componentDidMount() {
    this.setStateInterval = window.setInterval(() => {
      this.setState({ data: this.getData() });
    }, 4000);
  }

  render() {
    // Sets up gender breakdown graph
    var artistGenderBreakdown =
      <div>
        <svg viewBox="0 0 400 400">
          <VictoryPie
            width={400} height={400}
            data={[
              { x: "27.38% Female", y: this.state.femaleArtistCount },
              { x: "72.62% Male", y: this.state.maleArtistCount }
            ]}
            innerRadius={68} labelRadius={210}
            style={{ labels: { fontSize: 20, fill: "black"}}}
            colorScale={["tomato", "orange"]}
            animate={{ duration: 2000 }}
          />
        </svg>
      </div>

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

    // Some data on this chart here
    var chart =
    <div>
      <VictoryChart
        theme={VictoryTheme.material}
        animate={{ duration: 1000 }}
      >
        <VictoryStack
          colorScale={"warm"}
        >
          {this.state.data.map((data, i) => {
            return (
              <VictoryArea
                key={i}
                data={data}
                interpolation={"basis"}
              />
            );
          })}
        </VictoryStack>
      </VictoryChart>
    </div>

    return (
      <div className="row">
        <div className="col-md-4 text-center">
          <h1>Art Stats</h1>
          { chart }
        </div>
        <div className="col-md-4 text-center">
          <h1>Gender Breakdown</h1>
          { artistGenderBreakdown }
        </div>
        <div className="col-md-4 text-center">
          <h1>Art Stats</h1>
          { stackedMediumOverTime }
        </div>
      </div>
    );
  }

  getData() {
    return _.range(7).map(() => {
      return [
        { x: 1, y: _.random(1, 5) },
        { x: 2, y: _.random(1, 10) },
        { x: 3, y: _.random(2, 10) },
        { x: 4, y: _.random(2, 10) },
        { x: 5, y: _.random(2, 15) }
      ];
    });
  }

  getArtistCount(gender, counter) {
    fetch(`/api/collection/artists/?gender=${gender}`)
      .then(res => res.json())
      .catch(e => e)
      .then(res => this.setState({ [counter]: res.count }));
  }
}

ReactDOM.render(
  <Visualization />,
  document.getElementById('visualizations')
)
