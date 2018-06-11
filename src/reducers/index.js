import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import contact from './contact';

export default combineReducers({
    contact,
    form: formReducer,
    routing: routerReducer
});