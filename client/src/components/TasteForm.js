import React from 'react';
import { Grid, Rating, Image, Button } from 'semantic-ui-react';

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
      const category_explained = {
        "sweetness" : {
          1 : ["Bone dry", "<1g/L residual sugar", "Description on the rating"],
          2 : ["Dry", "1-10g/L residual sugar", "Description on the rating"],
          3 : ["Off-dry", "17-35g/L residual sugar", "Description on the rating"],
          4 : ["Sweet", "35-120g/L residual sugar", "Description on the rating"],
          5 : ["Very sweet", "120-220g/L residual sugar", "Description on the rating"]
        },
        "acidity" : {
          1 : ["Low", "4.5pH", "Description on the rating"],
          2 : ["Medium low", "4.0pH", "Description on the rating"],
          3 : ["Average", "3.5pH", "Description on the rating"],
          4 : ["Sour", "3.0pH", "Description on the rating"],
          5 : ["Very sour", "2.5pH", "Description on the rating"]
        },
        "tannin" : {
          1 : ["Low","Low", "Description on the rating"],
          2 : ["Medium low","Medium low", "Description on the rating"],
          3 : ["Average","Average", "Description on the rating"],
          4 : ["Astringent","Astringent", "Description on the rating"],
          5 : ["Very astringent","Very astringent", "Description on the rating"]
        },
        "alcohol" : {
          1 : ["Low", "<10% ABV", "Description on the rating"],
          2 : ["Medium low", "10-11.5% ABV", "Description on the rating"],
          3 : ["Average", "11.5-13.5% ABV", "Description on the rating"],
          4 : ["Medium high", "13.5-15% ABV", "Description on the rating"],
          5 : ["High", ">15% ABV"]
        },
        "body" : {
          1 : ["Very light","Very light", "Description on the rating"],
          2 : ["Light bodied","Light bodied", "Description on the rating"],
          3 : ["Average","Average", "Description on the rating"],
          4 : ["Medium full","Medium full", "Description on the rating"],
          5 : ["Full bodied","Full bodied", "Description on the rating"]
        }
      }

      return (
        <Grid textAlign='left'>

        {Object.keys(this.state).map(category=>{return(
          <Grid.Row >
            <Grid.Column width={2}>
              <Image src={`/${category}.jpg`} size='small' circular/>
            </Grid.Column>
            <Grid.Column width={2}>
              <h3>{category.charAt(0).toUpperCase()+category.slice(1)}</h3>
              <Rating name={category} rating={this.state[category]} maxRating={5} onRate={this.handleRatingChange}/>
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
            <Button color='dark grey' onClick={(event)=>this.props.addConcludingNote(event, this.state)}>Confirm</Button>
          </Grid.Column>
        </Grid.Row>
        </Grid>


      )
    }
}

export default TasteForm
