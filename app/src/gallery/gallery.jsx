import React from 'react';
import Reflux from 'reflux';
import './gallery.less';

var actions = Reflux.createActions([
    'increment'
]);

var myStore = Reflux.createStore({
    listenables: actions,
    init() {
        this.state = {count:0}
    },
    onIncrement() {
        console.log('我被执行了！');
        this.state.count++;
        this.trigger(this.state);
    }
});

export default class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.store = myStore;               
    }
    handleClick = () => {
        actions.increment();
    }
    render() {        
        return (
            <div>
                <button onClick={this.handleClick}>单击增加数值</button>
                <p>{this.state.count}</p>
            </div>
        )
    }       
}