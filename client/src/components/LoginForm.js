import React from 'react'
import { Button, Form, Divider } from 'semantic-ui-react'

class LoginForm extends React.Component {

    state = {
        email:"",
        password:""
    }

    handleChange = (event) => {
      this.setState({
        [event.target.name]:event.target.value
      })
    }

    render() {
        return (
          <div className='login-form'>
              <Form onSubmit={this.props.loginSubmit} >
                  <Form.Field>
                      <label style={{color:'white'}} className='login-form-label' >Email</label>
                      <input name='email' type='text' placeholder='Email' value={this.state.email} onChange={this.handleChange}/>
                  </Form.Field>
                  <Form.Field>
                      <label style={{color:'white'}} className='login-form-label'>Password</label>
                      <input name='password' type='password' placeholder='Password' value={this.state.Password} onChange={this.handleChange}/>
                  </Form.Field>
                  <br/>
                  <Button type='submit' color='olive' fluid>Submit</Button>
              </Form>
              <Divider horizontal><p style={{color:'white'}}>OR</p></Divider>
              <Button color='olive' onClick={this.props.switchToSignIn} basic fluid>Sign up</Button>
          </div>
        )
    }
}

export default LoginForm
