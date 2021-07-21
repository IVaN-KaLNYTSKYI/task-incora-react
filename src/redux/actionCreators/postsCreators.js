import {GET_POSTS, GET_POSTS_ID, POST_POSTS, PUT_POSTS} from "../actionTypes";
import {createPosts, getPost, getPostId, updatePostId} from "../../services/posts/posts.services";



export const fetchPost = () => async (dispatch) => {
    try {
        const res = await getPost().then()
        console.log(res)
        const data= await res.data
        console.log(data)
        dispatch(getPostCreators(data))
    } catch (e) {
        console.log(e)
    }
}

export const fetchPostId = (id) => async (dispatch) => {
    try {
        const res = await getPostId(id).then()
        const data = await res.data
        dispatch(getPostIdCreators(data))
    } catch (e) {
        console.log(e)
    }
}

export const fetchPostPosts = (body) => async (dispatch) => {
    try {
        const res = await createPosts(body).then()
        console.log(res)
        const data = await res.data
        dispatch(postPostsCreators(data))
    } catch (e) {
        console.log(e)
    }
}

export const fetchUpdatePost = (id,text) => async (dispatch) => {
    try {
        const res = await updatePostId(id, text).then()
        console.log(res)
        const data = await res.data
        dispatch(updatePostsCreators(data))
    } catch (e) {
        console.log(e)
    }
}

export const getPostCreators = (payload) => ({type: GET_POSTS, payload})
export const getPostIdCreators = (payload) => ({type: GET_POSTS_ID, payload})
export const postPostsCreators = (payload) => ({type: POST_POSTS, payload})
export const updatePostsCreators = (payload) => ({type: PUT_POSTS, payload})
