import { FETCH_ALL_POST, FETCH_POST } from '../constants/actionTypes';

export const getList = (list) => {
    return {
        type: FETCH_ALL_POST,
        list: list
    }
}

export const getPost = (post) => {
    return {
        type: FETCH_POST,
        post: post
    }
}