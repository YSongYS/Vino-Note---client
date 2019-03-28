import React from 'react'
import API from '../API'
import { Grid, Menu } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import WineInfo from '../components/WineInfo';
import LookForm from '../components/LookForm';
import SmellForm from '../components/SmellForm';
import TasteForm from '../components/TasteForm';
import ConcludingNote from '../components/ConcludingNote';


class LogForm extends React.Component {

    state = {
      activeItem: 'Wine',
      wine_id: undefined,
      smell_id: undefined,
      look_id: undefined,
      taste_id: undefined,
      rating:undefined,
      starred:undefined,
      concluding_note:undefined,
      user_id:localStorage.user_id,
      wineSaved:false,
      log_id:this.props.log_id
    }

    componentDidMount(){
      if (this.state.log_id) {
        API.simpleShowFetch('log', this.state.log_id)
          .then(logInfo=>{
            this.setState({...logInfo})
          })
      }
    }

    addNewWine = (event, wineInfo) => {
      event.preventDefault()
      console.log(wineInfo.image.length)
      console.log(wineInfo.image)
      API.createWine(wineInfo)
        .then(wine => this.setState({
          wine_id:wine.id,
          activeItem:'Look'
        }))
    }


    addLookNote = (event, lookInfo) => {
      API.findLook(lookInfo)
        .then(look => this.setState({
          look_id:look.id,
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
      API.createSmell(smellInfo)
      .then(smell => this.setState({
        smell_id: smell.id,
        activeItem: 'Taste'
      }))

    }

    addConcludingNote = (event, concludingInfo) => {
      event.preventDefault()
      this.setState({
        rating:concludingInfo.rating,
        starred:concludingInfo.starred,
        concluding_note:concludingInfo.concluding_note
      },this.saveWine)
    }

    saveWine = () => {
      if (this.state.log_id) {
        API.updateLog(this.state)
          .then(()=>this.setState({
            wineSaved:true
          },this.props.unselectLog))
      }
      else {
        API.createLog(this.state)
          .then(()=>this.setState({
            wineSaved:true
          }))
      }
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

      // !!this.state.wine_id reinsert back to the render of react fragment
    render() {
        return (
          <Grid>
              {this.state.wineSaved? <Redirect to='/dash' /> : null}
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

                    {this.state.activeItem === 'Wine'? <WineInfo addNewWine={this.addNewWine} wine_id={this.state.wine_id}/> : <div></div>}
                    {this.state.activeItem === 'Look'? <LookForm addLookNote={this.addLookNote} look_id={this.state.look_id}/> : <div></div>}
                    {this.state.activeItem === 'Smell'? <SmellForm addSmellNote={this.addSmellNote} smell_id={this.state.smell_id}/> : <div></div>}
                    {this.state.activeItem === 'Taste'? <TasteForm addTasteNote={this.addTasteNote} taste_id={this.state.taste_id}/> : <div></div>}
                    {this.state.activeItem === 'Concluding note'? <ConcludingNote addConcludingNote={this.addConcludingNote} wine_id={this.state.wine_id} look_id={this.state.look_id} smell_id={this.state.smell_id} taste_id={this.state.taste_id}/> : <div></div>}

                  </div>
              </Grid.Column>
          </Grid>
        )
    }
}

export default LogForm
