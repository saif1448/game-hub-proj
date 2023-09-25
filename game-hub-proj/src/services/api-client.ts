import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'b0e38f4a91844d18872767b91b2d964b'
    }
})