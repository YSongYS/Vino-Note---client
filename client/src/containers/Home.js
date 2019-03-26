import React from 'react'
import Header from '../components/Header'
import LoginForm from '../components/LoginForm'

class Home extends React.Component {

    render() {

        return (
              <div className='home-container'>

              <div className='header-back'><Header /></div>
              <LoginForm />
              </div>
        )
    }
}

export default Home
