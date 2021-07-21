import './Comments.css'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchComment} from "../../redux/actionCreators/commentsCreators";
import Comment from "./comment.component/Comment";


export default function Comments ({id}) {
    const dispatch = useDispatch()
    const {comments} = useSelector(({comments}) => (comments))

    useEffect(() => {
        dispatch(fetchComment(id))
    }, [dispatch,id])

    return(
      <div>
          {
                  comments && comments.map((value) => {
                  return <Comment key={value.id} value={value}/>
              })
          }
      </div>
  )
}