import React from 'react';
import { Radio, Grid, Form } from 'semantic-ui-react';

// data
const thirdSmells = {
  "Flower": ["Iris", "Peony", "Elderflower", "Acacia", "Lilac", "Jasmine", "Honeysuckle", "Violet", "Lavender", "Rose", "Potpourri", "Hibiscus"],
  "Citrus": ["Lime", "Lemon", "Grapefruit", "Orange", "Marmalade"],
  "Tree Fruit": ["Quince", "Apple", "Pear", "Nectarine", "Peach", "Apricot", "Persimmon"],
  "Tropical Fruit": ["Pineapple", "Mango", "Guava", "Passion Fruit", "Lychee", "Bubblegum"],
  "Red Fruit": ["Cranberry", "Red Plum", "Pomegranate", "Sour Cherry", "Strawberry", "Cherry", "Raspberry"],
  "Black Fruit": ["Boysenberry", "Black Currant", "Black Cherry", "Plum", "Blackberry", "Blueberry", "Olive"],
  "Dried Fruit": ["Raisin", "Fig", "Date", "Fruitcake"],
  "Noble Rot": ["Beeswax", "Ginger", "Honey"],
  "Spice": ["White Pepper", "Red Pepper", "Black Pepper", "Cinnamon", "Anise", "5-Spice", "Fennel", "Eucalyptus", "Mint", "Thyme"],
  "Vegetable": ["Grass", "Tomato Leaf", "Gooseberry", "Bell Pepper", "Jalapeño", "Bitter Almond", "Tomato", "Sun-Dried Tomato", "Black Tea"],
  "Earth": ["Clay Pot", "Slate", "Wet Gravel", "Potting Soil", "Red Beet", "Volcanic Rocks", "Petroleum"],
  "Microbial": ["Butter", "Cream", "Sourdough", "Lager", "Truffle", "Mushroom"],
  "Oak Aging": ["Vanilla", "Coconut", "Baking Spices", "Cigar Box", "Smoke", "Dill"],
  "General Aging": ["Dried Fruit", "Nutty Flavors", "Tobacco", "Coffee", "Cocoa", "Leather"],
  "Cork Taint": ["Musty Cardboard", "Wet Dog"],
  "Sulfides and Mercaptans": ["Cured Meat", "Boiled Eggs", "Burnt Rubber", "Lit Match", "Garlic", "Onion", "Cat Pee"],
  "Brettanomyces": ["Black Cardamon", "Band-Aid", "Sweaty Leather Saddle", "Horse Manure"],
  "Madeirized or Cooked": ["Toffee", "Stewed Fruit"],
  "Volatile Acidity": ["Vinegar", "Nail Polish Remover"]
}

const colorScheme = {
  'mainWheel': ["#92BBB0", "#722143", "#351A2D", "#B73A45"],
  'primary': ["#d3e3df", "#a7c8bf"],
  'secondary': ["#c6a6b3", "#8e4d68"],
  'tertiary': ["#aea3ab", "#5d4756"],
  'flaw': ["#e2b0b4", "#c5616a"]
}

class SmellForm extends React.Component {
  state = {
    selectedSmell: undefined,
    level2Choice: undefined,
    level3Choices: null
  }

  componentDidMount() { //WHEEEEEEEEEL
    let mainWheel = new window.wheelnav('divWheel-00', null, 550);
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
    mainWheel.colors = colorScheme['mainWheel']
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
      wheelArr[x].titleAttr = { font: this.titleFont, fill: "#fff", stroke: "none", cursor: 'pointer' };
    }
    primary.colors = colorScheme['primary']
    secondary.colors = colorScheme['secondary']
    tertiary.colors = colorScheme['tertiary']
    flaw.colors = colorScheme['flaw']

    mainWheel.createWheel(['Primary','Secondary','Tertiary','Flaws']);
    primary.createWheel(["Flower", "Citrus", "Tree Fruit", "Tropical Fruit", "Red Fruit", "Black Fruit", "Dried Fruit", "Noble Rot", "Spice", "Vegetable", "Earth"]);
    secondary.createWheel(["Microbial"]);
    tertiary.createWheel(["Oak Aging", "General Aging"]);
    flaw.createWheel(["Cork Taint", "Sulfides and Mercaptans", "Brettanomyces", "Madeirized or Cooked", "Volatile Acidity"]);

    // Add event listener(=navigateFn) / hide sub circle
    for(let x = 0; x < wheelArr.length; x++) {
      for (const y in wheelArr[x].navItems) {
        wheelArr[x].navItems[y].navigateFunction = function () {
          handleTheCheckBoxes(wheelArr[x].navItems[y].initNavTitle.title)
          // console.log(wheelArr[x].navItems[y].initNavTitle.title)
        }
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
            handleFirstSelection();
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

    const selectionDiv = document.getElementById('last-wheel-selection')

    const handleTheCheckBoxes = (name) => {
      selectionDiv.className = 'last-wheel-selection'
      this.setState({level2Choice: name, level3Choices: thirdSmells[`${name}`]})
    }

    const handleFirstSelection = () => {
      selectionDiv.classList.remove('last-wheel-selection')
      this.setState({level2Choice: undefined, level3Choices: null})
    }


  }

  handleChange = (e, { value }) => this.setState({selectedSmell: value})

    render() {

      return (
          <Grid>
            <Grid.Column width={10}>
              <div id="divWheel-00" className='wheel-container'>
              </div>
            </Grid.Column>
            <Grid.Column width={6}>
              <div id='last-wheel-selection'>
                <Form>
                  {
                    this.state.level3Choices ? 
                    <Form.Field>
                      <h1>{this.state.level2Choice}</h1>
                      Your choice: <b>{this.state.selectedSmell}</b>
                    </Form.Field> 
                    :
                    null
                  }
                  {
                    this.state.level3Choices ? 
                    this.state.level3Choices.map((name, index) => 
                      <Form.Field key={`field-${index}`}>
                        <Radio
                          key={index}
                          label={name} 
                          name='radioGroup' 
                          value={name} 
                          checked={this.state.selectedSmell === name}
                          onChange={this.handleChange}
                        />
                        </Form.Field>) 
                      : 
                    null
                  }
                </Form>
              </div>
            </Grid.Column>

          </Grid>
      )
    }
}

export default SmellForm
