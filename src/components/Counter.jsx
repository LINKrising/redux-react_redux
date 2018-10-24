import React, { Component } from 'react'
import {connect} from 'react-redux'
import {add_num_1} from '../redux/actions'

class Counter extends Component {
  render() {
    const {onIncreaseClick} = this.props
    const {counterNum} = this.props
    return (
      <div>
          <p>{counterNum}</p>
          <button onClick={onIncreaseClick}>+</button>
          <button onClick={onIncreaseClick}>ASYN</button>
      </div>
    )
  }
}

// function mapStateToProps(state) {
//     return {
//         counterNum: state.add.counterNum
//     }
//   }
// function mapDispatchToProps(dispatch) {
//     return {
//       onIncreaseClick: () => dispatch(add_num_1())
//     }
//   }
const Cou  = connect(state=>({counterNum:state.add.counterNum}),dispatch=>({ onIncreaseClick: () => dispatch(add_num_1())}))(Counter)
export default Cou