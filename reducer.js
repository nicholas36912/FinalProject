import { SET_QUOTES, SET_NEWS } from './actions';

const initialState = {
  quotes: [],
  news: [],
};

const quotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUOTES:
      return {
        ...state,
        quotes: action.payload,
      };
    case SET_NEWS:
      return {
        ...state,
        news: action.payload,
      };
    default:
      return state;
  }
};

export default quotesReducer;
