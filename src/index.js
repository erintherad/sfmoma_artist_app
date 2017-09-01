import React    from 'react';
import ReactDOM from 'react-dom';

// import './index.css';

// import './components/countryComparison.js';
// import './components/genderBreakdown.js';
// import './components/artists.js';

import Header from './components/header.js';
import TypeComparison from './components/typeComparison.js';

class App extends React.Component {
  render() {
    return (
      <div className="row">
        <Header header="SFMOMA Dashboard" />
        <TypeComparison />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
