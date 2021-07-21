import '../Posts.css'
export default function Post ({value}) {
  return(
      <div className={"posts-main"}>
          User-{value.userId}  Post:{value.title}
      </div>
  )
}