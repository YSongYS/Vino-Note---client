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

  }


    render() {

      return (
          <div>
          <div id="divWheelOne" className='wheel-container'>
          </div>
          </div>
      )
    }
}

export default SmellForm
