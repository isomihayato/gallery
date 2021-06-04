import React, { Component } from 'react';
import BadgeRectangle from '../Atoms/BadgeRectangle';

export default class SubTitle extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    const mt = this.props.mt || 25
    const titleFontSize = this.props.fontSize || 3.125
    const subTitleStyles = {
      marginTop: `${mt}px`
    }
    const titleStyles = {
      fontSize: `${titleFontSize}rem`,
      width: 'fit-content',
      display: 'inline-block',
      fontFamily: 'bungee, sans-serif',
      fontWeight: 400,
      fontStyle: 'normal',
      transform: 'translateY(-6px)'
    }
    return (
      <div>
        <div style={subTitleStyles}>
          <BadgeRectangle/>
          <div style={titleStyles}>
            {this.props.TitleContent}
          </div>
        </div>
      </div>
    );
  }
}
