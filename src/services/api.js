import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API,
});

export const createSession = async (login, password) => {
  const config = {
    headers: { Authorization: `Basic ${process.env.REACT_APP_REST_KEY}` },
  };

  const bodyParameters = {
    login: login,
    password: password,
  };

  return api.post("/auth/1/1", bodyParameters, config);
};

export const getProducts = async () => {
    return api.get("/product");
} 
