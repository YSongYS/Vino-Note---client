import React from 'react'
import Header from '../components/Header'
import LoginForm from '../components/LoginForm'
import SignUpForm from '../components/SignUpForm'

class Home extends React.Component {

  state = {
    signup: false
  }

  switchToSignIn = () => { this.setState({ signup: true }) }
  switchToLogIn = () => { this.setState({ signup: false }) }

  render() {
      return (
            <div className='home-container'>
              <div className='header-back'>
                <Header />
                {
                  this.state.signup ? 
                  <SignUpForm 
                    switchToLogIn={this.switchToLogIn} 
                    toggleLoginState={this.props.toggleLoginState}
                  /> :
                  <LoginForm 
                    switchToSignIn={this.switchToSignIn} 
                    toggleLoginState={this.props.toggleLoginState}
                  />
                }
              </div>
            </div>
      )
  }
}

export default Home
