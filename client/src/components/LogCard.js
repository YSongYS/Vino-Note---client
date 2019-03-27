import React from 'react'
import CardFront from './CardFront';
import CardBack from './CardBack';

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
      this.getWineInfo(this.props.logInfo.wine_id)
    }

    getWineInfo = (wineId) => {
      const url = `http://localhost:3000/wines/${wineId}`
      return fetch(url)
        .then(res => res.json())
        .then(wineInfo => this.setState({
          wineInfo: {...wineInfo}
        }))
    }

    render() {
        return (
            this.state.isClicked ?
            <CardBack handleClick={this.handleClick} logInfo={this.state.logInfo} wineInfo={this.state.wineInfo}/> :
            <CardFront handleClick={this.handleClick} wineInfo={this.state.wineInfo}/>
        )
    }
}

export default LogCard
