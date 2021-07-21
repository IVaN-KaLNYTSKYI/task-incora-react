import '../Posts.css'
import {Link} from "react-router-dom";
export default function PostUpdate ({value,remove,update}) {
    return(
        <div className={"posts-main"}>
            User-{value.userId}  Post:{value.title}
            <button onClick={()=>{remove(value.id)}}>delete</button>
            <button onClick={()=>{update(value.id)}}>edit</button>
            <Link to={'/post/'+value.id}><button>comment</button></Link>
        </div>
    )
}