import React, { Component, Fragment } from 'react';

export default class SkewLetter extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    const styles = {
      transform: `rotate3d(0, 1, 0, ${this.props.angle}deg)`,
      color: this.props.color,
      fontSize: this.props.fontSize,
      fontWeight: 300,
      display: 'inline-block'
    }
    return (
      <Fragment>
        <div style={styles}>
          {this.props.ContentLetter}
        </div>
      </Fragment>
    );
  }
}
