import axios from "axios"

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: 'Client-ID AAi5SWxh-pzK3RxRs2MHm1mYcxwMNNlv3hnJzhfRWX8'
    }
})
