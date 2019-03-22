import React from 'react';
import { Divider, Grid, Image, Container, Button, Form, Segment } from 'semantic-ui-react';

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

      const options_Vintage = [
        {key:1,text:'2019',value:2019},
        {key:2,text:'2018',value:2018},
        {key:3,text:'2017',value:2017}
      ]

      const options_Price = [
        {key:1,text:'$',value:1},
        {key:2,text:'$$',value:2},
        {key:3,text:'$$$',value:3},
        {key:4,text:'$$$$',value:4}
      ]
      return (
        <div className="wine-info">
        <Grid columns={2} relaxed='very'>
          <Grid.Column verticalAlign='middle'>
              <div className='scan-form'>
                  <Button content="Scan Barcode" size='big' positive/>
              </div>
          </Grid.Column>
          <Grid.Column>
              <Form onSubmit={(event)=>this.props.addNewWine(event, this.state)}>
                  <Form.Input label="Wine name" name="name" placeholder='Enter the name of the wine' value={this.state.name} onChange={this.handleChange}/>
                <Form.Group >
                  <Form.Select label="Vintage" name="vintage" options={options_Vintage} placeholder='Vintage' value={this.state.vintage} onChange={this.handleSelectChange}/>
                  <Form.Select label="Price range" name="price_range" options={options_Price} placeholder='price' value={this.state['price_range']} onChange={this.handleSelectChange}/>
                </Form.Group>
                <Form.Group >
                  <Form.Select label="Grape" name="variety" options={options_Variety} placeholder='Grape' value={this.state.variety} onChange={this.handleSelectChange}/>
                  <Form.Select label="Country" name="country" options={options_Country} placeholder='Country' value={this.state.country} onChange={this.handleSelectChange}/>
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Input label="Region" name="region" placeholder='Region' width={6} value={this.state.region} onChange={this.handleChange}/>
                  <Form.Input label="Winery" name="winery" placeholder='Winery' width={10} value={this.state.winery} onChange={this.handleChange}/>
                </Form.Group>
                  <Form.Input label="Image" name="image" placeholder='Image_url' value={this.state.image} onChange={this.handleChange}/>
                  <Button color='dark grey'>Start the note</Button>
              </Form>
          </Grid.Column>
        </Grid>

        <Divider vertical>OR</Divider>
        </div>
      )
    }
}

export default WineInfo
