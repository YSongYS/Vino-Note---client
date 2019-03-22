import React, { Component } from 'react';
import { Card, Flag } from 'semantic-ui-react'

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
                    <Card.Header>Rioja Reserva 2014 Muga</Card.Header>
                    <Card.Meta>
                        <span className='region-vintage'><Flag name='spain' /> 2014</span>
                    </Card.Meta>
                </Card.Content>
            </Card>
        </div>
    )
  }
}