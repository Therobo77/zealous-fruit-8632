import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import { reducer as AuthReducer } from "./Authentication/reducer";
import { reducer as UserAuth } from "./UserAuth/reducer";

const rootRducer = combineReducers({ AuthReducer, UserAuth });
const logger1 = store => next => action => {
    return next(action)
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(
  rootRducer,
  composeEnhancers(applyMiddleware(logger1))
);
