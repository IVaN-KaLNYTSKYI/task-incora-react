import {GET_USERS} from "../actionTypes";
import {getUser} from "../../services/users/user.services";



export const fetchUsers = () => async (dispatch) => {
    try {
        const res = await getUser().then()
        console.log(res)
        const data= await res.data
        console.log(data)
        dispatch(getUsersCreators(data))
    } catch (e) {
        console.log(e)
    }
}


export const getUsersCreators = (payload) => ({type: GET_USERS, payload})
