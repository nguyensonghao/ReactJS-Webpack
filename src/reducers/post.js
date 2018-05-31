import { FETCH_ALL_POST, FETCH_POST } from '../constants/actionTypes';

const initPostState = {
    list: [],
    post: {}
}

export default (state = initPostState, action) => {
    switch (action.type) {
        case FETCH_ALL_POST:
            return Object.assign({}, state, {
                list: action.list
            });
        case FETCH_POST:
            return Object.assign({}, state, {
                post: action.post
            });
        default:
            return state;
    }
}