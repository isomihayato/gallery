import React, { Component,Fragment } from 'react';

export default class TitleMarge extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    const styles = {
        marginTop: 10,
        display: 'inline-block'
    }
    return (
      <Fragment>
        <div style={styles}>
          {this.props.component}
        </div>
      </Fragment>
    );
  }
}
