import React from 'react';

/*页面标题组件，可传参*/
export default class Title extends React.Component {
    constructor(props) {
        super(props);
    } 

    handleOver = (e) => {
        this.props.onMouseOver(e);
    }   

    render() {
        const titleStyle = {
            padding:'5px 20px',
            background:'#ECECEC',
            marginBottom: 10,
            letterSpacing:4,
            borderRadius:5,
            overflow:'hidden',
        };
        let props = {
            onMouseOver:this.handleOver,
        }
        return (
            <div style={titleStyle} {...this.props} ><h2>{this.props.titleName}</h2></div>
        )
    }
}
        