import React from 'react'
import { Header, Table, Button } from 'semantic-ui-react'

class SmellTable extends React.Component {
    
    handleClick = () => {
        if (Object.values(this.props).includes(undefined)) {
            console.log("I'm not ready yet")
        } else {
            console.log("I'm ready to be fetched to backend")
        }
    }

    render() {
        return (
        <div>
            <Table basic='very' celled collapsing>
            <Table.Header>
                <Table.Row>
                <Table.HeaderCell></Table.HeaderCell>
                <Table.HeaderCell></Table.HeaderCell>
                <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
            </Table.Header>
        
            <Table.Body>
                <Table.Row>
                <Table.Cell>
                    <Header as='h4' image>
                    <Header.Content>
                        Primary
                        <Header.Subheader>Primary aromas come from grapes</Header.Subheader>
                    </Header.Content>
                    </Header>
                </Table.Cell>
                <Table.Cell>{this.props.primary_2 ? this.props.primary_2 : <span className='choose-aroma'>Choose aroma</span>}</Table.Cell>
                <Table.Cell>{this.props.primary_3 ? this.props.primary_3 : <span className='choose-aroma'>Choose aroma</span>}</Table.Cell>
                </Table.Row>
                <Table.Row>
                <Table.Cell>
                    <Header as='h4' image>
                    <Header.Content>
                        Secondary
                        <Header.Subheader>Secondary aromas come from winemaking</Header.Subheader>
                    </Header.Content>
                    </Header>
                </Table.Cell>
                <Table.Cell>{this.props.secondary_2 ? this.props.secondary_2 : <span className='choose-aroma'>Choose aroma</span>}</Table.Cell>
                <Table.Cell>{this.props.secondary_3 ? this.props.secondary_3 : <span className='choose-aroma'>Choose aroma</span>}</Table.Cell>
                </Table.Row>
                <Table.Row>
                <Table.Cell>
                    <Header as='h4' image>
                    <Header.Content>
                        Tertiary
                        <Header.Subheader>Tertiary aromas come from ageing and controlled interaction with oxygen</Header.Subheader>
                    </Header.Content>
                    </Header>
                </Table.Cell>
                <Table.Cell>{this.props.tertiary_2 ? this.props.tertiary_2 : <span className='choose-aroma'>Choose aroma</span>}</Table.Cell>
                <Table.Cell>{this.props.tertiary_3 ? this.props.tertiary_3 : <span className='choose-aroma'>Choose aroma</span>}</Table.Cell>
                </Table.Row>
                <Table.Row>
                <Table.Cell>
                    <Header as='h4' image>
                    <Header.Content>
                        Flaw
                        <Header.Subheader>Other aromas from wine faults</Header.Subheader>
                    </Header.Content>
                    </Header>
                </Table.Cell>
                <Table.Cell>{this.props.flaw_2 ? this.props.flaw_2 : <span className='choose-aroma'>Choose aroma</span>}</Table.Cell>
                <Table.Cell>{this.props.flaw_3 ? this.props.flaw_3 : <span className='choose-aroma'>Choose aroma</span>}</Table.Cell>
                </Table.Row>
            </Table.Body>
            </Table>
            <Button fluid color='brown' onClick={this.handleClick}>Submit</Button>
        </div>
      )
    }
 } 


export default SmellTable