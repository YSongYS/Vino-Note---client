import React from 'react'
import { Button, Form } from 'semantic-ui-react'

class SignUpForm extends React.Component {
    render() {
        return (
            <div className='signup-form'>
                <Form>
                    <Form.Field>
                        <label>Email</label>
                        <input type='text' placeholder='Email' />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input type='password' placeholder='Password' />
                    </Form.Field>
                    <Form.Field>
                        <label>Password Confirmation</label>
                        <input type='password' placeholder='Password Confirmation' />
                    </Form.Field>
                    <Form.Field>
                        <label>Nickname</label>
                        <input type='text' placeholder='Nickname' />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
            </div>
        )
    }
}

export default SignUpForm