import React    from 'react';
import ReactDOM from 'react-dom';

import './index.css';

class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      artists: []
    };
  }

  componentWillMount() {
    // this.search();
    fetch('/api/collection/artists/')
      .then(res => res.json())
      .then(artists => this.setState({ artists }));
  }

  render() {
    // var artists = _.map(this.state.artists, (artist) => {
    //   return <li key={ artist.id }>{ artist.name }</li>;
    // })
    // return (
    //   <div>
    //   <h1>Artist Search</h1>
    //     <input ref="query" onChange={ (e) => { this.search(this.refs.query.value); } } type="text" />
    //     <ul>{ artists }</ul>
    //   </div>
    // );
    return (
      <div className="App">
        <h1>Artists</h1>
        {this.state.artists.map(artist =>
          <div key={artist.slug}>{artist.name.display}</div>
        )}
      </div>
    );
  }

  // search(artist = "Arthur_Dove") {
  //   var url = `/api/collection/artists/${artist}`;
  //   Request.get(url).then((response) => {
  //     console.log(response);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  // }
}

ReactDOM.render(
  <Home />,
  document.getElementById('root')
)
