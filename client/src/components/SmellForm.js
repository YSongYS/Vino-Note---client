import React from 'react';
// import { Divider, Grid, Image, Container, Button, Form, Segment } from 'semantic-ui-react';
// import {wheelnav} from 'wheelnav';

// window.wheelnav = wheelnav;
/// build out the full list of options

class SmellForm extends React.Component {

  componentDidMount() {

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
    mainWheel.slicePathCustom.maxRadiusPercent = 0.6;
    mainWheel.sliceSelectedPathCustom = mainWheel.slicePathCustom;
    mainWheel.sliceInitPathCustom = mainWheel.slicePathCustom;
    mainWheel.clickModeRotate = false;
    mainWheel.colors = ["#92BBB0", "#722143", "#351A2D", "#B73A45"]
    mainWheel.titleAttr = { fill: "#fff", stroke: "none", cursor: 'pointer' };
    mainWheel.titleHoverAttr = { fill: "#222", cursor: 'pointer', stroke: "none" };
    mainWheel.titleSelectedAttr = { fill: "#fff", cursor: 'pointer', stroke: "none" };


    for(let x = 0; x < wheelArr.length; x++) {
      wheelArr[x].slicePathFunction = window.slicePath().DonutSlice;
      wheelArr[x].slicePathCustom = window.slicePath().DonutSliceCustomization();
      wheelArr[x].slicePathCustom.minRadiusPercent = 0.62;
      wheelArr[x].slicePathCustom.maxRadiusPercent = 0.9;
      wheelArr[x].sliceSelectedPathCustom = wheelArr[x].slicePathCustom;
      wheelArr[x].sliceInitPathCustom = wheelArr[x].slicePathCustom;
      wheelArr[x].clickModeRotate = false;
      wheelArr[x].colors = ["#92BBB0", "#722143", "#351A2D", "#B73A45"]
      wheelArr[x].titleAttr = { font: this.titleFont, fill: "#fff", stroke: "none", cursor: 'pointer' };
    }

    mainWheel.createWheel(['Primary','Secondary','Tertiary','Flaws']);
    primary.createWheel(["Flower", "Citrus", "Tree Fruit", "Tropical Fruit", "Red Fruit", "Black Fruit", "Dried Fruit", "Noble Rot", "Spice", "Vegetable", "Earth"]);
    secondary.createWheel(["Microbial"]);
    tertiary.createWheel(["Oak \n Aging", "General \n Aging"]);
    flaw.createWheel(["Cork Taint", "Sulfides \n and \n Mercaptans", "Brettanomyces", "Madeirized \n or \n Cooked", "Volatile \n Acidity"]);

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
          <div id="divWheel-00" className='wheel-container'>
          </div>
          </div>
      )
    }
}

export default SmellForm
