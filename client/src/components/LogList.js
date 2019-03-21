import React from 'react'
import LogCard from './LogCard';
import { Card } from 'semantic-ui-react'


class LogList extends React.Component {
    render() {
        return (
            <div className='card-list'>
                <Card.Group itemsPerRow={5}>
                
                    <LogCard />
                    <LogCard />
                    <LogCard />
                    <LogCard />
                    <LogCard />
                    <LogCard />

                </Card.Group>
            </div>
        )
    }
}

export default LogList