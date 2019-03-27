import React from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react';
import WineInfo from '../components/WineInfo';
import LookForm from '../components/LookForm';
import SmellForm from '../components/SmellForm';
import TasteForm from '../components/TasteForm';
import ConcludingNote from '../components/ConcludingNote';
import API from '../API';


class LogForm extends React.Component {

    state = {
      activeItem:'Wine',
      wine_id:undefined
    }

    addNewWine = (event, wineInfo) => {
      event.preventDefault()
      API.createWine(wineInfo)
        .then(wine => this.setState({
          wine_id:wine.id,
          activeItem:'Look'
        }))
    }

    addLookNote = (event, lookInfo) => {
      API.findLook(lookInfo)
        .then(look => this.setState({
          looks_id:look.id,
          activeItem:'Smell'
        }))
    }

    addTasteNote = (event, tasteInfo) => {
      API.findTaste(tasteInfo)
        .then(taste => this.setState({
          taste_id:taste.id,
          activeItem:'Concluding note'
        }))
    }

    addSmellNote = (event, smellInfo) => {
      event.preventDefault()
      console.log(smellInfo)
    }

    addConcludingNote = (event, concludingInfo) => {
      event.preventDefault()
      console.log(concludingInfo)
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

      // !!this.state.wine_id reinsert back to the render of react fragment
    render() {
        return (
          <Grid>
              <Grid.Column width={2}>
                  <Menu fluid vertical tabular>
                    <Menu.Item name='Wine' active={this.state.activeItem === 'Wine'} onClick={this.handleItemClick} />
                    {true? <React.Fragment><Menu.Item name='Look' active={this.state.activeItem === 'Look'} onClick={this.handleItemClick} />
                    <Menu.Item name='Smell' active={this.state.activeItem === 'Smell'} onClick={this.handleItemClick} />
                    <Menu.Item name='Taste' active={this.state.activeItem === 'Taste'} onClick={this.handleItemClick} />
                    <Menu.Item name='Concluding note' active={this.state.activeItem === 'Concluding note'} onClick={this.handleItemClick} />
                    </React.Fragment> : null}
                  </Menu>
              </Grid.Column>

              <Grid.Column stretched width={14}>
                  <div>
                    {this.state.activeItem === 'Wine'? <WineInfo addNewWine={this.addNewWine}/> : <div></div>}
                    {this.state.activeItem === 'Look'? <LookForm addLookNote={this.addLookNote}/> : <div></div>}
                    {this.state.activeItem === 'Smell'? <SmellForm addSmellNote={this.addSmellNote}/> : <div></div>}
                    {this.state.activeItem === 'Taste'? <TasteForm addTasteNote={this.addTasteNote}/> : <div></div>}
                    {this.state.activeItem === 'Concluding note'? <ConcludingNote addConcludingNote={this.addConcludingNote}/> : <div></div>}
                  </div>
              </Grid.Column>
          </Grid>
        )
    }
}

export default LogForm
