import React, { Component } from 'react'
import axios from 'axios';

export default function AxiosWrapper(method,url,data,callback,errors=()=>{}) {
  axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;
  axios({
    method : `${method}`,
    url : `${url}`,
    data : data
  })
  .then((response)=> {
    console.log(response);
    callback(response);
  })
  .catch((error)=> {
    console.error(error);
    errors(error);
  });
}
