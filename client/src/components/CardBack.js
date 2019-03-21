import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react'


export default class CardBack extends Component {

  render() {
    return (
        <div className="card-back" onClick={this.props.handleClick}>
            <Card color='red' className="card-back">

                <Card.Content>
                    <Card.Header>This is Card back</Card.Header>
                    <Card.Meta>
                        <span className='vintage-region'>2015, Spain</span>
                    </Card.Meta>
                </Card.Content>
            </Card>
        </div>
    )
  }
}