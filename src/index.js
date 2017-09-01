import React    from 'react';
import ReactDOM from 'react-dom';

// import './index.css';

// import './components/artists.js';

import Header from './components/header.js';
import TypeComparison from './components/typeComparison.js';
import GenderBreakdown from './components/genderBreakdown.js';
import CountryComparison from './components/countryComparison.js';

class App extends React.Component {
  render() {
    return (
      <div className="row text-center">
        <Header header="SFMOMA Dashboard" />
        <TypeComparison />
        <GenderBreakdown />
        <CountryComparison />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
