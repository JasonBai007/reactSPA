import React from 'react';

import 'whatwg-fetch';

import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  getData = () => {
    let data = {a:23};
    fetch('../data/selectData.json',{
        method:'get',
         headers: {
           "Content-Type": "application/json"
         },
         credentials: "include"
    })
        .then((res) => {
            console.log(res);
            return res.json();
        })
        .then((data) => {
            console.log(data.obj);          
        })
        .catch((ex) => {
            console.log(ex);
        });
  }

  render() {
    return (
      <h1 onClick={this.getData}>Hello World</h1>
    );
  }
}

