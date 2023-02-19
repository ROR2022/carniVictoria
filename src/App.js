//import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Resena from "./pages/Resena";
import { GoogleOAuthProvider } from '@react-oauth/google';
//import { client_id } from "./assets/Constantes/Constantes";
import { FacebookProvider} from 'react-facebook';

const client_id = "708733918495-c3d92i89prjoq8rs7q5iskgjtdmmca96.apps.googleusercontent.com";
const faceID = '6271650052857779';

function App() {
  return (
    <FacebookProvider appId={faceID}>
    <GoogleOAuthProvider clientId={client_id}>
    <div className="">
      <HashRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/resena" element={<Resena/>}/>
        </Routes>
        </HashRouter>
    </div>
    </GoogleOAuthProvider>
    </FacebookProvider>
  );
}

export default App;
