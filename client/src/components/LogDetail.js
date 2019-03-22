import React from 'react'
import { Header, Image, Modal, Button, Icon } from 'semantic-ui-react'

class LogDetail extends React.Component {
    state = {
        open: true,
        liked: true // part of 'log' data later
    }

    onClose = () => {
        this.setState({open: false})
    }

    onEdit = () => {
        console.log("Go to pre-filled LogForm page")
    }

    render() {
        return (
            <div>
                <Modal open={this.state.open}>
                    <Modal.Header>
                        Wine Log
                        {
                            this.state.liked ? 
                            <Icon name='like' color='red' style={{float: 'right'}}></Icon> :
                            null
                        }
                    </Modal.Header>
                    <Modal.Content image>
                        <Image wrapped size='medium' src='https://cdn1.wine-searcher.net/images/labels/33/31/monte-xanic-cabernet-sauvignon-merlot-valle-de-guadalupe-mexico-10353331.jpg' />
                        <Modal.Description>
                            <Header>Wine Info</Header>
                            <p>Wine Name</p>
                            <p>2016, Spain, Oak barrel</p>
                            <p>$$$</p>
                            <p>ABV: 14%</p>

                            <Header>Look</Header>
                            <p>Looks so goooooooood</p>

                            <Header>Smell</Header>
                            <p>Smell so goooooooood</p>

                            <Header>Taste</Header>
                            <p>Taste so goooooooood</p>

                            <Header>Concluding Note</Header>
                            <p>I love this wine. Reasonable price, nice taste. Goes well with sirloin steak</p>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='green' onClick={this.onEdit}>
                            Edit
                        </Button>
                        <Button color='red' onClick={this.onClose}>
                            Close
                        </Button>
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}

export default LogDetail