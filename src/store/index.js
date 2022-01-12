import { createStore, combineReducers } from "redux";
// we use combineReducer to combine more than one Reducer
// here we are using only one reducer of ProductsReducer
// next we will create cart Reducer too so thats y we are using
// combineReducer
import { devToolsEnhancer } from "redux-devtools-extension";
// we install npm install --save redux-devtools-extension
// and then import below devToolsEnhancer and then add it in const store
// then it will connect to redux
import ProductsReducer from "./reducers/ProductsReducer";
import CartReducer from "./reducers/CartReducer";

const root = combineReducers({
  ProductsReducer,
  CartReducer,
  // here we have same key and value so we are using
  // ProductsReducer
});

const store = createStore(root, devToolsEnhancer());

export default store;

// from this store we will have access to all global stats
