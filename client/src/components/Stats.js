import React from 'react'
import { Icon, Header, Statistic, Segment, Grid } from 'semantic-ui-react'
import CalendarLog from './CalendarLog';

class Stats extends React.Component {
    render() {
        return (
            <Segment>
                <Header as='h2'>
                    <Icon name='dashboard' />
                    <Header.Content>DashBoard</Header.Content>
                </Header>
                <Grid columns={5} padded='vertically' stackable>
                    <Grid.Column width={8}>
                        <CalendarLog />
                    </Grid.Column>

                    <Grid.Column width={8} >
                        <Statistic.Group widths='three'>
                        <Statistic>
                        <Statistic.Value><i className="fas fa-wine-glass-alt"></i>120</Statistic.Value>
                        <Statistic.Label>Wine Logs</Statistic.Label>
                        </Statistic>

                        <Statistic>
                        <Statistic.Value text>
                            france <br/>
                            spain  <br/>
                            italy  <br/>
                        </Statistic.Value>
                        <Statistic.Label>Top 3 Countries</Statistic.Label>
                        </Statistic>

                        <Statistic>
                        <Statistic.Value text>
                            no1 <br/>
                            no2  <br/>
                            no3  <br/>
                        </Statistic.Value>
                        <Statistic.Label>Top 3 variety</Statistic.Label>
                        </Statistic>

                        {/* <Statistic>
                        <Statistic.Value>

                        </Statistic.Value>
                        <Statistic.Label>Favorite Region</Statistic.Label>
                        </Statistic> */}
                        </Statistic.Group>
                    </Grid.Column>
                </Grid>
            </Segment>

        )
    }
}

export default Stats

// What kind of wine
// region of wines that I've tried
// number of wines that I tried per month
