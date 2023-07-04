/* eslint-disable default-case */

import { FETCH_DATA_REQUEST,FETCH_DATA_SUCCESS,FETCH_DATA_FAILURE } from "../action/actionTypes"


const initialState={
    loading:false,
    posts:[],
    error:""
}


const rootReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_DATA_REQUEST:return({...state,loading:true})  
        case FETCH_DATA_SUCCESS:return({...state,loading:false,posts:action.payload,error:""})
        case FETCH_DATA_FAILURE:return({...state,loading:false,posts:[],error:action.payload})
       default:return state
    }
}

export default rootReducer;