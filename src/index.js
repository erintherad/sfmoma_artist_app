import React    from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './components/visualizations.js';
import './components/artists.js';

// var slugify = require('slugify');

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
