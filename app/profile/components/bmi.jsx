import React from 'react';
import {Input,Row,Col,Button,Form,Card } from 'antd';

const FormItem = Form.Item;

/* BMI计算器组件 */
class Bmi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          bmi:''
        }       
    } 
    // 提交
    handleSubmit = (e) => {
        e.preventDefault();
        console.log('收到表单值：', this.props.form.getFieldsValue());
        let w = this.props.form.getFieldsValue().weight;
        let h = this.props.form.getFieldsValue().height;
        let bmi = (w/((h/100)**2)).toFixed(1);
        this.setState({bmi:bmi});
    }
    // 重置
    handleReset = (e) => {
        e.preventDefault();
        this.props.form.resetFields();
        this.setState({bmi:''});
    }
     
  	render() {  
  		const { getFieldProps } = this.props.form;
  		let outstand = 'hehe'		
  	  	return (
  	  		<div style={{marginTop:80}}>
  	  			<Form horizontal>
  	  				<Row type="flex" justify="center" className="rowItem">
	  	  				<Col span={10}>
		  			  	 	<Input type="number" addonBefore="您的体重：" addonAfter="kg" {...getFieldProps('weight')} />	  	  		
	  	  				</Col>
  	  				</Row>
  	  				<Row type="flex" justify="center" className="rowItem">
	  	  				<Col span={10}>
	  	  					<Input type="number" addonBefore="您的身高：" addonAfter="cm" {...getFieldProps('height')} />
	  	  				</Col>
	  	  			</Row>
	  	  			<Row type="flex" justify="center" className="rowItem">
	  	  				<Col span={10}>
		  	  				<Button style={{width:'50%'}} htmlType="submit" onClick={this.handleSubmit}>计算</Button>
		  	  				<Button style={{width:'50%'}} onClick={this.handleReset}>重置</Button>
	  	  				</Col>
	  	  			</Row>
	  	  		</Form>
	  	  		<Row type="flex" justify="center" className="rowItem">
	  	  			<Col span={10}>
	  	  				<Input addonBefore="您的BMI：" value={this.state.bmi} id="red" />
	  	  			</Col>
	  	  		</Row>
	  	  		<Row type="flex" justify="center" className="rowItem">
  	  				<Col span={10}>
  	  					<Card bodyStyle={{ padding: 10,paddingLeft:40 }}>
  	  					    <p className={outstand}>偏瘦&nbsp;&nbsp;&nbsp;&nbsp;{'<18.5'}</p>
  	  					    <p className={outstand}>正常&nbsp;&nbsp;&nbsp;&nbsp;{'18.5-24.9'}</p>
  	  					    <p className={outstand}>超重&nbsp;&nbsp;&nbsp;&nbsp;{'≥25'}</p>
  	  					    <p className={outstand}>偏胖&nbsp;&nbsp;&nbsp;&nbsp;{'25.0～29.9'}</p>
  	  					    <p className={outstand}>肥胖&nbsp;&nbsp;&nbsp;&nbsp;{'30.0～34.9'}</p>
  	  					</Card>
  	  				</Col>
  	  			</Row>
	  	  		
	  	  	</div>
  	  	);
  	}
}

Bmi = Form.create()(Bmi);
export default Bmi;

