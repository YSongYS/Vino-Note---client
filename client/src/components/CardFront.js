import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react'

export default class CardFront extends Component {

  render() {
    return (
        <div className="card-front" onClick={this.props.handleClick}>
            <Card color='red' className="card-front">
                <div className='card-image-front'
                    style={{backgroundImage: 'url("https://cdn1.wine-searcher.net/images/labels/33/31/monte-xanic-cabernet-sauvignon-merlot-valle-de-guadalupe-mexico-10353331.jpg")'}}
                >
                </div>
                <Card.Content>
                    <Card.Header>Wine Name</Card.Header>
                    <Card.Meta>
                        <span className='vintage-region'>2015, Spain</span>
                    </Card.Meta>
                </Card.Content>
            </Card>
        </div>
    )
  }
}