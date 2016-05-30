import React from 'react';
import {Button,Checkbox,DatePicker,Select,Switch,Form,Row,Col,Table,Icon,message,notification } from 'antd';
import { Link } from 'react-router'

// 引入标准Fetch及IE兼容依赖
import 'whatwg-fetch';
import 'es6-promise/dist/es6-promise.min.js';
import 'fetch-ie8/fetch.js';

import './antdes.css';

const FormItem = Form.Item;
const Option = Select.Option;
const RangePicker = DatePicker.RangePicker;

// 定义列


export default class Antdes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selV: [''],
            selValue:'',
            sDate:'',
            eDate:'',
            ischecked: false,
            visible: false,
            tData:[],
            loading: true
        }        
    }
    
    // 选择广告系列
    selChange = (value) => {        
        this.setState({selValue: value});
    }

    // 选择日期范围
    dateChange = (value) => {
        this.setState({sDate: value[0].toLocaleDateString()});
        this.setState({eDate: value[1].toLocaleDateString()});
    }

    // 过滤无数据广告
    checkChange = (e) => {
        this.setState({ischecked: e.target.checked});
        if(e.target.checked == true) {
            message.config({top: 5});
            message.warning('过滤无数据广告已开启！');            
        }
    }

    // 查询提示框
    confirmMsg = () => {           
        this.setState({tData:[],loading:true});
        this.fetchTableData();
    } 

    // 行单击事件
    rowClick = (e) => {
        console.log(e.key);
    }

    // 获取表格数据
    fetchTableData = () => {
        fetch('data/tableData.json')
            .then((res) => { console.log(res.status);return res.json(); })
            .then((data) => { this.setState({loading:false});this.setState({tData:data.rowData}); })
            .catch((e) => { console.log(e.message);});
    }

    // 获取下拉框数据
    fetchSelData = () => {
        fetch('data/selectData.json')
            .then((res) => { console.log(res.status);return res.json(); })
            .then((data) => { this.setState({selV:data.obj}); })
            .catch((e) => { console.log(e.message); });
    }

    // 组件渲染后获取外界数据(GET)
    componentDidMount() {
        this.fetchSelData();
        this.fetchTableData();
    }
    
    render() {  

        /*定义表格列*/
        const columns = [{
            title: '系列名称',
            dataIndex: 'name'  
        }, {
            title: '系列ID',
            dataIndex: 'key'
        }, {
            title: '投放状态',
            dataIndex: 'status'
        }, {
            title: '曝光量',
            dataIndex: 'exp'
        },{
            title: '曝光URL',
            dataIndex: 'expURL',
            render: (text) => ( <a href={text} target="_blank">{text}</a> )
        }, {
            title: '点击量',
            dataIndex: 'clickNum'
        },{
            title: '点击率',
            dataIndex: 'clickRate',
            render: (text) => ( <span>{text}%</span> )
        }, {
            title: '点击均价',
            dataIndex: 'clickPrice'
        }, {
            title: '投放限额',
            dataIndex: 'limit'
        }, {
            title: '操作',
            dataIndex: 'handle',
            render: 
                (t,r,i) => (
                    <span><Icon type="edit"/>&nbsp;&nbsp;&nbsp;<Icon type="forward" />&nbsp;&nbsp;&nbsp;<Icon type="cross" /></span>
                )
        }];

        /*控制查询按钮状态*/
        let isDisabled = (
            this.state.selValue ==='' || 
            this.state.sDate ==='' ||
            this.state.eDate ==='' ?
            true : false
        );
       
        return (
            <div id="wrap">
                <div id="header">
                    <Form inline>
                        <Row type="flex" justify="start" gutter={16} align="middle">
                            <Col span="5">
                                <Select onChange={this.selChange} placeholder="请选择广告系列" size="large">                                   
                                    {
                                        this.state.selV.map((v,i) => {
                                            return <Option key={i} value={v}>{v}</Option>                                                    
                                        })
                                    }
                                </Select>
                            </Col>
                            <Col span="5">
                                <FormItem>
                                    <RangePicker onChange={this.dateChange} />
                                </FormItem>
                            </Col>
                            <Col span="3">
                                <FormItem>
                                    <Checkbox defaultChecked={false} onChange={this.checkChange}>过滤无数据广告</Checkbox>
                                </FormItem>
                            </Col>
                            <Col span="2">
                                <FormItem>
                                    <Button onClick={this.confirmMsg} disabled={isDisabled}>查询</Button>
                                </FormItem>
                            </Col>
                            <Col span="3" push="5">
                                <FormItem>
                                    <Button type="primary" size="large">新建广告系列</Button>
                                </FormItem>
                            </Col>

                        </Row>
                    </Form>
                </div>
                <div id="table">
                    <Table 
                        rowSelection={{}} 
                        dataSource={this.state.tData} 
                        columns={columns} 
                        size="middle" 
                        pagination={{size:'large'}} 
                        onRowClick={this.rowClick}
                        loading={this.state.loading}
                    />                   
                </div>                                             
            </div>
        )
  }
}
