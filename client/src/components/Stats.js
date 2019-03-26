import React from 'react'
import { Icon, Header, Statistic, Segment, Grid, Flag } from 'semantic-ui-react'
import CalendarLog from './CalendarLog';

class Stats extends React.Component {
  // <Header as='h2'>
  //     <Icon name='chart bar' />
  //     <Header.Content>DashBoard</Header.Content>
  // </Header>
    render() {
        return (
            <Grid>
                <Grid.Row columns={2}>
                <Grid.Column width={1}>
                </Grid.Column>
                <Grid.Column width={14}>
                  <CalendarLog />
                </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={4}>
                  <Grid.Column width={5}>
                      <br/>
                      <Statistic size='huge'>
                        <Statistic.Value>79</Statistic.Value>
                        <Statistic.Label><h1>Wine Logs</h1></Statistic.Label>
                      </Statistic>
                      <br/><br/><br/><br/>
                  </Grid.Column>

                  <Grid.Column width={5}>
                      <br/>
                      <Statistic size='huge'>
                        <Statistic.Value>Italy</Statistic.Value>
                        <Statistic.Label><h1>Favorite Wine Origins</h1></Statistic.Label>
                      </Statistic>
                      <br/><br/><br/><br/>
                  </Grid.Column>

                  <Grid.Column width={5}>
                      <br/>
                      <Statistic size='huge'>
                        <Statistic.Value>Chianti</Statistic.Value>
                        <Statistic.Label><h1>Favorate Grape Varieties</h1></Statistic.Label>
                      </Statistic>
                      <br/><br/><br/><br/>
                  </Grid.Column>

                  <Grid.Column width={1}>
                  </Grid.Column>
                </Grid.Row>



            </Grid>

        )
    }
}

export default Stats

// What kind of wine
// region of wines that I've tried
// number of wines that I tried per month
