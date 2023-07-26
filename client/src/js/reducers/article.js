import {
ARTICLE_ERROR,
    GET_ARTICLE,
    SET_LOADING,
} from "../const/actionTypes";
const initState = {
 articles:[],
 isLoading: false,
 error: {}
};
export default function (state = initState, { type, payload }) {
    switch (type) {
      case SET_LOADING:
        return { ...state, isLoading: true };
        case  GET_ARTICLE:
      return {
        ...state,
        articles: payload, isLoading: false  };

        case ARTICLE_ERROR:
            return {
              ...state,
              error: payload,
              loading: false
            };
              default:
                return state;
            }
          }
         