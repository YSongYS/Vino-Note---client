import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import Header from '../components/Header'
import { NavLink, Link } from 'react-router-dom';



class Nav extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <Menu pointing secondary>
                    <Menu.Item as={ Link } name='dash' to='/dash'>
                      <Icon name='list alternate outline'/>
                      Dashboard
                    </Menu.Item>
                    <Menu.Item as={ Link } name='create' to='/create'>
                      <Icon name='add'/>
                      Create new
                    </Menu.Item>
                    <Menu.Item as={ Link } name='setting' to='/setting'>
                      <Icon name='setting'/>
                      Settings
                    </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item as={ Link } name='log out' to='/'>
                      Log out
                    </Menu.Item>
                </Menu.Menu>
                </Menu>
            </div>
        )
    }

}

export default Nav
