import './PostsUserId.css'
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {fetchPostId, fetchPostPosts, fetchUpdatePost} from "../../redux/actionCreators/postsCreators";
import {deletePostId} from "../../services/posts/posts.services";
import PostUpdate from "../posts.component/post.component/PostUpdate";


export default function PostsUserId({id}) {
    const dispatch = useDispatch()
    const {postsId, post,postUpdate} = useSelector(({posts}) => (posts))
    let [title, setTitle] = useState("");
    let [body, setBody] = useState("");
    let [flag, setFlag] = useState(true);
    let [flagId, setFlagId] = useState(true);
    let [flagUpdate, setFlagUpdate] = useState(false);

    useEffect(() => {
        dispatch(fetchPostId(id))
    }, [dispatch, id])

    const add = () => {
        setFlag(false)
    }

    const addPosts = () => {
        setFlag(true)
        const obj = {userId: +id, title: title, body: body};
        dispatch(fetchPostPosts(obj))
    }
    const remove = (iD) => {
        deletePostId(iD).then(value => console.log(value))
    }
    const update = (Id )=> {
        setFlagId(Id)
        setFlagUpdate(true)
    }

    const comment = (Id )=> {
        setFlagId(Id)
        setFlagUpdate(true)
    }

    const edit = () => {
        const obj = {userId: +id,id:flagId, title: title, body: body};
        dispatch(fetchUpdatePost(flagId,obj))
        setFlagUpdate(false)
    }

    return (
        <div>
            {
                flag ? <div>
                        <div>
                            {

                                postsId && postsId.map((value) => {
                                    return <PostUpdate key={value.id} value={value} remove={remove} update={update} comment={comment}/>
                                })
                            }
                        </div>
                        <div>
                            Post create:{post && JSON.stringify(post)}
                            Post update:{postUpdate && JSON.stringify(postUpdate)}
                            <button onClick={add}>Add Post</button>
                        </div>
                    </div>
                    :
                    <div className={"popup"}>
                        <form>
                            <input
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder={"title"}
                            />
                            <input
                                onChange={(e) => setBody(e.target.value)}
                                placeholder={"body"}
                            />
                            <button onClick={addPosts}>Add</button>
                        </form>
                    </div>

            }
            {
               flagUpdate && <div className={"popup"}>
                    <form>
                        <input
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder={"title"}
                        />
                        <input
                            onChange={(e) => setBody(e.target.value)}
                            placeholder={"body"}
                        />
                        <button onClick={edit}>edit</button>
                    </form>
                </div>
            }
        </div>

    )
}