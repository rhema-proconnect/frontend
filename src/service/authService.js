import {
  registrationStart,
  registrationEnd,
  confirmEmailStart,
  confirmEmailEnd,
  // confirmOtpStart,
  loginStart,
  loginFailure,
  loginSuccess,
  loadSuccess,
  loadFailure,
  loadStart,
  fetchingStart,
  fetchingFinish,
} from "../feature/authSlice";
import { openAlert } from "../feature/alertSlice";
import setBearer from "../utils/setBearer";
import axiosInstance from "./axiosInstance";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

export const registerUser = (userData) => {
  return axiosInstance.post("/register", userData);
};

export const loginUser = (userData) => {
  return axiosInstance.post("/auth/login", userData);
};

export const getUser = async (id) => {
  const res = await axiosInstance
    .get(`/user/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  return res;
};

export const isLoggedIn = () => {
  const token = getToken();
  if (token) {
    const payLoad = jwtDecode(token);
    const isLogin = Date.now() < payLoad.exp * 1000;
    return isLogin;
  }
};

export const getUserInfo = async () => {
  const token = getToken();
  if (token) {
    const payLoad = jwtDecode(token);
    // console.log(payLoad)
    const res = await getUser(payLoad?.id);
    return res;
  }
  return null;
};

export const setToken = (token) => {
  const res = localStorage.setItem("token", token);
  return res;
};

export const getToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return token;
  }
  return null;
};

export const logOut = () => {
  window.location.reload();
  localStorage.clear();
};

// -------------------------------------------Auth with redux---------------------------------------------------------------------
export const getAllUsers = () =>{
  return axiosInstance.get("/auth/all/users");
}


export const register = async (
  { username, email, password, repassword },
  dispatch
) => {
  dispatch(registrationStart());
  if (password !== repassword) {
    dispatch(
      openAlert({
        message: "Vos mots de passe ne correspondent pas!",
        severity: "error",
      })
    );
  } else {
    try {
      const res = await axiosInstance.post("/users/signup", {
        username,
        email,
        password,
      });
      dispatch(
        openAlert({
          message: res.data.message,
          severity: "success",
          nextRoute: "/confirmEmail",
          duration: 1500,
        })
      );
    } catch (error) {
      console.log("res", error.message)
      dispatch(
        openAlert({
          message: error?.response?.data?.errMessage
            ? error.response.data.errMessage
            : error.message,
          severity: "error",
        })
      );
    }
  }
  dispatch(registrationEnd());
};

export const confirmEmailService = async ({email, verificationCode}, dispatch) =>{
  dispatch(confirmEmailStart());
  try {
    const res = await axiosInstance.post('/users/verify-email', { email, verificationCode });
    const  message  = res.data.message;
    // const user = res.data.data
    // sessionStorage.setItem("token", user);
    // console.log(user)
    dispatch(
      openAlert({
        message,
        severity: "success",
        duration: 500,
        nextRoute: "/login",
      })
    );
    // return user
  } catch (error) {
    dispatch(confirmEmailEnd());
    dispatch(
      openAlert({
        message: error?.response?.data?.errMessage
          ? error.response.data.errMessage
          : error.message,
        severity: "error",
      })
    );
  }
}

export const login = async ({ email, password }, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axiosInstance.post('/auth/login', { email, password });
    const  message  = res.data.message;
    const user = res.data.data
    localStorage.setItem("token", user);
    // console.log(user)
    dispatch(loginSuccess({ user }));
    dispatch(
      openAlert({
        message,
        severity: "success",
        duration: 500,
        nextRoute: "/dash",
      })
    );
    return user
  } catch (error) {
    dispatch(loginFailure());
    dispatch(
      openAlert({
        message: error?.response?.data?.errMessage
          ? error.response.data.errMessage
          : error.message,
        severity: "error",
      })
    );
  }
};

export const loadUser = async (dispatch) => {
  dispatch(loadStart());
  if (!localStorage.token) return dispatch(loadFailure());
  setBearer(localStorage.token);
  try {
    const res = await axiosInstance.get("get-user");
    dispatch(loadSuccess({ user: res.data }));
  } catch (error) {
    dispatch(loadFailure());
  }
};

export const getUserFromEmail = async (email, dispatch) => {
  dispatch(fetchingStart());
  if (!email) {
    dispatch(
      openAlert({
        message: "Veuillez écrire un e-mail pour inviter",
        severity: "warning",
      })
      );
      dispatch(fetchingFinish());
      return null;
  }
    
  try {
    const res = await axiosInstance.post("get-user-with-email", { email });
    dispatch(fetchingFinish());
    return res.data;
  } catch (error) {
    dispatch(
      openAlert({
        message: error?.response?.data?.errMessage
        ? error.response.data.errMessage
        : error.message,
        severity: "error",
      })
      );
     dispatch(fetchingFinish());
     return null;
  }
};
