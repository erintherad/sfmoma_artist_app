import React from 'react';
import '../styles/index.css';

export default class Header extends React.Component {
  constructor() {
    super();
    this.defaultProps = {
      header: ""
    };
  }

  render() {
    return (
      <div className="col-md-12 text-center header-style">
        <h1>{ this.props.header }</h1>
      </div>
    )
  }
}
