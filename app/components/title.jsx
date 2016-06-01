import React from 'react';

export default class Title extends React.Component {
    constructor(props) {
        super(props);
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
        return (
            <div style={titleStyle}><h2>{this.props.titleName}</h2></div>
        )
    }
}
        