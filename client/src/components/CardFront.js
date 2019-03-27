import React, { Component } from 'react';
import { Card, Flag} from 'semantic-ui-react'


////// need to streamline the FLAG display/////////////////////////

export default class CardFront extends Component {

  render() {
    return (
        <div className="card-front" onClick={this.props.handleClick}>
            {!!this.props.wineInfo && <Card color='red' className="card-front">
                <div className='card-image-front'
                    style={{backgroundImage: `url(${this.props.wineInfo.image})`}}
                >
                </div>
                <Card.Content>
                    <Card.Header>{this.props.wineInfo.name.split(' ').map(s=>s[0].toUpperCase()+s.slice(1)).join(' ')}</Card.Header>
                    <Card.Meta>
                        <span className='region-vintage'><Flag name='spain' />  {this.props.wineInfo.vintage}</span>
                    </Card.Meta>
                </Card.Content>
            </Card>}
        </div>
    )
  }
}
