import axios from "axios";

const baseURL = "https://blogim.onrender.com"

const http = axios.create({
    baseURL: baseURL
})

export default http;