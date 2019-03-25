import React from 'react';
import { Divider, Grid, Image, Container, Button, Form, Segment } from 'semantic-ui-react';
// import {wheelnav} from 'wheelnav';

// window.wheelnav = wheelnav;
/// build out the full list of options

class SmellForm extends React.Component {

  componentDidMount() {
    const smellWheelOne = new window.wheelnav("divWheelOne")
    smellWheelOne.wheelRadius = 200
    smellWheelOne.spreaderEnable = true
    smellWheelOne.spreaderInTitle = 'Wine\nAroma'
    smellWheelOne.spreaderOutTitle = 'Wine\nAroma'
    smellWheelOne.spreaderTitleFont = '100 24px Helvetica'
    smellWheelOne.spreaderRadius = 50
    smellWheelOne.createWheel(['Primary','Secondary','Tertiary','Flaws'])

    const smellWheelTwo = new window.wheelnav("divWheelTwo")
    smellWheelTwo.wheelRadius = 400
    smellWheelTwo.spreaderEnable = true
    smellWheelTwo.centerX = smellWheelOne.centerX
    smellWheelTwo.centerY = smellWheelOne.centerY
    smellWheelTwo.spreaderInTitle = 'Wine\nAroma'
    smellWheelTwo.spreaderOutTitle = 'Wine\nAroma'
    smellWheelTwo.spreaderTitleFont = '100 24px Helvetica'
    smellWheelTwo.spreaderRadius = 200
    smellWheelTwo.createWheel(['Primary','Secondary','Tertiary','Flaws'])
  }

    render() {

      return (
          <div>
          <div id="divWheelOne" className='wheel-container'>
          </div>
          <div id="divWheelTwo" className='wheel-container'>
          </div>
          </div>
      )
    }
}

export default SmellForm
