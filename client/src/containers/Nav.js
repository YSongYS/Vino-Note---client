import React from 'react'
import { Menu, Icon, Dropdown } from 'semantic-ui-react'
import Header from '../components/Header'
import { NavLink, Link } from 'react-router-dom';
import { third_smells } from '../Library_terms';



class Nav extends React.Component {

  // <Icon name='list alternate outline'/>
  // <Icon name='add'/>
  // <Icon name='setting'/>
  // <Icon name='flipboard'/>
  // <Menu.Item as={ Link } name='dash stats' to='/dash' active={this.state.activeItem === 'dash stats'} onClick={this.handleItemClick}>
  //   <p className='navFont'>Dashboard </p>
  // </Menu.Item>

    state = {
      activeItem:'dash'
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    handleLogOutClick = () => {
      this.props.logOut()
      this.props.toggleLoginState()
    }

    render() {
        return (
            <div>
                <Header size='huge'/>
                <Menu pointing secondary>
                    <Menu.Item as={ Link } name='dash' to='/dash' active={this.state.activeItem === 'dash'} onClick={this.handleItemClick}>
                      <p className='navFont'>Wine Collection </p>
                    </Menu.Item>
                    <Menu.Item as={ Link } name='create' to='/create' active={this.state.activeItem === 'create'} onClick={this.handleItemClick}>
                      <p className='navFont'>Create New </p>
                    </Menu.Item>
                    <Menu.Item as={ Link } name='setting' to='/setting' active={this.state.activeItem === 'setting'} onClick={this.handleItemClick}>
                      <p className='navFont'>Settings </p>
                    </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item as={ Link } name='log out' to='/' onClick={this.handleLogOutClick}>
                      <p className='navFont'>Log Out</p>
                    </Menu.Item>
                </Menu.Menu>
                </Menu>
            </div>
        )
    }

}

export default Nav
