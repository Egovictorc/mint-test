import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk"
import itemsReducer from "./reducers/itemReducer"


const middleware = [thunk]

const store = createStore(itemsReducer, composeWithDevTools(
  applyMiddleware(...middleware),
  // other store enhancers if any
));


export default store;