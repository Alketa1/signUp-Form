import axios from "axios";

export const signUp = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://django.aakscience.com/signup/",
        userData
      );
      dispatch({
        type: "SIGNUP_SUCCESS",
        payload: response.data,
      });
    } catch (error) {
      if (error.response) {
        console.error("Error Response Data:", error.response.data);
        dispatch({
          type: "SIGNUP_ERROR",
          payload: error.response.data,
        });
      } else if (error.request) {
        console.error("No response received:", error.request);
        dispatch({
          type: "SIGNUP_ERROR",
          payload: "No response received from the server.",
        });
      } else {
        console.error("Error:", error.message);
        dispatch({
          type: "SIGNUP_ERROR",
          payload: "An error occurred while processing the request.",
        });
      }
    }
  };
};
