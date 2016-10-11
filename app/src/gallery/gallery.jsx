import React from 'react';
import Reflux from 'reflux';
import {Button, Collapse} from 'antd';
import Title from '../components/title.jsx';
import './gallery.less';

const Panel = Collapse.Panel;

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
        this.state = {count:0};
    }
    componentDidMount(){
        this.unsubscribe = myStore.listen(
            (v) => {
                this.setState({count:v}); 
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
                <Title name="Reflux起步" />
                <span id="num">{this.state.count}</span>
                <Button onClick={this.handleClick} type="ghost" size="large" id="increase">+</Button>
                <Collapse accordion>
                    <Panel header='action' key="1">
                        <p>
                            创建actions：
                            var Actions = Reflux.createActions([
                                "action1",
                                "action2",
                                "action3"
                              ]);
                            <br/>
                            调用其中一个action：Actions.action1();
                        </p>
                    </Panel>
                    <Panel header='store' key="2">
                        <p>blablabla</p>
                    </Panel>
                    <Panel header='component' key="3">
                        <p>blablabla</p>
                    </Panel>
                </Collapse>
            </div>
        )
    }       
}