import React from 'react'
import { Menu } from 'semantic-ui-react'
import Header from '../components/Header'
class Nav extends React.Component {
    state = { activeItem: 'list' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <div>
                <Header />
                <Menu pointing secondary>
                    <Menu.Item name='create log' active={activeItem === 'create log'} onClick={this.handleItemClick} />
                    <Menu.Item
                    name='list'
                    active={activeItem === 'list'}
                    onClick={this.handleItemClick}
                    />
                    <Menu.Item
                    name='stats'
                    active={activeItem === 'stats'}
                    onClick={this.handleItemClick}
                    />
                    <Menu.Item
                    name='setting'
                    active={activeItem === 'setting'}
                    onClick={this.handleItemClick}
                    />
                    <Menu.Menu position='right'>
                        <Menu.Item
                            name='logout'
                            active={activeItem === 'logout'}
                            onClick={this.handleItemClick}
                        />
                    </Menu.Menu>
                </Menu>

            </div>

        )
    }
}

export default Nav
