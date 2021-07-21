import axios from "axios";

let options = {
    baseURL: 'https://jsonplaceholder.typicode.com/',
}

let axiosInstance = axios.create(options);

const path = {
    comments: "comments?postId="
}

const getComment = (id) => {
    return axiosInstance.get(path.comments+id) // promise
};

export {getComment}