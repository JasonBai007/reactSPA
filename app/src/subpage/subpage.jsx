import React from 'react';
import './subpage.less';

export default class Subpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
      return (
        <div>
            <i className="fa fa-cogs fa-3x" aria-hidden="true"></i>
        </div>
      );
    }
}

