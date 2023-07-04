import axios from "axios";
import * as action from "./actionTypes";


export const fetchDataRequest=()=>{
    return{
        type:action.FETCH_DATA_REQUEST
    }
}
export const fetchDataSuccess=(posts)=>{
    return{
        type:action.FETCH_DATA_SUCCESS,
        payload:posts
    }
}
export const fetchDataFailure=(error)=>{
    return{
        type:action.FETCH_DATA_FAILURE,
        payload:error
    }
}

export const accessData = () => {
    return (dispatch) => {
        dispatch(fetchDataRequest())
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                dispatch(fetchDataSuccess(response.data))
            })
            .catch(error => dispatch(fetchDataFailure(error)))
    }
}
  

  
