// src/redux/authSlice.js
const session = JSON.parse(localStorage.getItem("sessionUser"));

const initialState = {
  user: session || null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
}
