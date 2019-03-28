import React from 'react';
import { Grid, Image, Button, Rating, Form, TextArea, Header } from 'semantic-ui-react';
import { white_colors, red_colors, rose_colors } from '../Library_terms'
import API from '../API';

/// build out the full list of options
// props: addConcludingNote, wine_id, look_id, smell_id, taste_id
class ConcludingNote extends React.Component {
    state = {
      rating: 0,
      concluding_note: '',
      starred: false,

      wineInfo: undefined,
      lookInfo: undefined,
      smellInfo: undefined,
      tasteInfo: undefined
    }

    getInfo = (model, modelId) => {
      API.simpleShowFetch(model, modelId)
        .then(modelInfo => this.setState({
          [`${model}Info`]: {...modelInfo}
        }))
    }

    componentDidMount() {
      this.getInfo("wine", 8)
      this.getInfo("look", 7)
      this.getInfo("smell", 7)
      this.getInfo("taste", 7)
    }

    handleRatingChange = (event, {rating}) => {
      this.setState({
        rating:rating
      })
    }

    handleNoteChange = (event) => {
      this.setState({
        concluding_note:event.target.value
      })
    }

    handleStarredChange = (event) => {
      this.setState({
        starred:!this.state.starred
      })
    }

    render() {
      return (
        <Grid textAlign='left'>
          <Grid.Column width={5}>
            <div className='final-log-info'>
            { Object.values(this.state).includes(undefined) ? null :
              <>
                <Image wrapped size='medium' src={this.state.wineInfo.image} />
                <Header>{this.state.wineInfo.name.split(' ').map(s=>s[0].toUpperCase()+s.slice(1)).join(' ')}</Header>
                <p>{this.state.wineInfo.vintage}, {this.state.wineInfo.country}</p>
                <p>{"$".repeat(this.state.wineInfo.price_range)}</p>

                <Header>Look</Header>
                {this.state.lookInfo && <div>
                  <p><span className='color_plate_small' style={{backgroundColor:`${this.state.lookInfo.color}`}}></span>{(white_colors[this.state.lookInfo.color]+rose_colors[this.state.lookInfo.color]+red_colors[this.state.lookInfo.color]).split('undefined').join('')}</p>
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
              </>
            }
            </div>
          </Grid.Column>

          <Grid.Column width={10}>
            <Grid.Row>
                <p></p>
                <h1>Overall Rating</h1>
                <Rating rating={this.state.rating} maxRating={5} onRate={this.handleRatingChange} size='massive' icon='star'/>
            </Grid.Row>

            <Grid.Row>
              <br/>
              <Form>
                <TextArea placeholder='Note down some final thoughts' value={this.state.concluding_note} style={{minHeight: 210}} onChange={this.handleNoteChange}/>
              </Form>
              <br/>
              <span>Like the wine? Add to favorites  </span>
              <Rating icon='heart' size='large' onRate={this.handleStarredChange}/>
            </Grid.Row>
            <br/>
            <Button color='dark grey' onClick={(event)=>this.props.addConcludingNote(event, this.state)}>Confirm</Button>
          </Grid.Column>
        </Grid>
      )
    }
}

export default ConcludingNote
