import React from 'react';

class Childcom extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	windowWidth: window.innerWidth
        }
    }

    handleResize = (e) => {
      	this.setState({windowWidth: window.innerWidth});
      	this.props.getNum(window.innerWidth)
    }

    componentDidMount() {
      	window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
      	window.removeEventListener('resize', this.handleResize);
    }
    render() {
    	let widthStyle = {
    		verticalAlign: 'baseline',
    		fontSize: 30
    	}
      	return (
      	  <span style={widthStyle}>Current window width: {this.state.windowWidth}</span>
      	)
    }
}


class BoxWidth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	w:0
        }
    }

    getChildNum = (www) => {
    	this.setState({w:www});
    }

    render() {    	
      	return (
      		<div>
	      		<span>{this.state.w}</span>
      			<Childcom getNum={this.getChildNum} />
      		</div>
      	)
    }
}
export default BoxWidth;
