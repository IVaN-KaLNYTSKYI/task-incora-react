import {GET_POSTS, GET_POSTS_ID, POST_POSTS, PUT_POSTS} from "../actionTypes";

const initialState = {
    postsId: [],
    post:[],
    postUpdate:[],
    posts:[]
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS_ID: {
            return {
                ...state, postsId: action.payload
            }
        }

        case GET_POSTS: {
            return {
                ...state, posts: action.payload
            }
        }

        case POST_POSTS: {
            return {
                ...state, post: action.payload
            }
        }

        case PUT_POSTS: {
            return {
                ...state, postUpdate: action.payload
            }
        }

        default:
            return state
    }
}