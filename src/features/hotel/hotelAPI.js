import axios from "axios";

const API = process.env.REACT_APP_URL;

export const createHotel = (hotel) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(API + "hotel", { ...hotel },
        { withCredentials: true, }
      );
      resolve({ data: response.data });
    } catch (error) {
      reject({ message: error.response.data.message });
    }
  });
}
