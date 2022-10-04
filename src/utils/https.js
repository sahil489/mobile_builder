import axios from "axios";

//POST REQUEST
export const httpPost = (url, data) =>
  new Promise((resolve) => {
    axios
      .post(url, data, {
        withCredentials: true,
      })
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        resolve(error.response);
      });
  });

//GET REQUEST
export const httpGet = async (url, params) =>
  new Promise((resolve) => {
    axios
      .get(url, params, {
        withCredentials: true,
      })
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        resolve(error.response);
      });
  });

//PUT REQUEST
export const httpPut = (url, data) =>
  new Promise((resolve) => {
    axios
      .put(url, data, {
        withCredentials: true,
      })
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        resolve(error.response);
      });
  });

//DELETE REQUEST
export const httpDelete = (url, params = {}) =>
  new Promise((resolve, reject) => {
    axios
      .delete(url, params, {
        withCredentials: true,
      })
      .then((res) => {
        resolve(res?.data);
      })
      .catch((error) => {
        reject(error.response);
      });
  });
