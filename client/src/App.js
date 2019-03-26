import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Nav from './containers/Nav';
import Home from './containers/Home';
import Setting from './containers/Setting';
import LogForm from './containers/LogForm';
import LogList from './containers/LogList';

class App extends React.Component {

  state = {
    loggedIn:true
  }

  render() {
    return (
        <Router>
          {this.state.loggedIn?
            <React.Fragment>
            <Nav />
            <div className='page-container'>
            <Route exact path="/dash" component={LogList}/>
            <Route exact path="/create" component={LogForm}/>
            <Route exact path="/setting" component={Setting}/>
            </div>
            </React.Fragment>
            :<Route exact path="/" component={Home}/>
          }
        </Router>
    );
  }
}

export default App;
