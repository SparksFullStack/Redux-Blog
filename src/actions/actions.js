// importing axios
import axios from 'axios';

// root url
const root_url = 'http://reduxblog.herokuapp.com/api';
const API_KEY = "?key=charlie1234";

// action types
export const FETCH_POSTS = 'fetch_posts';

// action creators
export function fetchPosts() {
    const request = axios.get(`${root_url}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}