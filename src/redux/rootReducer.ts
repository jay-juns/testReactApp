import { combineReducers } from "redux";

import counter from './count/Count.reducer';
import posts from './post/Post.reducer';
import todos from './todo/Todo.reducer'

const rootReducer = combineReducers({
    counter,
    posts,
    todos
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;