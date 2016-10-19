import React from 'react';
import { browserHistory } from 'react-router'
import { Form, Input, Button, notification} from 'antd';

import './login.less'

const FormItem = Form.Item;

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
    }

    changeMe = (e) => {
        console.log(`checked = ${e.target.checked}`);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let n = this.props.form.getFieldsValue().username;
        let p = this.props.form.getFieldsValue().password;
        if (n === 'ilovejasonbai' && p === 'ilovejasonbai') {
            // 表单的路由处理
            browserHistory.push('/');            
        }
    }

    // 返回一个弹框对象
    openNotificationWithIcon = (type) => {
        return notification[type]({
                 message: '用户名&密码',
                 description: '都是：ilovejasonbai',
                 duration: 6
               })
    }

    componentDidMount() {
        this.openNotificationWithIcon('info');  
    }

    render() {  
        const { getFieldProps } = this.props.form;      
        return (
            <div id="loginpagewrap">
                <p>Sign in to PDB</p>
                <div id="loginWrap">                
                    <Form horizontal onSubmit={this.handleSubmit}>
                        <FormItem>
                            <Input placeholder="Username" {...getFieldProps('username')} />
                        </FormItem>
                        <FormItem>
                            <Input placeholder="Password" {...getFieldProps('password')} />
                        </FormItem>                    
                        <Button type="primary" htmlType="submit" id="loginBtn">Login</Button>
                    </Form>
                </div>
            </div>
        );
    }
}

let Login = Form.create()(LoginPage);
export default Login;

