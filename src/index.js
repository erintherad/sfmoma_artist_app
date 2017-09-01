import React    from 'react';
import ReactDOM from 'react-dom';

// import './index.css';
// import './components/typeComparison.js';
// import './components/countryComparison.js';
// import './components/genderBreakdown.js';
// import './components/artists.js';

import Header from './components/header.js';

class App extends React.Component {
  render() {
    return (
      <Header />
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('header')
)
