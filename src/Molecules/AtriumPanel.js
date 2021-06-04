import React, { Component } from 'react';
import {
    Avatar,
    Box,
    Typography
} from '@material-ui/core';
export default class AtriumPanel extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Box
          border={1}
          bgcolor='white'
          style={{
            width: '24vw',
            height: '350px',
            display: 'inline-block',
          }}
        >
          <Avatar
          style={{
            margin: '0 auto',
            width: '120px',
            height: '120px',
            marginTop:'30px'
          }}
          >{this.props.component}</Avatar>
          <Typography 
            variant="body1"
            gutterBottom 
            style={{margin: '50px 25px 0 25px'}}
           >
            {this.props.body}
          </Typography>
        </Box>
      </div>
    );
  }
}
