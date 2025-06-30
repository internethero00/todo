import axios from "axios";


export default class PostService {
    static async getAll(limit: number = 10, page: number = 1) {
        return await axios.get("https://jsonplaceholder.typicode.com/posts", {
            params: {
                _limit: limit,
                _page: page,
            }
        })
    }
}