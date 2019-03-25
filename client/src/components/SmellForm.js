import React from 'react';
// import { Divider, Grid, Image, Container, Button, Form, Segment } from 'semantic-ui-react';
// import {wheelnav} from 'wheelnav';

// window.wheelnav = wheelnav;
/// build out the full list of options

class SmellForm extends React.Component {

  componentDidMount() {

    let mainWheel = new window.wheelnav('divWheelOne', null, 500);
    let primary = new window.wheelnav('divWheelTwo', mainWheel.raphael);
    let secondary = new window.wheelnav('divWheelThree', primary.raphael);
    let tertiary = new window.wheelnav('divWheelFour', secondary.raphael);
    let flaw = new window.wheelnav('divWheelFive', tertiary.raphael);

    let wheelArr = [primary, secondary, tertiary, flaw]

    //Customize slicePaths for proper size
    mainWheel.slicePathFunction = window.slicePath().DonutSlice;
    mainWheel.slicePathCustom = window.slicePath().DonutSliceCustomization();
    mainWheel.slicePathCustom.minRadiusPercent = 0.3;
    mainWheel.slicePathCustom.maxRadiusPercent = 0.6;
    mainWheel.sliceSelectedPathCustom = mainWheel.slicePathCustom;
    mainWheel.sliceInitPathCustom = mainWheel.slicePathCustom;
    mainWheel.clickModeRotate = false;


    for(let x = 0; x < wheelArr.length; x++) {
      wheelArr[x].slicePathFunction = window.slicePath().DonutSlice;
      wheelArr[x].slicePathCustom = window.slicePath().DonutSliceCustomization();
      wheelArr[x].slicePathCustom.minRadiusPercent = 0.6;
      wheelArr[x].slicePathCustom.maxRadiusPercent = 0.9;
      wheelArr[x].sliceSelectedPathCustom = wheelArr[x].slicePathCustom;
      wheelArr[x].sliceInitPathCustom = wheelArr[x].slicePathCustom;
      wheelArr[x].clickModeRotate = false;
    }

    mainWheel.createWheel(['Primary','Secondary','Tertiary','Flaws']);
    primary.createWheel(["Flower", "Citrus", "Tree Fruit", "Tropical Fruit", "Red Fruit", "Black Fruit", "Dried Fruit", "Noble Rot", "Spice", "Vegetable", "Earth"]);
    secondary.createWheel(["Microbial"]);
    tertiary.createWheel(["Oak Aging", "General Aging"]);
    flaw.createWheel(["Cork Taint", "Sulfides and Mercaptans", "Brettanomyces", "Madeirized or Cooked", "Volatile Acidity"]);

    // hide sub circle
    for(let x = 0; x < wheelArr.length; x++) {
      for (const y in wheelArr[x].navItems) {
        wheelArr[x].navItems[y].navItem.hide();
      }
    }

    // click nav function
    for (let i = 0; i < mainWheel.navItems.length; i++) {
      let selected = false
      mainWheel.navItems[i].navigateFunction = function () {
        if (selected) {
          // debugger
            for (let j=0; j < wheelArr[i].navItems.length; j++) {
              wheelArr[i].navItems[j].navItem.hide();
            }
        }
        else {
          for (let j=0; j < wheelArr[i].navItems.length; j++) {
            wheelArr[i].navItems[j].navItem.show();
          }
        }
        selected = !selected;
    };
    }




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
