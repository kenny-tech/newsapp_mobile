import axios from 'axios';

import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
    FETCH_NEWS_ITEMS
} from './types';

const ROOT_URL = 'http://localhost:3090';
const NEWS_ITEMS = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=20ef60a323ed45269c4bc228c6d75956';

export const signinUser = ({ email, password }) => {
    return (dispatch) => {
        // submit email/password to the server
        axios.post(`${ROOT_URL}/signin`, { email, password })
            .then(response => {


                // - save the jwt token
                localStorage.setItem('token', response.data.token);
                console.log('got here');

                // if request is good...
                // - update state to indicate user is authenticated
                dispatch({ type: AUTH_USER });

                // - redirect to the route '/feature'
                // History.push('/news');
            }).catch(() => {
                // if request is bad...
                // - show an error to the user
                dispatch(authError('Invalid Email/Password'));
            });
    };
};

export const signupUser = ({ email, password }) => {
    return (dispatch) => {
        // submit email/password to the server
        axios.post(`${ROOT_URL}/signup`, { email, password })
            .then(response => {
                dispatch({ type: AUTH_USER });
                localStorage.setItem('token', response.data.token);
                // History.push('/news');
            })
            .catch(err => {
                dispatch(authError(err.response.data.error));
            });
    };
};

export const authError = (error) => {
    return {
        type: AUTH_ERROR,
        payload: error
    };
};

export const signoutUser = () => {
    localStorage.removeItem('token')
    return { type: UNAUTH_USER };
};

export const fetchNews = () => {
    return (dispatch) => {
        axios.get(NEWS_ITEMS, {
            headers: { authorization: localStorage.getItem('token') }
        })
        .then(response => {
            dispatch({
                type: FETCH_NEWS_ITEMS,
                payload: response.data.articles
             });
        });
    };
};
