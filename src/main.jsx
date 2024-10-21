import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import Goal from "./pages/Goal";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Quize from "./pages/Quize";
import StartT from "./pages/StartT";
import Starting from "./pages/Starting";
import Health from "./pages/Health";




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
       <Route path="/" element={<Home/>}/>
       <Route path="/form" element={<Goal/>}/>
       <Route path="/signup" element={<Signup/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/profile" element={<Profile/>}/>
       <Route path="/quize" element={<Quize/>}/>
       <Route path="/start" element={<StartT/>}/>
       <Route path="/from" element={<Starting/>}/>
       <Route path="/health" element={<Health/>}/>
    </Route>
  
  )
)


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   
      <RouterProvider router={router} />
   
  </React.StrictMode>
);