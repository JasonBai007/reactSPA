import React from 'react';
import {Table,Icon,Tooltip} from 'antd';
import { Link } from 'react-router';

// 引入标准Fetch及IE兼容依赖
import 'whatwg-fetch';
import 'es6-promise/dist/es6-promise.min.js';
import 'fetch-ie8/fetch.js';

import Title from '../components/title';
import './antdes.less';


export default class Antdes extends React.Component {
    constructor(props) {
        super(props);            
    } 

    displayAlert = () => {
        console.log('blablabla')
    }

    render() {
        return (
            <div id="wrap">
            	<Title titleName="广告系列"  onMouseOver={this.displayAlert}/>
            </div>
        )
    }
}
