import React from 'react'
import LogList from '../components/LogList';

class Page extends React.Component {
    
    state = {
        logs: []
    }


    render() {
        return (
            <div className='page-container'>
                <LogList />
            </div>
        )
    }
}

export default Page