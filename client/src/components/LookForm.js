import React from 'react';
import { Divider, Grid, Button, Rating, Icon  } from 'semantic-ui-react';

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
      const white_colors = {
         "#f4f3de":"Pale Straw",
         "#ebe4b3":"Medium Straw",
         "#e3de9a":"Deep Straw",
         "#f5f3b6":"Pale Yellow",
         "#f5ed80":"Medium Yellow",
         "#f0dc47":"Deep Yellow",
         "#f0e2a1":"Pale Gold",
         "#f3e395":"Medium Gold",
         "#f2cb56":"Deep Gold",
         "#dca437":"Pale Brown",
         "#af6329":"Medium Brown",
         "#935129":"Deep Brown"
      }
      const rose_colors = {
         "#fbc450":"Pale Amber",
         "#f29e24":"Medium Amber",
         "#e37727":"Deep Amber",
         "#f3cdac":"Pale Cooper",
         "#f49f66":"Medium Cooper",
         "#e06d34":"Deep Cooper",
         "#efbaac":"Pale Salmon",
         "#f39e8e":"Medium Salmon",
         "#ef7a5e":"Deep Salmon",
         "#f5d4d5":"Pale Pink",
         "#f1a4a8":"Medium Pink",
         "#f3858b":"Deep Pink",
      }
      const red_colors = {
         "#a21d3c":"Pale Ruby",
         "#891b34":"Medium Ruby",
         "#701b2a":"Deep Ruby",
         "#a11d46":"Pale Purple",
         "#581930":"Medium Purple",
         "#2b121a":"Deep Purple",
         "#c92f27":"Pale Garnet",
         "#ac2529":"Medium Garnet",
         "#671514":"Deep Garnet",
         "#a83e25":"Pale Tawny",
         "#9c3c23":"Medium Tawny",
         "#702017":"Deep Tawny"
      }

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
           <hr></hr>
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
           <hr></hr>
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
              <img src={`/${this.state.colorName.split(' ').join('_')}.png`}></img>
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
