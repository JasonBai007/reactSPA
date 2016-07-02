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
            <i className="fa fa-cog fa-spin fa-3x fa-fw"></i>          
        </div>
      );
    }
}

