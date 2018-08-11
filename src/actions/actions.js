// importing axios
import axios from 'axios';

// root url
const root_url = 'http://reduxblog.herokuapp.com/api';
const API_KEY = "?key=charlie1234";

// action types
export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';

// action creators
export function fetchPosts() {
    const request = axios.get(`${root_url}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function createPost(values) {
    const post = axios.post(`${root_url}/posts${API_KEY}`, values);

    return {
        type: CREATE_POST,
        payload: post
    };
}