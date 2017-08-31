import React    from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import { VictoryChart,
         VictoryStack,
         VictoryArea,
         VictoryTheme
        } from 'victory';

class CountryComparison extends React.Component {

  constructor() {
    super();
    this.state = {
      data: this.getData()
    };
  }

  componentDidMount() {
    this.setStateInterval = window.setInterval(() => {
      this.setState({ data: this.getData() });
    }, 4000);
  }

  render() {
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
      <div>
        <h1>Art Stats</h1>
        { chart }
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
}

ReactDOM.render(
  <CountryComparison />,
  document.getElementById('countryComparison')
)
