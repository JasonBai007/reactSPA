import React from 'react';
import ReactDOM from 'react-dom';

require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');

// 引入React-Router模块
import { Router, Route, Link, hashHistory, IndexRoute, Redirect,IndexLink} from 'react-router';

// 引入Antd的导航组件
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

// 引入单个页面（包括嵌套的子页面）
import Welcome from './welcome/welcome.jsx';
import Profile from './profile/profile.jsx';
import Antdes from './antdes/antdes.jsx';
import Gallery from './gallery/gallery.jsx';
import Subpage from './subpage/subpage.jsx';
import Last from './last/last.jsx';

// 引入Ant-Design样式 & Animate.CSS样式
import 'antd/dist/antd.css';
import 'animate.css/animate.min.css';

// 引入主体样式文件
import './main.css';

// 配置导航
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
                    <img src='images/logo.png' width="50" id="logo"/>                  
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
                        <SubMenu key="sub2" title={<span><Icon type="windows" /><span>导航一</span></span>}>
                            <Menu.Item key="2"><Link to="/profile">子导航一</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" title={<span><Icon type="bar-chart" /><span>导航二</span></span>}>
                            <Menu.Item key="3"><Link to="/antdes">子导航二</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub4" title={<span><Icon type="appstore" /><span>导航三</span></span>}>
                            <Menu.Item key="4"><Link to="/gallery">子导航三</Link></Menu.Item>
                            <Menu.Item key="5"><Link to="/subpage">子导航四</Link></Menu.Item>
                        </SubMenu>
                        <Menu.Item key="6">
                            <Link to="/last"><span><Icon type="solution" /><span>结尾页</span></span></Link>
                        </Menu.Item>
                    </Menu>                    
                </div>
                <div id="rightWrap">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

// 配置路由
ReactDOM.render((
    <Router history={hashHistory} >
        <Route path="/" component={Init}>
            <IndexRoute component={Welcome}/>
            <Route path="profile" component={Profile} />
            <Route path="antdes" component={Antdes} />
            <Route path="gallery" component={Gallery} />
            <Route path="subpage" component={Subpage} />
            <Route path="last" component={Last} />
        </Route>
    </Router>
), document.querySelector('#init'))
