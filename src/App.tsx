import HomeScreen from "./Components/HomeScreen";
import NavBar from "./Components/NavBar";
import LoginScrn from "./Components/LoginScrn";
import Results from "./Components/Results";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { Navbar } from "react-bootstrap";

function App(){
  return (
    <>
    <Routes>
    <Route path="/" element={<HomeScreen />} />
    <Route path="/Results" element={<Results />} />
    </Routes>
    </>
  );
}

export default App;