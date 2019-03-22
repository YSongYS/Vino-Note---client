import React from 'react'
import LogCard from './LogCard';
import Stats from './Stats';
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