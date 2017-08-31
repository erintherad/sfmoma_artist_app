import React    from 'react';
import ReactDOM from 'react-dom';
import { VictoryPie, VictoryLabel } from 'victory';

const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];

class Visualization extends React.Component {

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
    return (
      <div className="row">
        <div className="col-md-3 text-center">
          <h1>Art Stats</h1>
            <svg viewBox="0 0 400 400">
              <VictoryPie
                width={400} height={400}
                data={[
                  { x: "Female", y: this.state.femaleArtistCount },
                  { x: "Male", y: this.state.maleArtistCount }
                ]}
                innerRadius={68} labelRadius={100}
                style={{ labels: { fontSize: 20, fill: "white"}}}
              />
              <VictoryLabel
                textAnchor="middle"
                x={200} y={200}
                text="Gender Breakdown"
              />
            </svg>
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

ReactDOM.render(
  <Visualization />,
  document.getElementById('visualizations')
)
