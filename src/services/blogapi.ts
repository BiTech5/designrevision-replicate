import axios from "axios";

const BlogAPI = {
    getBlog: (para:string) => {
        const API_URL = import.meta.env.VITE_API_URL
        return axios.get(`${API_URL}/${para}`);
    }
};

export default BlogAPI;