import React    from 'react';
import { VictoryPie } from 'victory';
import '../styles/index.css';

export default class GenderBreakdown extends React.Component {

  constructor() {
    super();
    this.state = {
      femaleArtistCount: 0,
      maleArtistCount: 0
    };
  }

  componentWillMount() {
    this.getArtistCount("female", "femaleArtistCount");
    this.getArtistCount("male", "maleArtistCount");
  }

  render() {
    // Sets up gender breakdown graph
    var artistGenderBreakdown =
      <div>
        <svg viewBox="0 0 400 400">
          <VictoryPie
            height={400} width={400}
            data={[
              { x: "27.38% Female", y: this.state.femaleArtistCount },
              { x: "72.62% Male", y: this.state.maleArtistCount }
            ]}
            innerRadius={68} labelRadius={100}
            style={{ labels: { fontSize: 20, fill: "black"}}}
            colorScale={["tomato", "orange"]}
            animate={{ duration: 2000 }}
          />
        </svg>
      </div>

    return (
      <div className="col-lg-4 col-md-4 col-xs-4 graph-container-style container-style">
        <h3>Artists in collection</h3>
          <div className="col-lg-12 graph-style">
            { artistGenderBreakdown }
          </div>
      </div>
    );
  }

  getArtistCount(gender, counter) {
    fetch(`/api/collection/artists/?gender=${gender}`)
      .then(res => res.json())
      .catch(e => e)
      .then(res => this.setState({ [counter]: res.count }));
  }
}
