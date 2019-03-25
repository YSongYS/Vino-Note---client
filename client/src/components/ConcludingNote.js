import React from 'react';
import { Grid, Image, Button, Rating, Form, TextArea } from 'semantic-ui-react';
import CardFront from './CardFront'

/// build out the full list of options

class ConcludingNote extends React.Component {
    state = {
      rating:0,
      concluding_note:'',
      starred:false
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
            <CardFront />

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
