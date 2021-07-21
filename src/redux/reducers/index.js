import {combineReducers} from "redux";
import {usersReducer} from "./reducersUser";
import {postsReducer} from "./reducersPost";
import {commentsReducer} from "./reducersComments";

export * from './reducersComments'
export * from './reducersPost'
export * from './reducersUser'

export const rootReducer=combineReducers({
    users:usersReducer,
    posts:postsReducer,
    comments:commentsReducer,
})