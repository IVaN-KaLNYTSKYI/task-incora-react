import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Link} from "react-router-dom";

import './Users.css'
import {fetchUsers} from "../../redux/actionCreators/usersCreators";
import User from "./user.component/User";

export default function Users() {

    const dispatch = useDispatch()
    const {users} = useSelector(({users}) => (users))

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch,])

    return (
        <div>
            <div className={"users-box"}>{
                users && users.map((value) => {
                    return (<User
                        key={value.id}
                        item={value}
                    />)
                })
            }</div>
            <div className={"posts-btn"}>
                <Link to={'/posts'}><button>Posts</button></Link>
            </div>
        </div>
    )
}