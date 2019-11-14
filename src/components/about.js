import React from 'react';

class AboutUs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('this.props', this.props)
        return (
            <div>
                About us
            </div>
        );
    }
}

export default AboutUs;
