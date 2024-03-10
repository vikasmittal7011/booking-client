import axios from "axios";

const API = process.env.REACT_APP_URL;

export function fetchUserData() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(API + "user",
        { withCredentials: true, }
      );
      resolve({ data: response.data });
    } catch (error) {
      reject({ message: error.response.data.message });
    }
  });
}
