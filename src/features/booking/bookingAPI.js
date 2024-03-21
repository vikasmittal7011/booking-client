import axios from "axios";

const API = process.env.REACT_APP_URL;

export const createPaymentIntent = (amount) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(API + "booking/checkout", { totalAmount: amount },
        { withCredentials: true, }
      );
      resolve({ data: response.data });
    } catch (error) {
      reject({ message: error.response.data.message });
    }
  });
}

export const fetchMybookings = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(API + "booking",
        { withCredentials: true, }
      );
      resolve({ data: response.data });
    } catch (error) {
      reject({ message: error.response.data.message });
    }
  });
}