import React, { Component } from 'react';
import { Card, Button, Icon } from 'semantic-ui-react'


export default class CardBack extends Component {

  render() {
    return (
        <div 
            className="card-back" 
            onClick={this.props.handleClick}
            >
            <Card color='red' className="card-back">
            <Card.Content extra className='name-back'>
                This is back
            </Card.Content>
            <Card.Content className='rating-back'>
                Rating
                <br></br>
                <Icon name='star' />
                <Icon name='star' />
                <Icon name='star' />
                <Icon name='star' />
                <Icon name='star' />
            </Card.Content>
            <Card.Content className='review-back'>
                This is the best wine I've ever tried!
            </Card.Content>
            <Card.Content extra>
                <Button basic fluid color='black'>Detail</Button>
            </Card.Content>
            </Card>
        </div>
    )
  }
}