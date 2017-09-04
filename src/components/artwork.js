import React from 'react';
import _ from 'lodash';
import '../styles/index.css';

export default class Artwork extends React.Component {

  constructor() {
    super();
    this.state = {
      artworks: [],
      resultCount: 0,
      type: ""
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
                    <img className="card-img-top" src={ imgUrl } alt="" />
                    <h4 className="card-title">{ artwork.title.display }</h4>
                    <p className="card-text">{ artwork.artists[0].artist.name_display }</p>
                    <p className="card-text">{ artwork.type }, { artwork.date.display }</p>
                  </div>
                </div>
              </div>;
    })

    return (
      <div className="col-md-12 artwork-container">
        <div className="row white-container-style">
          <div className="col-md-12 artwork-input-container">
            <input className="form-control text-center search-input"
                     placeholder="Search by keyword: clay, paint, video..."
                     ref="query"
                     onChange={ (e) => { this.search(this.refs.query.value); } }
                     type="text" />
                   <div className="results-div">{ this.state.resultCount } <span className="orange">{ this.state.type }</span> results</div>
          </div>
          <div className="col-md-12 artwork-results-container">
            <div className="card-deck">{ artworks }</div>
          </div>
        </div>
      </div>
    );
  }

  search(type = "photo") {
    fetch(`/api/collection/artworks/?page_size=8&has_images=1&object_keywords__icontains=${type}`)
      .then(res => res.json())
      .catch(e => e)
      .then(res => this.setState({ artworks: res.results, resultCount: res.count, type: `${type}` }));
  }
}
