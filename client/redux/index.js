import { combineReducers, createStore } from "redux";

const SEARCH_TAG = "SEARCH_TAG";

export const searchTagAction = (res) => {
  return {
    type: SEARCH_TAG,
    payload: res,
  };
};

export const questionAction = (res) => {
  return {
    type: QUESTION,
    payload: res,
  };
};

const initialstate = {
  searchTag: "",
};

const searchReducer = (state = initialstate, action) => {
  switch (action.type) {
    case SEARCH_TAG:
      return {
        searchTag: action.payload,
      };
    default:
      return state;
  }
};

export const askTagsAction = (res) => {
  return {
    type: "TAGS",
    payload: res,
  };
};

export const askBodyAction = (res) => {
  return {
    type: "CONTENT",
    payload: res,
  };
};

const askReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "TITLE":
      return {
        ...state,
        title: action.payload,
      };
    case "CONTENT":
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};

const combinedReducer = combineReducers({
  // loginReducer,
  // questionReducer,
  searchReducer,
  askReducer,
});

const store = createStore(combinedReducer);

export default store;
