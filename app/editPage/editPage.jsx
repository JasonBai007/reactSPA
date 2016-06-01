import React from 'react';

import EditForm from './components/editForm.jsx';
import Title from '../components/title.jsx';

export default class EditPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
      return (
        <div>
            <Title titleName="编辑广告系列"/>
            <i className="fa fa-cog fa-spin fa-3x fa-fw"></i>          
        </div>
      );
    }
}