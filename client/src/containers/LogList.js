import React from 'react'
import LogCard from '../components/LogCard';
import Stats from '../components/Stats';
import { Card, Divider, Button, Icon } from 'semantic-ui-react'


class LogList extends React.Component {

    state = {
      scrollPosition:0,
      displayDownButton: false,
      displayUpButton: false,
      all_logs: []
    }

    constructor(props){
      super(props)
      this.statsRef = React.createRef()
    }

    getAllLogs = (userId) => {
      const url = `http://localhost:3000/users/${userId}/logs`
      return fetch(url,{
        method:'GET',
        headers: {
          Authorization: localStorage.getItem("token")
        }
      })
        .then(res => res.json())
        .then(all_logs => this.setState({
          all_logs: all_logs
        }))
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
      this.getAllLogs(this.props.user_id)
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
                {this.state.all_logs.map(logObject=><LogCard logInfo={{...logObject}}/>)}
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
