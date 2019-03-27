import React from 'react'
import { Header, Image, Modal, Button, Icon, Rating, Divider } from 'semantic-ui-react'

class LogDetail extends React.Component {
    state = {
        open: true,
        liked: this.props.logInfo.starred,
        smellInfo: undefined,
        lookInfo: undefined,
        tasteInfo: undefined
    }
    /////// building the update logInfo later for changing likes

    onClose = () => {
        this.setState({open: false})
    }

    onEdit = () => {
        console.log("Go to pre-filled LogForm page")
    }

    getInfo = (model, modelId) => {
      const url = `http://localhost:3000/${model}s/${modelId}`
      return fetch(url)
        .then(res => res.json())
        .then(modelInfo => this.setState({
          [`${model}Info`]: {...modelInfo}
        }))
    }

    componentDidMount(){
      this.getInfo("smell", this.props.logInfo.smell_id)
      this.getInfo("look", this.props.logInfo.look_id)
      this.getInfo("taste", this.props.logInfo.taste_id)
    }

    render() {
        return (
            <div>
                <Modal open={this.state.open}>
                    <Modal.Header>
                        Wine Log
                        {
                            this.state.liked ?
                            <Icon name='like' color='red' style={{float: 'right'}}></Icon> :
                            null
                        }
                    </Modal.Header>
                    <Modal.Content image>
                        <Image wrapped size='medium' src={this.props.wineInfo.image} />
                        <Modal.Description>
                            <Header>Wine Info</Header>
                            <p>{this.props.wineInfo.name.split(' ').map(s=>s[0].toUpperCase()+s.slice(1)).join(' ')}</p>
                            <p>{this.props.wineInfo.vintage}, {this.props.wineInfo.country}</p>
                            <p>{"$".repeat(this.props.wineInfo.price_range)}</p>
                            <p><Rating maxRating={5} rating={this.props.logInfo.rating} icon='star' size='large' /></p>

                            <Header>Look</Header>
                            {this.state.lookInfo && <div>
                              <p>{this.state.lookInfo.color}</p>
                              <p>Clarity <Rating rating={this.state.lookInfo.clarity} maxRating={5} size='mini' disabled/></p>
                              <p>Viscosity <Rating rating={this.state.lookInfo.viscosity} maxRating={5} size='mini' disabled/></p>
                            </div>}

                            <Header>Smell</Header>
                            {this.state.smellInfo && <div>
                              <p>Primary: {this.state.smellInfo.primary_level_two} - {this.state.smellInfo.primary_level_three}</p>
                              <p>Secondary: {this.state.smellInfo.secondary_level_two} - {this.state.smellInfo.secondary_level_three}</p>
                              <p>Tertiary: {this.state.smellInfo.tertiary_level_two} - {this.state.smellInfo.tertiary_level_three}</p>
                              <p>Flaws: {this.state.smellInfo.flaw_level_two} - {this.state.smellInfo.flaw_level_three}</p>
                            </div>}

                            <Header>Taste</Header>
                            {this.state.tasteInfo && <div>
                              <p>Sweetness <Rating rating={this.state.tasteInfo.sweetness} maxRating={5} size='mini' disabled/></p>
                              <p>Acidity <Rating rating={this.state.tasteInfo.acidity} maxRating={5} size='mini' disabled/></p>
                              <p>Tannin <Rating rating={this.state.tasteInfo.tannin} maxRating={5} size='mini' disabled/></p>
                              <p>Alcohol <Rating rating={this.state.tasteInfo.alcohol} maxRating={5} size='mini' disabled/></p>
                              <p>Body <Rating rating={this.state.tasteInfo.body} maxRating={5} size='mini' disabled/></p>
                            </div>}

                            <Header>Concluding Note</Header>
                            <p>{this.props.logInfo.concluding_note}</p>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='green' onClick={this.onEdit}>
                            Edit
                        </Button>
                        <Button color='red' onClick={this.onClose}>
                            Close
                        </Button>
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}

export default LogDetail
