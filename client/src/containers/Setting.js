import React from 'react'
import SignUpForm from '../components/SignUpForm';
// import { Button, Form } from 'semantic-ui-react'

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
            <div>
                <div className='user-setting'>
                    <h1>Edit Your Info</h1>
                    <SignUpForm userInfo={{...this.state}}/>
                </div>
                <div className='recommendation-setting' onClick={this.sendMail}>
                    <h3>Recommend <span className='title-setting'>Vino Note</span> to your friends! 📮</h3>
                </div>
            </div>
        )
    }
}

export default Setting
