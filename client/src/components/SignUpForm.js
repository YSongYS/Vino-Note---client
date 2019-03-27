import React from 'react'
import API from '../API'
import { Button, Form, Divider } from 'semantic-ui-react'

class SignUpForm extends React.Component {

  state = {
      email:"",
      password:"",
      password_confirmation:"",
      nickname:""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
        const userData = {
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation,
            nickname: this.state.nickname
        }

        return (
          <div className='signup-form'>
              <Form 
                onSubmit={(event) => {API.signupSubmit(event, userData).then(()=>this.props.toggleLoginState())}}>
                  <Form.Field>
                      <label style={{color:'white'}} className='login-form-label' >Email</label>
                      <input type='text' placeholder='Email' name='email' value={this.state.email} onChange={this.handleChange}/>
                  </Form.Field>
                  <Form.Field>
                      <label style={{color:'white'}} className='login-form-label' >Password</label>
                      <input type='password' placeholder='Password' name='password' value={this.state.password} onChange={this.handleChange}/>
                  </Form.Field>
                  <Form.Field>
                      <label style={{color:'white'}} className='login-form-label' >Password Confirmation</label>
                      <input type='password' placeholder='Password Confirmation' name='password_confirmation' value={this.state.password_confirmation} onChange={this.handleChange}/>
                  </Form.Field>
                  <Form.Field>
                      <label style={{color:'white'}} className='login-form-label' >Nickname</label>
                      <input type='text' placeholder='Nickname' name='nickname' value={this.state.nickname} onChange={this.handleChange}/>
                  </Form.Field>
                  <Button type='submit' color='olive' fluid>Submit</Button>
              </Form>

              <Divider horizontal><p style={{color:'white'}}>OR</p></Divider>

              <Button color='olive' onClick={this.props.switchToLogIn} basic fluid>Log In</Button>
          </div>
      )
  }
}

export default SignUpForm
