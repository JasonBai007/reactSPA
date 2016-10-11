import React from 'react';
import Reflux from 'reflux';
import {Button} from 'antd';
import Title from '../components/title.jsx';
import './gallery.less';

var actions = Reflux.createActions(['increment']);

var myStore = Reflux.createStore({
    listenables: actions,
    init() {
        this.num = {count:0}
    },
    onIncrement() {
        this.num.count++;
        this.trigger(this.num.count);
    }
});

export default class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount(){
        this.unsubscribe = myStore.listen(
            (v) => {
                this.setState({count:v}) 
            }
        );
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    handleClick = () => {
        actions.increment();
        console.log(this.state.count);
    }
    render() {        
        return (
            <div>
                <Title name="Reflux练习板块" />
                <Button onClick={this.handleClick}>单击增加数值</Button>
                <span> {this.state.count}</span>
            </div>
        )
    }       
}