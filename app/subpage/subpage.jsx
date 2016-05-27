import React from 'react';
import './subpage.css';

export default class Subpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
      return (
        <div>
            <h2>另外一个子页面</h2>
        </div>
      );
    }
}

