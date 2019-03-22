import React from 'react'
import { Button, Form } from 'semantic-ui-react'

class LoginForm extends React.Component {
    render() {
        return (
            <div className='login-form'>
                <Form>
                    <Form.Field>
                        <label>Email</label>
                        <input type='text' placeholder='Email' />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input type='password' placeholder='Password' />
                    </Form.Field>

                    <Button type='submit'>Submit</Button>
                </Form>
            </div>
        )
    }
}

export default LoginForm