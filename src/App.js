import './App.css';
import Users from "./components/users.component/Users";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/header.component/Header";
import Posts from "./components/posts.component/Posts";
import PostsUserId from "./components/postUserId.component/PostsUserId";
import Comments from "./components/comments.component/Comments";

function App() {
    return (
        <div>
            <Router>
                <Header/>
                <Switch>
                    <Route exact path={"/users"} render={() => {
                        return <Users/>
                    }}/>
                    <Route exact path={"/posts"} render={() => {
                        return <Posts/>
                    }}/>
                    <Route exact path={"/posts/:id"} render={({match: {params: {id}}}) => {
                        return <PostsUserId id={id}/>
                    }}/>
                    <Route exact path={"/post/:id"} render={({match: {params: {id}}}) => {
                        return <Comments id={id}/>
                    }}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
