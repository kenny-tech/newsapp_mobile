import {
    FETCH_NEWS_ITEMS
} from '../actions/types';

export const reducer = ( state = {}, action) => {

    switch (action.type) {
        case FETCH_NEWS_ITEMS:
            return { ...state, newsItems: action.payload }
        default:
            return state;
    }
}