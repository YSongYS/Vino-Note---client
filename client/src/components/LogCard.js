import React from 'react'
import CardFront from './CardFront';
import CardBack from './CardBack';
import API from '../API';

class LogCard extends React.Component {
    state = {
        isClicked: false,
        wineInfo:undefined,
        logInfo:this.props.logInfo
    }

    handleClick = () => {
        this.setState({isClicked: !this.state.isClicked})
    }

    componentDidMount(){
      API.simpleShowFetch("wine",this.props.logInfo.wine_id)
        .then(wineInfo => this.setState({
          wineInfo: {...wineInfo}
      }))
    }




    render() {
        return (
            this.state.isClicked? <CardBack handleClick={this.handleClick} logInfo={this.state.logInfo} wineInfo={this.state.wineInfo} selectLog={this.props.selectLog}/> :
            <CardFront handleClick={this.handleClick} logInfo={this.state.logInfo} wineInfo={this.state.wineInfo}/>
    )
  }
}

export default LogCard
