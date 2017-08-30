import React    from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

import './index.css';

// var slugify = require('slugify');

class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      artworks: []
    };
  }

  componentWillMount() {
    this.search();
  }

  render() {
    var artworks = _.map(this.state.artworks, (artwork) => {
      var imgUrl = artwork.images[0] ? artwork.images[0].public_image : 'placeholder.jpg'
      return <div className="col-md-3" key={ artwork.slug }>
                <div className="card">
                  <div className="card-block">
                    <img className="card-img-top img-fluid" src={ imgUrl } alt="" />
                    <h4 className="card-title">{ artwork.title.display }</h4>
                    <p className="card-text">{ artwork.artists[0].artist.name_display }</p>
                    <p className="card-text">{ artwork.type }, { artwork.date.display }</p>
                  </div>
                </div>
              </div>;
    })

    return (
      <div className="row justify-content-md-center">
        <div className="col-md-12 text-center">
          <h1>artworks</h1>
          <input ref="query" onChange={ (e) => { this.search(this.refs.query.value); } } type="text" />
            <div className="card-deck">{ artworks }</div>
        </div>
      </div>
    );
  }

  search() {
    fetch(`/api/collection/artworks/`)
      .then(res => res.json())
      .catch(e => e)
      .then(artworks => this.setState({ artworks }));
  }
}

ReactDOM.render(
  <Home />,
  document.getElementById('root')
)
