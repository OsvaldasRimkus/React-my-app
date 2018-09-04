import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link, // or NavLink
  Switch
} from 'react-router-dom';
import Game from './Game';
import UserList from './UserList';
import Form from './Form';
import ErrorView from './ErrorView';
// import TestingComponent from './TestingComponent';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const MyRouter = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/game">Game</Link></li>
        <li><Link to="/persons">Persons</Link></li>
        <li><Link to="/form">Form</Link></li>
        {/* <li><Link to="/math/2/5/sum">Testing math component</Link></li> */}

        <li><Link to="/home">Home</Link></li>
        {/* <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li> */}
      </ul>

      <hr/>
      <Switch>
        <Route exact path="/game" component={Game}/>
        <Route exact path="/persons" component={UserList}/>
        <Route exact path="/form" component={Form}/>
        <Route exact path="/home" component={Home}/>
        <Route component={ErrorView}/>
        {/* <Route exact path="/math/:a/:b/:o" component={TestingComponent}/> */}

        {/* <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/> */}

      </Switch>
    </div>
  </Router>
)
export default MyRouter