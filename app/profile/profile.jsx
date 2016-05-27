import React from 'react';

// 引入各部分组件
import Hello from './components/hello/hello.jsx';
import Timer from './components/timer/timer.jsx';

import './profile.css';

/*简介父组件*/
export default class Profile extends React.Component {
    render() {
        return (
            <div>
                <Hello text="Web Developer"/>
                <Timer />               
            </div>
        )
    }    
}
