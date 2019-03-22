import React from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'


class LogForm extends React.Component {

    state = {
      activeItem:'Wine'
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        return (
          <Grid>
              <Grid.Column width={2}>
                  <Menu fluid vertical tabular>
                    <Menu.Item name='Wine' active={this.state.activeItem === 'Wine'} onClick={this.handleItemClick} />
                    <Menu.Item name='Look' active={this.state.activeItem === 'Look'} onClick={this.handleItemClick} />
                    <Menu.Item name='Smell' active={this.state.activeItem === 'Smell'} onClick={this.handleItemClick} />
                    <Menu.Item name='Taste' active={this.state.activeItem === 'Taste'} onClick={this.handleItemClick} />
                    <Menu.Item name='Concluding note' active={this.state.activeItem === 'Concluding note'} onClick={this.handleItemClick} />
                  </Menu>
              </Grid.Column>

              <Grid.Column stretched width={14}>
                  <Segment>
                    Wine log info goes here

                  </Segment>
              </Grid.Column>
          </Grid>
        )
    }
}

export default LogForm
