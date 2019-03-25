import React from 'react';
import { Divider, Grid, Image, Container, Button, Form, Segment, Dropdown } from 'semantic-ui-react';
import CameraApp from './CameraApp'

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
      const options_Country = [
        {key:1,text:'France',value:'France'},
        {key:2,text:'Australia',value:'Australia'},
        {key:3,text:'Spain',value:'Spain'}
      ]

      const options_Variety = [
        {key:1,text:'Shiraz',value:'Shiraz'},
        {key:2,text:'Pinot noir',value:'Pinot noir'},
        {key:3,text:'Cabernet',value:'Cabernet'}
      ]

      const options_Price = [
        {key:1,text:'$',value:1},
        {key:2,text:'$$',value:2},
        {key:3,text:'$$$',value:3},
        {key:4,text:'$$$$',value:4}
      ]
      return (
        <div className="wine-info">
        <Grid celled>
          <Grid.Column width={11}>
              <CameraApp image={this.state.image} onCameraRetake={this.onCameraRetake} onTakePhoto={this.onTakePhoto}/>
          </Grid.Column>
          <Grid.Column width={5} textAlign='left'>
              <Form onSubmit={(event)=>this.props.addNewWine(event, this.state)}>
                  <Form.Input label="Wine name" name="name" placeholder='Enter the name of the wine' value={this.state.name} onChange={this.handleChange}/>

                  <Form.Input label="Vintage" name="vintage" placeholder='Vintage' value={this.state.vintage} onChange={this.handleSelectChange}/>
                  <Form.Select label="Price range" name="price_range" options={options_Price} placeholder='price' value={this.state['price_range']} onChange={this.handleSelectChange}/>


                  <Form.Select label="Grape" name="variety" options={options_Variety} placeholder='Grape' value={this.state.variety} onChange={this.handleSelectChange}/>
                  <Form.Select label="Country" name="country" options={options_Country} placeholder='Country' value={this.state.country} onChange={this.handleSelectChange}/>


                  <Form.Input label="Region" name="region" placeholder='Region' width={6} value={this.state.region} onChange={this.handleChange}/>
                  <Form.Input label="Winery" name="winery" placeholder='Winery' width={10} value={this.state.winery} onChange={this.handleChange}/>

                  <Button color='dark grey'>Start the note</Button>
              </Form>
          </Grid.Column>
        </Grid>

        </div>
      )
    }
}

export default WineInfo
