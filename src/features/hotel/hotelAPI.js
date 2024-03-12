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

export const getHotelById = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(API + "hotel/" + id);
      resolve({ data: response.data });
    } catch (error) {
      reject({ message: error.response.data.message });
    }
  });
}

export const getHotelByUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(API + "hotel/owner/hotels", { withCredentials: true });
      resolve({ data: response.data });
    } catch (error) {
      reject({ message: error.response.data.message });
    }
  });
}
