import { combineReducers } from "redux";
import todoReducer from "./todoRekducer";

const rootReducer = combineReducers({
    todos: todoReducer
});

export default rootReducer;