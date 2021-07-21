import {GET_COMMENTS} from "../actionTypes";
import {getComment} from "../../services/comments/comments.services";



export const fetchComment = (id) => async (dispatch) => {
    try {
        const res = await getComment(id).then()
        console.log(res)
        const data= await res.data
        console.log(data)
        dispatch(getCommentCreators(data))
    } catch (e) {
        console.log(e)
    }
}


export const getCommentCreators = (payload) => ({type: GET_COMMENTS, payload})