import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Counter from './Counter'
export default class Home extends Component {
  state = {list:['aa','bb']}
  render() {
    const {list} = this.state
    return (
      <div>
        <h2>{this.props.match.params.id}----{this.props.match.url}-----{this.props.match.path}</h2>
        <Router>
          <div>
            <div>
              <ul>
                {list.map((item,index)=><li  key={index}><Link to={`/${item}`}>{item}</Link></li> )}
              </ul>

            </div>
            <Route path='/co' component={Counter}/>
          </div>

        </Router>
      </div>
    )
  }
}
