import React, {useState} from "react";

import {
  BrowserRouter as Routers,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

import { AuthContext } from "./contexts/Auth/auth";

export const AppRoutes = () => {
    const [user, setUser] = useState(null);

    const signin = (login, password) => {
        console.log('Login', {login,password} );
        setUser({ id: "123"});
    };

    const logout = () => {
        console.log('Logout');
    }

    // user != null 
    // authenticated = false

  return (
    <Routers>
      <AuthContext.Provider value={{ authenticated: !!user, user, signin }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthContext.Provider>
    </Routers>
  );
};
