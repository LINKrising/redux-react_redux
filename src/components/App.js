import React, { Component } from 'react'
import Cou from './Counter'
import Home from './Home'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


  export default class App extends Component {

    render() {
    return (
        <div>
          <Router>
            <div>
              <ul>
                <li><Link to='/'>counter</Link></li> 
                <li><Link to='/home/111'>home</Link></li> 
              </ul>
              <Route exact path='/' component={Cou}/>
              <Route path='/home/:id' component={Home}/>
            </div>
          </Router>
        </div>
      
    )
  }
}
