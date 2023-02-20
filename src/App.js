//import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Resena from "./pages/Resena";
import { GoogleOAuthProvider } from "@react-oauth/google";
//import { client_id } from "./assets/Constantes/Constantes";
import { FacebookProvider } from "react-facebook";
import UserContext from "./context/UserContext";
import { useState } from "react";

const client_id =
  "708733918495-c3d92i89prjoq8rs7q5iskgjtdmmca96.apps.googleusercontent.com";
const faceID = "5634334240010658";
//5634334240010658  hernan
//6271650052857779  ROR
const initialDataUser = {
  nameUser: "",
  telUser: "",
  emailUser: "",
  urlImageUser: "",
  isLogged: false,
};

function App() {
  const [dataUser, setDataUser] = useState(initialDataUser);

  return (
    <FacebookProvider appId={faceID}>
      <GoogleOAuthProvider clientId={client_id}>
        <div className="">
          <UserContext.Provider
            value={[dataUser, setDataUser, initialDataUser]}
          >
            <HashRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/resena" element={<Resena />} />
              </Routes>
            </HashRouter>
          </UserContext.Provider>
        </div>
      </GoogleOAuthProvider>
    </FacebookProvider>
  );
}

export default App;
