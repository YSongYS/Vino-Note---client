import React from 'react';
import { Divider, Grid, Image, Container, Button, Form, Segment, Dropdown } from 'semantic-ui-react';
import CameraApp from './CameraApp'
import { options_Country, options_Variety, options_Price } from '../Library_terms'

/// build out the full list of options

class WineInfo extends React.Component {

    state = {
      name:"",
      vinatge:"",
      variety:"",
      winery:"",
      region:"",
      country:"",
      price_range:"",
      image:""
    }

    handleChange = (event) => {
      this.setState({
        [event.target.name]:event.target.value
      })
    }

    handleSelectChange = (event, {name, value}) => {
      this.setState({
        [name]:value
      })
    }

    onTakePhoto = (dataUri) => {
      this.setState({
        image: dataUri
      })
    }

    onCameraRetake = () => {
      this.setState({
        image: undefined
      })
    }

    render() {
      return (
        <div className="wine-info">
        <Grid celled='internally'>
          <Grid.Column width={11}>
              <CameraApp image={this.state.image} onCameraRetake={this.onCameraRetake} onTakePhoto={this.onTakePhoto}/>
          </Grid.Column>
          <Grid.Column width={5} textAlign='left'>
              {this.state.image? <Form onSubmit={(event)=>this.props.addNewWine(event, this.state)}>
                  <Form.Input label="Wine name" name="name" placeholder='Enter the name of the wine' value={this.state.name} onChange={this.handleChange}/>
                  <Form.Group>
                    <Form.Input width={5} label="Vintage" name="vintage" placeholder='Vintage' value={this.state.vintage} onChange={this.handleSelectChange}/>
                    <Form.Select width={11} label="Price range" name="price_range" options={options_Price} placeholder='price' value={this.state['price_range']} onChange={this.handleSelectChange}/>
                  </Form.Group>
                  <Form.Dropdown label="Grape" name="variety" options={options_Variety} placeholder='Grape' value={this.state.variety} onChange={this.handleSelectChange} labeled fluid multiple search selection/>
                  <Form.Dropdown label="Country" name="country" options={options_Country} placeholder='Country' value={this.state.country} onChange={this.handleSelectChange} labeled fluid multiple search selection/>


                  <Form.Input label="Region (optional)" name="region" placeholder='Region' value={this.state.region} onChange={this.handleChange}/>
                  <Form.Input label="Winery (optional)" name="winery" placeholder='Winery' value={this.state.winery} onChange={this.handleChange}/>
                  <br/>
                  <Button color='dark grey'>Start the note</Button>
              </Form>: null}
          </Grid.Column>
        </Grid>

        </div>
      )
    }
}

export default WineInfo
