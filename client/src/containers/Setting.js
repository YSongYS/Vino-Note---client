import React from 'react'
import { Button, Form } from 'semantic-ui-react'

class Setting extends React.Component {
    state = {
        email: '123@123.com',
        password: 123,
        nickname: 'Mr.123'
    }

    sendMail = () => {
        var link = "mailto:dearMyFriend@example.com"
             + "?cc=myCCaddress@example.com"
             + "&subject=" + escape("Vino Note: Log your wine experience!")
             + "&body=" + escape("Are you interested in logging your wine experience? \nDo you want to start your journey to be a great Sommelier? \nThis is your very first step point. \nJoin Vino Note today!")
             
        window.location.href = link;
    }
    render() {

        return (
            <div className='user-setting'>
                <div className='edit-form'>
                    <h1>Edit Your Info</h1>

                    <Form onSubmit={this.props.signupSubmit}>
                        <Form.Field>
                            <label className='login-form-label' >Email</label>
                            <input 
                                type='text' 
                                placeholder='Email' 
                                name='email' 
                                value={this.state.email} 
                                onChange={this.handleChange}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label className='login-form-label' >Password</label>
                            <input 
                                type='password' 
                                placeholder='Password' 
                                name='password' 
                                value={this.state.password} 
                                onChange={this.handleChange}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label className='login-form-label' >Password Confirmation</label>
                            <input 
                                type='password' 
                                placeholder='Password Confirmation' 
                                name='password_confirmation' 
                                value={this.state.password_confirmation} 
                                onChange={this.handleChange}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label className='login-form-label' >Nickname</label>
                            <input 
                                type='text' 
                                placeholder='Nickname'
                                name='nickname' 
                                value={this.state.nickname} 
                                onChange={this.handleChange}
                            />
                        </Form.Field>
                        <Button type='submit' color='olive' fluid>Edit</Button>
                    </Form>
                </div>

                <div className='recommendation-setting' onClick={this.sendMail}>
                    <h3>Recommend <span className='title-setting'>Vino Note</span> to your friends! 📮</h3>
                </div>
            </div>
        )
    }
}

export default Setting
