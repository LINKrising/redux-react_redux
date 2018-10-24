import {combineReducers} from 'redux'
import {add_num,asyn_add_num} from './action-types'
const initState = {
    counterNum:2
}
//add reducers
function add(state=initState,action){
    const counterNum = state.counterNum
    switch (action.type) {
        case add_num:
        case asyn_add_num:
            return {counterNum:counterNum+1}
        default:
            return state
    }
}

const reducers = combineReducers({add})
export default reducers