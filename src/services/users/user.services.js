import axios from "axios";

let options = {
    baseURL: 'https://jsonplaceholder.typicode.com/',
}

let axiosInstance = axios.create(options);

const path = {
    users: "users"
}

const getUser = () => {
    return axiosInstance.get(path.users) // promise
};

export {getUser}