import React from 'react'
import LogList from '../components/LogList';
import CameraApp from '../components/CameraApp';
import LogForm from './LogForm';

class Page extends React.Component {

    state = {
        minhaOrSong: true,
        logs: []
    }


    render() {
        return (
            <div className='page-container'>
                {this.state.minhaOrSong? <LogForm /> : <LogList />}
            </div>
        )
    }
}

export default Page
