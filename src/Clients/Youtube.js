import axios from 'axios';

const KEY = "AIzaSyBkm8P1hOnBu8vivBoL42-BU--uXXsDiH4";

export default axios.create({
  baseURL:'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 1,
    key: KEY
  },
  headers:{}
})
