const initialState = {
  signUpError: null,
  signUpSuccess: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        signUpSuccess: action.payload,
        signUpError: null,
      };
    case "SIGNUP_ERROR":
      return {
        ...state,
        signUpError: action.payload,
        signUpSuccess: null,
      };
    default:
      return state;
  }
};
export default authReducer;
