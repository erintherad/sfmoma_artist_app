import React    from 'react';
import ReactDOM from 'react-dom';

import './index.css';

class Home extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  // Lifecycle Methods

  // Before component initalizes, go out and get data from Api
  componentWillMount() {
    this.search();
  }

  render() {
    var artists = _.map(this.state.artists, (artist) => {
      return <li key={ artist.id }>{ artist.name }</li>;
    })
    return (
      <div>
      <h1>Artist Search</h1>
        <input ref="query" onChange={ (e) => { this.search(this.refs.query.value); } } type="text" />
        <ul>{ artists }</ul>
      </div>
    );
  }

  search(artist = "Arthur_Dove") {
    var url = `/api/collection/artists/${artist}`;
    Request.get(url).then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  }
}

ReactDOM.render(
  <Home />,
  document.getElementById('root')
)
