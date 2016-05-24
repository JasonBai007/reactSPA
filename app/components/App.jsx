import React from 'react';

import 'whatwg-fetch';

import './App.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text:'初始态',
            arr:['请选择']
        }
    }

    componentDidMount() {
        fetch('../data/selectData.json')
            .then((res) => {
                console.log(res);
                return res.json();
            })
            .then((data) => {
                console.log(data.obj);  
                this.setState({arr:data.obj});        
            })
            .catch((ex) => {
                console.log(ex);
            });
    }

    getData = () => {      
        this.setState({text:'激发态'});        
    }

    render() {
      return (
        <div>
          <h1 onClick={this.getData}>单击我：{this.state.text}</h1>
          <select>
            {
              this.state.arr.map((v,i) => {
                return <option key={i}>{v}</option>
              })
            }
          </select>
        </div>
      );
    }
}

