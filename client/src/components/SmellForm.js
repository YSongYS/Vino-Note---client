import React from 'react';
import { Divider, Grid, Image, Container, Button, Form, Segment } from 'semantic-ui-react';
// import {wheelnav} from 'wheelnav';

// window.wheelnav = wheelnav;
/// build out the full list of options

class SmellForm extends React.Component {

  componentDidMount() {
    // console.log(window.wheelnav)
    var myWheelnav = new window.wheelnav("divWheel");
    const arr = ['hello','hello','hello','hello','hello']
    myWheelnav.createWheel(arr);
  }

    render() {

      return (
        <div id="divWheel">
        </div>
      )
    }
}

export default SmellForm
