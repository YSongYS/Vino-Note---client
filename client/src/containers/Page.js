import React from 'react'
import LogList from '../components/LogList';
// import Stats from '../components/Stats';

class Page extends React.Component {
    
    state = {
        minhaOrSong: false,
        logs: []
    }


    render() {
        return (
            <div className='page-container'>
                {this.state.minhaOrSong ? null : <LogList />}
            </div>
        )
    }
}

export default Page