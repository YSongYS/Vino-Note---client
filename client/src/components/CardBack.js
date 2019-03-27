import React, { Component } from 'react';
import { Card, Button, Rating } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';
import LogDetail from './LogDetail';


export default class CardBack extends Component {
    state = {
        detailClicked: false
    }

    handleClick = (event) => {
        event.stopPropagation()
        this.setState({detailClicked: true})
    }

    render() {
        return (
            <div
                className="card-back"
                onClick={this.props.handleClick}
                >
                <Card color='red' className="card-back">
                <Card.Content extra className='name-back'>
                    {this.props.wineInfo.name.split(' ').map(s=>s[0].toUpperCase()+s.slice(1)).join(' ')}
                </Card.Content>
                <Card.Content className='rating-back'>
                    <h1>Rating</h1>
                    <br />
                    <Rating maxRating={5} rating={this.props.logInfo.rating} icon='star' size='massive' disabled/>
                </Card.Content>
                <Card.Content className='review-back'>
                    <h1>Comment</h1>
                    <br />
                    {this.props.logInfo.concluding_note}
                </Card.Content>
                <Card.Content extra>
                        <Button basic fluid color='black' onClick={this.handleClick}>Detail</Button>
                </Card.Content>
                </Card>

                {this.state.detailClicked ? <LogDetail wineInfo={this.props.wineInfo} logInfo={this.props.logInfo}/> : null}
            </div>
        )
    }
}
