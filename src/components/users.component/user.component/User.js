import './User.css'
import {Link} from "react-router-dom";

export default function User({item}) {
    return (
        <div className={"box-user"}>
            <div className={"user-main"}>
                <h3>Name:{item.name}</h3>
                <p>Username:{item.username}</p>
                <p>Email:{item.email}</p>
            </div>
            <div className={"user-btn"}>
                <Link to={'/posts/'+item.id}><button>Details</button></Link>
            </div>
        </div>
    )
}