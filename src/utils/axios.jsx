import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://mail-projectsapi.onrender.com"
});

export default axiosInstance;