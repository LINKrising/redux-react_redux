import {add_num,asyn_add_num} from './action-types'
export const add_num_1 = ()=>({type:add_num})
export const asy_add_num_1 = ()=>({type:asyn_add_num})


export function ADDNUM(){return dispatch=>dispatch(add_num_1())}
export function ASYNADDNUM(){return dispatch=> dispatch(add_num_1())}
