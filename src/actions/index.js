export const REQUEST_IN = "REQUEST_IN";
export const ADD_COUNT = "ADD_COUNT";
export const SUBTRACT_COUNT = "SUBTRACT_COUNT";

export const resivePosts = payload => {
  console.log("resivePosts", payload);
  return {
    type: REQUEST_IN,
    payload
  };
};

export const addCount = payload => {
  console.log("addCount", payload);
  return {
    type: ADD_COUNT,
    payload
  };
};

export const subCount = payload => {
  console.log("subCount", payload);
  return {
    type: SUBTRACT_COUNT,
    payload
  };
};

const fetchPosts = subreddit => dispatch => {
  return fetch("https://murmuring-citadel-13024.herokuapp.com/api/v1/iguser", {
    mode: "cors"
  })
    .then(response => response.json())
    .then(res => {
      console.log(res);
      dispatch(resivePosts(res));
    });
};
const addCountS = subreddit => dispatch => {
  return dispatch(addCount({}));
};
const subCountS = subreddit => dispatch => {
  return dispatch(subCount({}));
};

export const getFetchPost = subreddit => (dispatch, getState) => {
  // console.log(getState());
  return dispatch(fetchPosts(subreddit));
};
export const postAddCount = subreddit => (dispatch, getState) => {
  // console.log(getState());
  // console.log("dispatch", dispatch);
  return dispatch(addCountS(subreddit));
};

export const postSubCount = subreddit => (dispatch, getState) => {
  // console.log(getState());
  return dispatch(subCountS(subreddit));
};
