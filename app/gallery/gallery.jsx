import React from 'react';
import './gallery.css';

export default class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }               
    }
    render() {        
        return (
            <div>
                <h2>我是子页面</h2>
            </div>
        )
    }       
}