import React from 'react';
import ReactDOM from 'react-dom';

// 引入垫片兼容IE
require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');

// 引入React-Router模块
import { Router, Route, Link, hashHistory, IndexRoute, Redirect,IndexLink} from 'react-router';

// 引入Antd组件
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

// 引入单个页面（包括嵌套的子页面）
import Welcome from './welcome/welcome.jsx';
import Profile from './profile/profile.jsx';
import Campaign from './campaign/campaign.jsx';
import Counter from './counter/counter.jsx';
import Charts from './charts/charts.jsx';
import Last from './last/last.jsx';
import Edit from './edit/edit.jsx';

// 引入Ant-Design样式 & Animate.CSS样式 & font-awesome样式
import 'antd/dist/antd.min.css';
import 'animate.css/animate.min.css';
import 'font-awesome/css/font-awesome.min.css';

// 引入主体样式
import './main.less';

// 配置整体组件
class Init extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: '1',
            openKeys: []
        }
    }    
    handleClick = (e) => {
        this.setState({
           current: e.key,
           openKeys: e.keyPath.slice(1),
        });
    }
    onToggle = (info) => {
        this.setState({
           openKeys: info.open ? info.keyPath : info.keyPath.slice(1),
        });
    }

    render() {
        return (
            <div>
                <div id="leftMenu"> 
                    <img src={require('./images/logo.png')} width="50" id="logo"/>  {/*logo图标*/}                
                    <Menu onClick={this.handleClick}
                        style={{ width: 146 }}
                        openKeys={this.state.openKeys}
                        onOpen={this.onToggle}
                        onClose={this.onToggle}
                        selectedKeys={[this.state.current]}
                        theme="light"
                        mode="inline">
                        <Menu.Item key="1">                    
                            <IndexLink to="/"><span><Icon type="home" /><span>欢迎页</span></span></IndexLink>
                        </Menu.Item>    
                        <SubMenu key="sub2" title={<span><Icon type="appstore-o" /><span>导航一</span></span>}>
                            <Menu.Item key="2"><Link to="/profile">小应用</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" title={<span><Icon type="bars" /><span>导航二</span></span>}>
                            <Menu.Item key="3"><Link to="/campaign">广告系列</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub4" title={<span><Icon type="bar-chart" /><span>导航三</span></span>}>
                            <Menu.Item key="4"><Link to="/counter">Reflux起步</Link></Menu.Item>
                            <Menu.Item key="5"><Link to="/charts">施工中</Link></Menu.Item>
                        </SubMenu>
                        <Menu.Item key="6">
                            <Link to="/last"><span><Icon type="mail" /><span>结尾页</span></span></Link>
                        </Menu.Item>
                    </Menu>
                    <div id="copyright">Copyright © 白延云</div>                    
                </div>
                <div id="rightWrap">
                    {this.props.children}                
                </div>
            </div>
        )
    }
}

// 配置路由，并将路由注入到id为init的DOM元素中
ReactDOM.render((
    <Router history={hashHistory} >
        <Route path="/" component={Init}>
            <IndexRoute component={Welcome}/>
            <Route path="profile" component={Profile} />
            <Route path="campaign" component={Campaign} />
            <Route path="counter" component={Counter} />
            <Route path="charts" component={Charts} />
            <Route path="last" component={Last} />
            <Route path="edit/:rowId" component={Edit} />
        </Route>
    </Router>
), document.querySelector('#init'))
