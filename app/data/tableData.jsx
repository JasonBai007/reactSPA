import React from 'react';
import {Icon} from 'antd';
import Mock from 'mockjs';

// 配置列
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
    render:
        (text) => (
            <a href={text} target="_blank">{text}</a>
        )
}, {
    title: '点击量',
    dataIndex: 'clickNum'
},{
    title: '点击率',
    dataIndex: 'clickRate',
    render:
        (text) => (
            <span>{text}%</span>
        )
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
        () => (
            <span><Icon type="edit" />&nbsp;&nbsp;&nbsp;<Icon type="forward" />&nbsp;&nbsp;&nbsp;<Icon type="cross" /></span>
        )
}];

// 配置主体数据
let mockData = Mock.mock({
    'rowData|18-48':[{
        'name|1':['钢铁侠','蜘蛛侠','蝙蝠侠','蚁人','幻视','鹰眼','金刚狼','冬兵','吸血鬼','黑寡妇','超人','美国队长'],
        'key|+1':1,
        'status|1':['启用中','暂停中'],
        'exp|122-34542':22,
        'expURL':'@url',
        'clickNum|4522-9542':22,
        'clickRate|12-98':12,
        'clickPrice|1-198':12,
        'limit|50-250':50,
        'handle':''
    }]
});
let data = mockData.rowData;
export {data, columns};
