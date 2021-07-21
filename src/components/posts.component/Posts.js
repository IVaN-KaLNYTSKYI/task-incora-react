import './Posts.css'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchPost} from "../../redux/actionCreators/postsCreators";
import Post from "./post.component/Post";


export default function Posts () {
    const dispatch = useDispatch()
    const {posts} = useSelector(({posts}) => (posts))

    useEffect(() => {
        dispatch(fetchPost())
    }, [dispatch,])



    return(
      <div>
          {
              posts && posts.map((value) => {
                  return <Post key={value.id} value={value}/>
              })
          }
      </div>
  )
}