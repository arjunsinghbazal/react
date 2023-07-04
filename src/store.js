import rootReducer from "./reducers/dataReducers";

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import detailsReducer from "./reducers/addDatareducers";
export const rootData=combineReducers({
   posts:rootReducer,
   detailsCard:detailsReducer
})

const store=createStore(rootData,applyMiddleware(thunk));

export default store;