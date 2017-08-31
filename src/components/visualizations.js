import React    from 'react';
import ReactDOM from 'react-dom';
import { VictoryBar } from 'victory';

const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];

class Visualization extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {}

  render() {
    return (
      <div className="row">
        <div className="col-md-3 text-center">
          <h1>Art Stats</h1>
            <VictoryBar
              data={data}
              // data accessor for x values
              x="quarter"
              // data accessor for y values
              y="earnings"
            />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Visualization />,
  document.getElementById('visualizations')
)
