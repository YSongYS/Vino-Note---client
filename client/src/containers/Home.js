import React from 'react'
import Header from '../components/Header'
import LoginForm from '../components/LoginForm'
import SignUpForm from '../components/SignUpForm'
import { Button } from 'semantic-ui-react'

class Home extends React.Component {

  state = {
    signup:true
  }

  switchToSignIn = () => {
    this.setState({
      signup:true
    })
  }

  switchToLogIn = () => {
    this.setState({
      signup:false
    })
  }

  signupSubmit = () => {
    console.log('sign me up')
  }

  loginSubmit = () => {
    console.log('log me in')
  }

  render() {
      return (
            <div className='home-container'>
              <div className='header-back'>
                <Header />
                {this.state.signup?<SignUpForm switchToLogIn={this.switchToLogIn} signupSubmit={this.signupSubmit}/>:<LoginForm switchToSignIn={this.switchToSignIn} loginSubmit={this.loginSubmit}/>}
              </div>
            </div>
      )
  }
}

export default Home
