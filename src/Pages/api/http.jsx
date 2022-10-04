import axios from "axios";

const baseURL = "https://blogimy.onrender.com/"

const http = axios.create({
    baseURL: baseURL
})

export default http;