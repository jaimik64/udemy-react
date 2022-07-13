import axios from 'axios'

const KEY = 'AIzaSyACH0vSm6pvhUhxV8XFLtHtqZEmp9ijeJo';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
});