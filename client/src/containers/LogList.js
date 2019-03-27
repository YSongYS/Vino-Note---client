import React from 'react'
import LogCard from '../components/LogCard';
import Stats from '../components/Stats';
import { Card, Divider, Button, Icon } from 'semantic-ui-react'


class LogList extends React.Component {

    state = {
      scrollPosition:0,
      displayDownButton: false,
      displayUpButton: false,
      wine: []
    }


    constructor(props){
      super(props)
      this.statsRef = React.createRef()
    }

    handleScrollToStats = () => {
      window.scrollTo({top: this.statsRef.current.offsetTop, behavior:'smooth'})
    }

    handleScrollToList = () => {
      window.scrollTo({top: 0, behavior:'smooth'})
    }

    handleScroll = (event) => {
      this.setState({
        scrollPosition:window.pageYOffset
      },this.checkScroll)
    }

    checkScroll = () => {
      if (this.state.scrollPosition>0 && this.state.scrollPosition<this.statsRef.current.offsetTop-500) {
        this.setState({
          displayDownButton:true,
          displayUpButton:false
        })
      }
      else if (this.state.scrollPosition>this.statsRef.current.offsetTop-500) {
        this.setState({
          displayDownButton:false,
          displayUpButton:true
        })
      }
      else {
        this.setState({
          displayDownButton:false,
          displayUpButton:false
        })
      }
    }

    componentDidMount(){
      window.addEventListener('scroll', this.handleScroll)
    }

    render() {
        return (
            <div className='card-list'>

                {this.state.displayDownButton?
                <Button className='dashboard-Down' color='olive' onClick={this.handleScrollToStats} size='small' >
                  <Icon name='angle double down'/>See Stats
                </Button>
                : null
                }
                {this.state.displayUpButton?
                <Button className='dashboard-Up' color='olive' onClick={this.handleScrollToList} size='small' >
                  <Icon name='angle double up'/>Back on top
                </Button>
                :null
                }

                <Card.Group>
                    <LogCard />
                    <LogCard />
                    <LogCard />
                    <LogCard />
                    <LogCard />
                    <LogCard />
                    <LogCard />
                    <LogCard />
                    <LogCard />
                    <LogCard />
                    <LogCard />
                    <LogCard />
                    <LogCard />
                    <LogCard />
                    <LogCard />
                </Card.Group>

                <br/><br/><br/><br/>
                <div ref={this.statsRef}>
                <Divider horizontal> Statistics </Divider>
                </div>
                <br/><br/>
                <Stats />
                <br/><br/><br/><br/>

            </div>
        )
    }
}

export default LogList
