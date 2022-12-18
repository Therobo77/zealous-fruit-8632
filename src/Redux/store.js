import { combineReducers, legacy_createStore } from "redux";
import { reducer as AuthReducer } from "./Authentication/reducer";
import { reducer as UserAuth } from "./UserAuth/reducer";

const rootRducer = combineReducers({AuthReducer,UserAuth});
export const store = legacy_createStore(rootRducer);
