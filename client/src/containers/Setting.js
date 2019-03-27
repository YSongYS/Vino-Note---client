import React from 'react'
import API from '../API'
import { Button, Form } from 'semantic-ui-react'

class Setting extends React.Component {
    state = {
        email: undefined,
        password: undefined,
        password_confirmation: undefined,
        nickname: undefined
    }

    sendMail = () => {
        var link = "mailto:dearMyFriend@example.com"
             + "?cc=myCCaddress@example.com"
             + "&subject=" + escape("Vino Note: Log your wine experience!")
             + "&body=" + escape("Are you interested in logging your wine experience? \nDo you want to start your journey to be a great Sommelier? \nThis is your very first step point. \nJoin Vino Note today!")
             
        window.location.href = link;
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

    componentDidMount() {
        API.getUserInfo()
        .then(data => {
            this.setState({email: data.user.email, nickname: data.user.nickname})
        })
    }

    render() {
        const userData = {
            id: localStorage.user_id,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation,
            nickname: this.state.nickname
        }

        return (
            <div className='user-setting'>
                <div className='edit-form'>
                    <h1>Edit Your Info</h1>

                    <Form onSubmit={(event) => API.userUpdate(event, userData)}>
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
