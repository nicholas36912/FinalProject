import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import quotesReducer from './reducer';

const store = createStore(quotesReducer, applyMiddleware(thunk));

export default store;

