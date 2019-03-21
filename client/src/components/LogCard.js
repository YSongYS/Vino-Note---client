import React from 'react'
import CardFront from './CardFront';
import CardBack from './CardBack';

class LogCard extends React.Component {
    state = {
        isClicked: false
    }

    handleClick = () => {
        this.setState({isClicked: !this.state.isClicked})
    }

    render() {
        return (
            this.state.isClicked ? 
            <CardBack handleClick={this.handleClick}/> : 
            <CardFront handleClick={this.handleClick}/>
        )
    }
}

export default LogCard