import axios from "axios";
import { ApiUrl } from "./ApiUrl";

export const loadCourse = async () => {
  try {
    const response = await axios.get(ApiUrl.loadCourse);
    if (response.data.data && response.data.data.length > 0) {
      return response.data.data;
    } else {
      return [];
    }
  } catch (error) {
    console.log(error);
  }
};
