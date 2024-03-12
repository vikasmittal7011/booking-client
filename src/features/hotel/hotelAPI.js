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

export const upateHotel = (hotel) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(API + "hotel/update", { ...hotel },
        { withCredentials: true, }
      );
      resolve({ data: response.data });
    } catch (error) {
      reject({ message: error.response.data.message });
    }
  });
}


export const getHotels = (data) => {
  let queryString = "";

  for (let key in data.filters) {
    const categoryValues = data.filters[key];
    if (categoryValues.length) {
      queryString += `${key}=${categoryValues}&`;
    }
  }

  for (let key in data.sort) {
    queryString += `${key}=${data.sort[key]}&`;
  }

  for (let key in data.pagination) {
    queryString += `${key}=${data.pagination[key]}&`;
  }

  if (data.location) {
    queryString += `location=${data.location}&`;
  }

  if (data.maxPrice) {
    queryString += `price=${data.maxPrice}&`;
  }

  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(API + "hotel?" + queryString, { withCredentials: true });
      resolve({ data: response.data });
    } catch (error) {
      reject({ message: error.response.data.message });
    }
  });
}