import React, { Component } from 'react';
import TitleMarge from '../Atoms/TitleMarge';
import SkewLetter from '../Atoms/SkewLetter';

export default class NameTitle extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    const titleStyles = {
      fontSize: '2.1875rem'
    }
    const nameStyles = {
        fontSize: '3.4rem'
    }
    return (
      <div>
        <div style={titleStyles}>{this.props.title}</div>
        <TitleMarge
          component={<div style={nameStyles}>{this.props.name}</div>}
        />
        <SkewLetter
            angle={45}
            color="#707070"
            fontSize="3.75rem"
            ContentLetter="Isomi Hayato"
        />	
      </div>
    );
  }
}
