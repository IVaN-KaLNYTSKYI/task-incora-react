import axios from "axios";

let options = {
    baseURL: 'https://jsonplaceholder.typicode.com/',
}

let axiosInstance = axios.create(options);

const path = {
    posts: "posts",
    postsUserId: "posts?userId="
}

const createPosts = (body) => {
    return axiosInstance.post(path.posts,body) // promise
};

const getPost = () => {
    return axiosInstance.get(path.posts) // promise
};

const getPostId = (id) => {
    return axiosInstance.get(path.postsUserId+id) // promise
};

const deletePostId = (id) => {
    return axiosInstance.delete(path.posts +'/'+id) // promise
};

const updatePostId = (id,body) => {
    return axiosInstance.put(path.posts +'/'+id,body) // promise
};

export {createPosts, getPostId,deletePostId,updatePostId,getPost}