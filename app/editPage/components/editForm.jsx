import React from 'react';
import {Button,Checkbox,Select,Radio,Switch,Form,Row,Col,Icon,Modal,Input,InputNumber,Cascader } from 'antd';

import './editForm.less';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;

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

    checkNum = (rule, value, callback) => {
        if(value <1000000 || value >9999999) {
            callback(new Error('请输入7位数字'));
        } else {
            callback();
        }
    }

    render() {
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 10 },
        };
        const { getFieldProps, getFieldError, isFieldValidating } = this.props.form;

        {/*校验配置*/}
        const nameProps = getFieldProps('planName', {
            rules: [
                { required: true, max:120, message: '必填，且小于120个字符' }
            ]
        });
        const idProps = getFieldProps('planId', {
            rules: [
                { validator:this.checkNum }
            ]
        });
        const radioProps = getFieldProps('status', {            
            initialValue:'qidong'
        });
        const baoProps = getFieldProps('baoguang', {
            rules: []
        });
        const baourlProps = getFieldProps('baoUrl', {
            rules: []
        });
        return (
            <div id="formWrapper">
                <Form horizontal form={this.props.form}>
                    <FormItem {...formItemLayout} label="系列名称：" hasFeedback>
                        <Input type="text" {...nameProps} name="planName" />
                    </FormItem>
                    <FormItem {...formItemLayout} label="系列ID：">
                        <InputNumber {...idProps} name="planId" />
                    </FormItem>
                    <FormItem {...formItemLayout} label="投放状态：">
                        <RadioGroup {...radioProps} name="status">
                            <RadioButton value="qidong">启动中</RadioButton>
                            <RadioButton value="zanting">暂停中</RadioButton>
                        </RadioGroup>
                    </FormItem>
                    <FormItem {...formItemLayout} label="曝光量：">
                        <InputNumber {...baoProps} name="baoguang" />
                    </FormItem>
                    <FormItem {...formItemLayout} label="曝光URL：">
                        <Input {...baourlProps} type="url" name="baoUrl" />
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