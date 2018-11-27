import { combineReducers } from 'redux';
import { reducer as authReducer } from './auth';
import { reducer as newsReducer } from './news';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    form: formReducer,
    auth: authReducer,
    news: newsReducer
});

export default rootReducer;