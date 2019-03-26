import React from 'react'
import { Button, Form } from 'semantic-ui-react'

class SignUpForm extends React.Component {
    render() {
        return (
            <div className='signup-form'>
                <Form>
                    <Form.Field>
                        <label>Email</label>
                        <input type='text' placeholder='Email' value={this.props.userInfo.email}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input type='password' placeholder='Password' value={this.props.userInfo.password}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Password Confirmation</label>
                        <input type='password' placeholder='Password Confirmation' value={this.props.userInfo.password}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Nickname</label>
                        <input type='text' placeholder='Nickname' value={this.props.userInfo.nickname}/>
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
            </div>
        )
    }
}

export default SignUpForm