import React from 'react';

export default class NotFoundPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
      return (
        <div>
            <p>OOPS! - Could not Find it</p>
            <h1>404</h1>
        </div>
      );
    }
}

