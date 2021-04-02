import axios from "axios";

//Task List:
//Build and export a function used to send in our authorization token

const axiosWithAuth = () => {
    return axios.create({
        baseURL:'https://tt-24-use-my-tech-stuff.herokuapp.com/api',
        headers:{
            'authorization':localStorage.getItem("token")
        }
    })
}

export default axiosWithAuth;