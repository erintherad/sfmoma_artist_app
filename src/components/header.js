import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.props = {
      header: ""
    };
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12 text-center">
          <h1>{ this.props.header }</h1>
        </div>
      </div>
    )
  }
}
