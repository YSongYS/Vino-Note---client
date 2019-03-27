import React from 'react';
import { Grid, Rating, Image, Button } from 'semantic-ui-react';
import { category_explained } from '../Library_terms'

/// build out the full list of options

class TasteForm extends React.Component {
    state = {
      sweetness:1,
      acidity:1,
      tannin:1,
      alcohol:1,
      body:1
    }

    handleRatingChange = (event, {rating, name}) => {
      this.setState({
        [name]:rating
      })
    }

    render() {

      return (
        <Grid textAlign='left'>

        {Object.keys(this.state).map(category=>{return(
          <Grid.Row >
            <Grid.Column width={2}>
              <Image src={`/${category}.jpg`} size='small' circular/>
            </Grid.Column>
            <Grid.Column width={3}>
              <h3>{category.charAt(0).toUpperCase()+category.slice(1)}</h3>
              <Rating name={category} rating={this.state[category]} maxRating={5} onRate={this.handleRatingChange} size='massive'/>
            </Grid.Column>
            <Grid.Column width={9}>
              <strong>{!!this.state[category]&&category_explained[category][this.state[category]][0]}</strong>
              <p>{!!this.state[category]&&category_explained[category][this.state[category]][1]}</p>
              <p>{!!this.state[category]&&category_explained[category][this.state[category]][2]}</p>
            </Grid.Column>
          </Grid.Row>
        )})}
        <Grid.Row textAlign='right'>

          <Grid.Column width={16}>
            <Button color='brown' onClick={(event)=>this.props.addTasteNote(event, this.state)}>Confirm</Button>
          </Grid.Column>
        </Grid.Row>
        </Grid>


      )
    }
}

export default TasteForm
