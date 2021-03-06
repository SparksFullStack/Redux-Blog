//importing lodash
import _ from 'lodash';

// importing the action types
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions/actions';

export default 
function (state = {}, action){
    switch(action.type){
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        case FETCH_POST:
            const newState = { ...state, [action.payload.data.id]: action.payload.data };
            // console.log(newState);
            return newState;
        case DELETE_POST:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}