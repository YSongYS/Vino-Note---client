import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css';
import Nav from './containers/Nav';
import Home from './containers/Home';
import Setting from './containers/Setting';
import LogForm from './containers/LogForm';
import LogList from './containers/LogList';

class App extends React.Component {

  state = {
    user_id: undefined,
    loggedIn: false,
    log_id:undefined
  }

  toggleLoginState = () => {
    if(window.localStorage.token) {
      this.setState({user_id: window.localStorage.user_id, loggedIn: true})
    } else {
      this.setState({user_id: undefined, loggedIn: false})
    }
  }

  handleLogOut = () => {
    window.localStorage.clear()
  }

  selectLog = (logId) => {
    this.setState({
      log_id:logId
    })
  }

  unselectLog = () => {
    this.setState({
      log_id:undefined
    })
  }

  componentDidMount() {
    this.toggleLoginState()
  }

  render() {
    return (
        <Router>
          {this.state.loggedIn ?
            <React.Fragment>
            <Nav logOut={this.handleLogOut} toggleLoginState={this.toggleLoginState}/>

            <div className='page-container'>
            <Route
              exact path="/dash"
              render={(routeProps) => <LogList user_id={this.state.user_id} selectLog={this.selectLog} log_id={this.state.log_id}/>}
            />
            <Route
              exact path="/create"
              render={(routeProps) => <LogForm user_id={this.state.user_id} log_id={this.state.log_id} unselectLog={this.unselectLog}/>}
            />
            <Route
              exact path="/setting"
              render={(routeProps) => <Setting user_id={this.state.user_id}/>}
            />
            </div>
            </React.Fragment>
            :
            <Route exact path="/" render={(routeProps) => <Home toggleLoginState={this.toggleLoginState}/>} />
          }
        </Router>
    );
  }
}

export default App;
