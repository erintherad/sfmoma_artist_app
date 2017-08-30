import React    from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

import './index.css';

// var slugify = require('slugify');

class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      artists: []
    };
  }

  componentWillMount() {
    this.search();
  }

  render() {
    var artists = _.map(this.state.artists, (artist) => {
      return <li key={ artist.slug }><a href={ artist.web_url }>{ artist.name.display }</a></li>;
    })

    return (
      <div className="App">
        <h1>artists</h1>
        <input ref="query" onChange={ (e) => { this.search(this.refs.query.value); } } type="text" />
        <ul>{ artists }</ul>
      </div>
    );
  }

  search() {
    fetch(`/api/collection/artists/?page=2`)
      .then(res => res.json())
      .catch(e => e)
      .then(artists => this.setState({ artists }));
  }
}

ReactDOM.render(
  <Home />,
  document.getElementById('root')
)
