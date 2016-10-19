import React from 'react';
import { Form, Input, Button,Radio } from 'antd';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log('Received values of form:', this.props.form.getFieldsValue());
    }
    render() {  
        const { getFieldProps } = this.props.form;      
        return (
            <div>
                <Form horizontal onSubmit={this.handleSubmit}>
                    <FormItem>
                        <Input placeholder="text" {...getFieldProps('userName')} />
                    </FormItem>
                    <FormItem>
                        <Input placeholder="text2" {...getFieldProps('userName2')} />
                    </FormItem>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form>
            </div>
        );
    }
}

let Login = Form.create()(LoginPage);
export default Login;

