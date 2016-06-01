import React from 'react';
import {Button,Checkbox,Select,Radio,Switch,Form,Row,Col,Icon,Modal,Input,InputNumber,Cascader,Tooltip } from 'antd';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

class Editform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((errors, values) => {
            if (!!errors) {
              console.log('Errors in form!!!');
              return;
            }
            console.log('Submit!!!');
            console.log(values);
        });
    }
    handleReset = (e) => {
        e.preventDefault();
        this.props.form.resetFields();
    }

    render() {
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 10 },
        };

        const { getFieldProps, getFieldError, isFieldValidating } = this.props.form;

        const nameProps = getFieldProps('planName', {
            rules: [
                { required: true, min:5, message: '真的不打算写点什么吗？' },
            ]
        });
        return (
            <div style={{padding:"10px 20px",marginTop:20}}>
                <Form horizontal form={this.props.form}>
                    <FormItem 
                        {...formItemLayout} 
                        label="推广计划名称：">
                        <Input type="text" {...getFieldProps('planName')} {...nameProps} name="planName" id="planName" />
                    </FormItem> 
                    <FormItem wrapperCol={{ span: 12, offset: 7 }} >
                        <Button type="primary" onClick={this.handleSubmit}>确定</Button>&nbsp;&nbsp;&nbsp;                      
                        <Button type="ghost" onClick={this.handleReset}>重置</Button>
                    </FormItem>                                     
                </Form>          
            </div>
        );
    }
}

let EditForm = Form.create()(Editform);
export default EditForm;