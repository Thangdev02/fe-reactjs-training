import axios from "axios";
import { ApiUrl } from "./ApiUrl";

export const login = async (payload) => {
  try {
    const response = await axios.post(ApiUrl.login, payload);
    if (response) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

export const register = async (payload) => {};
export const forgotPassword = async (payload) => {};
