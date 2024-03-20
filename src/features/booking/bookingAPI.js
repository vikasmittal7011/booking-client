import axios from "axios";

const API = process.env.REACT_APP_URL;

export const createPaymentIntent = (amount) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(API + "booking/checkout", { totalAmount: amount },
        { withCredentials: true, }
      );
      console.log(response.data)
      resolve({ data: response.data });
    } catch (error) {
      reject({ message: error.response.data.message });
    }
  });
}