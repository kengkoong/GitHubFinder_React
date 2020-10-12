import * as TYPE from "../types";
export default (state, action) => {
  switch (action.type) {
    case TYPE.SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case TYPE.GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case TYPE.CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false,
      };
    case TYPE.GET_REPOS:
        return {
            ...state,
            repos:action.payload,
            loading:false
        }
    case TYPE.SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
