import React    from 'react';
import ReactDOM from 'react-dom';

// Styles
import './styles/index.css';

// Components
import Header from './components/header.js';
import TypeComparison from './components/typeComparison.js';
import GenderBreakdown from './components/genderBreakdown.js';
import CountryComparison from './components/countryComparison.js';
import Artwork from './components/artwork.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="row text-center">
          <Header header="SFMOMA Dashboard" />
        </div>
        <div className="row text-center justify-content-md-center">
          <TypeComparison />
          <GenderBreakdown />
          <CountryComparison />
        </div>
        <div className="row text-center">
          <Artwork />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
