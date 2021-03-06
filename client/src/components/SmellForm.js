import React from 'react';
import SmellTable from './SmellTable'
import { Radio, Grid, Form, Button, Popup } from 'semantic-ui-react';
import API from '../API';
import { second_smells, third_smells, color_scheme } from '../Library_terms'


class SmellForm extends React.Component {
  state = {
    level1Choice: undefined,
    level2Choice: undefined,
    level3Choice: undefined,
    level3List: null,

    primary_2: undefined,
    primary_3: undefined,
    secondary_2: undefined,
    secondary_3: undefined,
    tertiary_2: undefined,
    tertiary_3: undefined,
    flaw_2: undefined,
    flaw_3: undefined
  }

  componentDidMount() { //WHEEEEEEEEEL

    if (!!this.props.smell_id) {
      API.simpleShowFetch("smell", this.props.smell_id)
        .then(info=>this.setState({
          primary_2: info.primary_level_two,
          primary_3: info.primary_level_three,
          secondary_2: info.secondary_level_two,
          secondary_3: info.secondary_level_three,
          tertiary_2: info.tertiary_level_two,
          tertiary_3: info.tertiary_level_three,
          flaw_2: info.flaw_level_two,
          flaw_3: info.flaw_level_three
        }))
    }

    let mainWheel = new window.wheelnav('divWheel-00', null, 500);
    let primary = new window.wheelnav('divWheel-01', mainWheel.raphael);
    let secondary = new window.wheelnav('divWheel-02', primary.raphael);
    let tertiary = new window.wheelnav('divWheel-03', secondary.raphael);
    let flaw = new window.wheelnav('divWheel-04', tertiary.raphael);

    let wheelArr = [primary, secondary, tertiary, flaw]

    //Customize slicePaths for proper size
    mainWheel.slicePathFunction = window.slicePath().DonutSlice;
    mainWheel.slicePathCustom = window.slicePath().DonutSliceCustomization();
    mainWheel.slicePathCustom.minRadiusPercent = 0.3;
    mainWheel.slicePathCustom.maxRadiusPercent = 0.55;
    mainWheel.sliceSelectedPathCustom = mainWheel.slicePathCustom;
    mainWheel.sliceInitPathCustom = mainWheel.slicePathCustom;
    mainWheel.clickModeRotate = false;
    mainWheel.colors = color_scheme['mainWheel']
    mainWheel.titleAttr = { fill: "#fff", stroke: "none", cursor: 'pointer' };
    mainWheel.titleHoverAttr = { fill: "#222", cursor: 'pointer', stroke: "none" };
    mainWheel.titleSelectedAttr = { fill: "#fff", cursor: 'pointer', stroke: "none" };


    for(let x = 0; x < wheelArr.length; x++) {
      wheelArr[x].slicePathFunction = window.slicePath().DonutSlice;
      wheelArr[x].slicePathCustom = window.slicePath().DonutSliceCustomization();
      wheelArr[x].slicePathCustom.minRadiusPercent = 0.56;
      wheelArr[x].slicePathCustom.maxRadiusPercent = 1.0;
      wheelArr[x].sliceSelectedPathCustom = wheelArr[x].slicePathCustom;
      wheelArr[x].sliceInitPathCustom = wheelArr[x].slicePathCustom;
      wheelArr[x].clickModeRotate = false;
      wheelArr[x].titleAttr = { font: this.titleFont, fill: "#fff", stroke: "none", cursor: 'pointer' };
    }
    primary.colors = color_scheme['primary']
    secondary.colors = color_scheme['secondary']
    tertiary.colors = color_scheme['tertiary']
    flaw.colors = color_scheme['flaw']

    mainWheel.createWheel(['Primary','Secondary','Tertiary','Flaws']);
    primary.createWheel(second_smells["primary"]);
    secondary.createWheel(second_smells["secondary"]);
    tertiary.createWheel(second_smells["tertiary"]);
    flaw.createWheel(second_smells["flaw"]);

    // Add event listener(=navigateFn) / hide sub circle
    for(let x = 0; x < wheelArr.length; x++) {
      for (const y in wheelArr[x].navItems) {
        wheelArr[x].navItems[y].navigateFunction = function () {
          handleTheCheckBoxes(wheelArr[x].navItems[y].initNavTitle.title)
        }
        wheelArr[x].navItems[y].navItem.hide();
      }
    }

    // click nav function
    for (let i = 0; i < mainWheel.navItems.length; i++) {
      // eslint-disable-next-line no-loop-func
      mainWheel.navItems[i].navigateFunction = function () {
        let selected = false

        handleFirstSelect(mainWheel.navItems[i].initNavTitle.title)
        if (selected) {
          for (let j=0; j < wheelArr[i].navItems.length; j++) {
            deleteAllSelections();
            handleFirstSelect(mainWheel.navItems[i].initNavTitle.title)
            wheelArr[i].navItems[j].navItem.hide();
            wheelArr[i].navItems[j].navItem.show();

          }
        } else {
          for(let x = 0; x < wheelArr.length; x++) {
            for (const y in wheelArr[x].navItems) {
              deleteAllSelections();
              wheelArr[x].navItems[y].navItem.hide();
            }
          }
          for (let j=0; j < wheelArr[i].navItems.length; j++) {
            toggleSelection.style.display = 'block'
            handleFirstSelect(mainWheel.navItems[i].initNavTitle.title)
            wheelArr[i].navItems[j].navItem.show();
          }
        }
        selected = !selected
      };
    }

    const selectionDiv = document.getElementById('last-wheel-selection')
    const toggleSelection = document.getElementsByClassName('toggle-selection')[0]

    const handleTheCheckBoxes = (name) => {
      selectionDiv.className = 'last-wheel-selection'
      this.setState({level2Choice: name, level3List: third_smells[`${name}`]})
    }

    const handleFirstSelect = (name) => {
      this.setState({level1Choice: name})
    }

    const deleteAllSelections = () => {
      selectionDiv.classList.remove('last-wheel-selection')
      this.setState({level1Choice: undefined, level2Choice: undefined, level3List: null, level3Choice: undefined})
    }

  }


  handleChange = (e, { value }) => {
    this.setState({level3Choice: value});

    // eslint-disable-next-line default-case
    switch(this.state.level1Choice) {
      case 'Primary':
        this.setState({primary_2: this.state.level2Choice, primary_3: value})
      break;
      case 'Secondary':
        this.setState({secondary_2: this.state.level2Choice, secondary_3: value})
      break;
      case 'Tertiary':
        this.setState({tertiary_2: this.state.level2Choice, tertiary_3: value})
      break;
      case 'Flaws':
        this.setState({flaw_2: this.state.level2Choice, flaw_3: value})
      break;
    }
  }

    render() {
      const smellData = {
        primary_level_two: this.state.primary_2,
        primary_level_three: this.state.primary_3,
        secondary_level_two: this.state.secondary_2,
        secondary_level_three: this.state.secondary_3,
        tertiary_level_two: this.state.tertiary_2,
        tertiary_level_three: this.state.tertiary_3,
        flaw_level_two: this.state.flaw_2,
        flaw_level_three: this.state.flaw_3
      }

      return (
          <Grid >
            <Grid.Column width={6}>
              <div id="divWheel-00" className='wheel-container'>
              </div>
            </Grid.Column>
            <Grid.Column width={4} className='toggle-selection' style={{'display': 'none'}}>
              <div id='last-wheel-selection'>
                <Form>
                  {
                    this.state.level3List ?
                    <Form.Field>
                      <h1>{this.state.level2Choice}</h1>
                      Your choice: <b>{this.state.level3Choice}</b>
                    </Form.Field>
                    :
                    null
                  }
                  {
                    this.state.level3List ?
                    this.state.level3List.map((name, index) =>
                      <Form.Field key={`field-${index}`}>
                        <Radio
                          key={index}
                          label={name}
                          name='radioGroup'
                          value={name}
                          checked={this.state.level3Choice === name}
                          onChange={this.handleChange}
                        />
                        </Form.Field>)
                      :
                    null
                  }

                </Form>
              </div>
            </Grid.Column>
            <Grid.Column width={6}>
              <div className='user-smell-card'>
                <h1>Your Wine Aromas🍷</h1>
                <SmellTable
                  primary_2={this.state.primary_2}
                  primary_3={this.state.primary_3}
                  secondary_2={this.state.secondary_2}
                  secondary_3={this.state.secondary_3}
                  tertiary_2={this.state.tertiary_2}
                  tertiary_3={this.state.tertiary_3}
                  flaw_2={this.state.flaw_2}
                  flaw_3={this.state.flaw_3}
                />

                {
                  Object.values(this.state).includes(undefined) ?
                  <Popup
                  trigger={<Button fluid color='brown'>Confirm</Button>}
                  content="Please fill out all the smells in the smell table."
                  basic
                  /> :
                  <Button fluid color='brown' onClick={(event) => this.props.addSmellNote(event,smellData)}>Confirm</Button>
                }
              </div>
            </Grid.Column>
          </Grid>
      )
    }
}

export default SmellForm
