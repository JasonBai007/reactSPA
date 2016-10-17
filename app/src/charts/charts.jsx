import React from 'react';
import './charts.less';

export default class Charts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
      return (
        <div>
            <i className="fa fa-cog fa-spin fa-3x" aria-hidden="true"></i>
        </div>
      );
    }
}

