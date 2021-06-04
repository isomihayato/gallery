import React, { Component, Fragment } from 'react';

export default class BadgeRectangle extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    let bgcolor = this.props.bgcolor || '#777'
    let width   = this.props.width || 15
    let height  = this.props.height || 45
    let mr      = this.props.mr || 20
    const styles = {
      display: 'inline-block',
      width: `${width}px`,
      height: `${height}px`,
      marginRight: `${mr}px`,
      backgroundColor: `${bgcolor}`,
    }
    return (
      <Fragment>
        <div style={styles}></div>
      </Fragment>
    );
  }
}
