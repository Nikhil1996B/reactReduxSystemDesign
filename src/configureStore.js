import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const preLoadedState = undefined;

export default function configureStore() {
  const middlwares = [thunkMiddleware];
  const middlewareEnhancers = applyMiddleware(...middlwares);

  const enhancers = [middlewareEnhancers];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, {}, composedEnhancers);

  return store;
}
