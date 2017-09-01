import React    from 'react';
import ReactDOM from 'react-dom';

// import './index.css';

// import './components/countryComparison.js';
// import './components/artists.js';

import Header from './components/header.js';
import TypeComparison from './components/typeComparison.js';
import GenderBreakdown from './components/genderBreakdown.js';

class App extends React.Component {
  render() {
    return (
      <div className="row">
        <Header header="SFMOMA Dashboard" />
        <TypeComparison />
        <GenderBreakdown />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
