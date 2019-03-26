import React from 'react'
import LogCard from '../components/LogCard';
import Stats from '../components/Stats';
import { Card } from 'semantic-ui-react'


class LogList extends React.Component {
    render() {
        return (
            <div className='card-list'>
                <Card.Group>

                    <LogCard />
                    <LogCard />
                    <LogCard />
                    <LogCard />
                    <LogCard />
                    <LogCard />
                    <LogCard />
                    <LogCard />
                    <LogCard />
                    <LogCard />
                    <LogCard />
                    <LogCard />
                    <LogCard />
                    <LogCard />
                    <LogCard />

                </Card.Group>

                <Stats />
            </div>
        )
    }
}

export default LogList
