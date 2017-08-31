import React    from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './components/typeComparison.js';
import './components/countryComparison.js';
import './components/genderBreakdown.js';
import './components/artists.js';

class Home extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12 text-center">
          <h1>SFMOMA Dashboard</h1>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Home />,
  document.getElementById('header')
)
