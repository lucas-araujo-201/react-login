import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { api, createSession } from "../../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");
    const recoveredToken = localStorage.getItem("token");

    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser));
      navigate("/");
    }

    if(recoveredToken){
      api.defaults.headers.Authorization = `Bearer ${recoveredToken}`;
    }

    setLoading(false);
  }, []);

  const signin = async (login, password) => {
    console.log("Login", { login, password });

    const respose = await createSession(login, password);

    const loggedUser = respose.data.data.user;
    const token = respose.data.data.token;

    localStorage.setItem("user", JSON.stringify(loggedUser));
    localStorage.setItem("token", token);

    api.defaults.headers.Authorization = `Bearer ${token}`;

    setUser(loggedUser);
    navigate("/");
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, loading, signin, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
