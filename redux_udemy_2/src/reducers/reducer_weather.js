import {FETCH_WEATHER} from '../actions/index'

export default function(state = [] , action){
    switch(action.type){
        case FETCH_WEATHER:
        // return state.push
        // state를 직접적으로 건드려서는 안된다. 새로운 배열을 반환하는 형식으로 하자
        // return state.concat([action.payload.data]);
        // 위의 방식도 되지만 ES6 문법을 사용해보자면
        return [action.payload.data , ...state];
    }
     return state;  
 } 