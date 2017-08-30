import React    from 'react';
import ReactDOM from 'react-dom';

class Visualization extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {}

  render() {
    return (
      <div className="row">
        <div className="col-md-12 text-center">
          <h1>Art Stats</h1>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Visualization />,
  document.getElementById('visualizations')
)
