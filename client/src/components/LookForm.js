import React from 'react';
import { Divider, Grid, Button, Rating, Icon  } from 'semantic-ui-react';
import { white_colors, red_colors, rose_colors } from '../Library_terms'

/// build out the full list of options

class LookForm extends React.Component {

    state = {
      colorCode: "#D3D3D3",
      colorName: "Not yet selected",
      clarity: 3,
      viscosity: 2
    }

    handleSelectColor = (color,white_colors,rose_colors,red_colors) => {
      const colorCode = color
      const colorName = (white_colors[color]+rose_colors[color]+red_colors[color]).split('undefined').join('')
      this.setState({
        colorCode:colorCode,
        colorName:colorName
      })
    }

    handleClarityChange = (event) => {
      this.setState({
        clarity:event.target.value
      })
    }

    handleViscosityChange = (event) => {
      this.setState({
        viscosity:event.target.value
      })
    }

    render() {

      return (
        <div>
        <Grid columns='two' divided>
          <Grid.Column rows={3} width={10}>
          <div className='color_plate_container'>
          <strong>White colors</strong>
           <Grid.Row columns={6}>
           {Object.keys(white_colors).slice(0,6).map(color=>{
             return(
               <span className='color_plate' style={{backgroundColor:`${color}`}} onClick={()=>this.handleSelectColor(color,white_colors,rose_colors,red_colors)}></span>
             )
           })}
           </Grid.Row>
           <Grid.Row columns={6}>
           {Object.keys(white_colors).slice(6,12).map(color=>{
             return(
               <span className='color_plate' style={{backgroundColor:`${color}`}} onClick={()=>this.handleSelectColor(color,white_colors,rose_colors,red_colors)}></span>
             )
           })}
           </Grid.Row>
           <br/>
           <strong>Rose colors</strong>
           <Grid.Row columns={6}>
           {Object.keys(rose_colors).slice(0,6).map(color=>{
             return(
               <span className='color_plate' style={{backgroundColor:`${color}`}} onClick={()=>this.handleSelectColor(color,white_colors,rose_colors,red_colors)}></span>
             )
           })}
           </Grid.Row>
           <Grid.Row columns={6}>
           {Object.keys(rose_colors).slice(6,12).map(color=>{
             return(
               <span className='color_plate' style={{backgroundColor:`${color}`}} onClick={()=>this.handleSelectColor(color,white_colors,rose_colors,red_colors)}></span>
             )
           })}
           </Grid.Row>
           <br/>
           <strong>Red colors</strong>
           <Grid.Row columns={6}>
           {Object.keys(red_colors).slice(0,6).map(color=>{
             return(
               <span className='color_plate' style={{backgroundColor:`${color}`}} onClick={()=>this.handleSelectColor(color,white_colors,rose_colors,red_colors)}></span>
             )
           })}
           </Grid.Row>
           <Grid.Row columns={6}>
           {Object.keys(red_colors).slice(6,12).map(color=>{
             return(
               <span className='color_plate' style={{backgroundColor:`${color}`}} onClick={()=>this.handleSelectColor(color,white_colors,rose_colors,red_colors)}></span>
             )
           })}
           </Grid.Row>
           </div>
          </Grid.Column>
          <Grid.Column width={6}>
          <strong>Color Selected</strong>
            <br/>
            <div className='selected_color' >
              <img src={`/${this.state.colorName.split(' ').join('_')}.png`} alt=''></img>
              <br/>
              <span className='color_plate' style={{backgroundColor:`${this.state.colorCode}`}}></span>
              <h3>{this.state.colorName}</h3><br /><br />
              <strong> Clarity </strong>
              <Rating size='large' rating={this.state.clarity} maxRating={5}/><br /><br />
              <input type='range' min={0} max={5} value={this.state.clarity} onChange={this.handleClarityChange} /><br /><br /><br />
              <strong> Viscosity </strong>
              <Rating size='large' rating={this.state.viscosity} maxRating={5}/><br /><br />
              <input type='range' min={0} max={5} value={this.state.viscosity} onChange={this.handleViscosityChange} /><br /><br /><br />
              <Button color='dark grey' onClick={(event)=>this.props.addLookNote(event, this.state)}>Confirm</Button>
            </div>
          </Grid.Column>
        </Grid>
        </div>
      )
    }
}

export default LookForm
