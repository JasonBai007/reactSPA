import React from 'react';
import { browserHistory } from 'react-router'
import { Form, Input, Button } from 'antd';

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
        console.log('Received values of form:', this.props.form.getFieldsValue());
        // 表单的路由处理
        browserHistory.push('/');
    }

    render() {  
        const { getFieldProps } = this.props.form;      
        return (
            <div id="loginpagewrap">
                <p>Sign in to PDB</p>
                <div id="loginWrap">                
                    <Form horizontal onSubmit={this.handleSubmit}>
                        <FormItem>
                            <Input placeholder="Username" {...getFieldProps('userName')} />
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

