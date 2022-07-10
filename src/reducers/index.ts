import { combineReducers } from "redux";
import { todosReducer } from "./todos";
import { Todo } from "../actions";

export interface StoreState {
    todos: Todo[];
}

// todos return value is array object, not a function, thus todos: Todo[]

export const reducers = combineReducers<StoreState>({
    todos: todosReducer,
});