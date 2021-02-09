import axios from 'axios';


const KEY = 'AIzaSyBadKO52juZ74GIbkkCi1N57ZizLFV4z-w';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 7,
        key: KEY
    }
});