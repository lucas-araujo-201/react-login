import React, {useState, useContext} from "react";

import {
  BrowserRouter as Routers,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

import { AuthProvider, AuthContext } from "./contexts/Auth/auth";


export const AppRoutes = () => {
  const Private = ({ children }) => {
    const {authenticated, loading} = useContext(AuthContext);

    if(loading){
      return <div className="loading">Carregando...</div>
    }


    if(!authenticated) {
      return <Navigate to="/login"/>
    }

    return children;
  }

  return (
    <Routers>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Private> <Home /> </Private>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </Routers>
  );
};
