import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
//views
import Home from './Views/Home';
import About from './Views/About';
import Contact from './Views/Contact';
import DashBoard from './Views/DashBoard';
import Connection from './Views/Connection';
import Footer from './Components/Footer';
// import Navigation from './Components/Navigation';

//css
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <Router>
        <App />
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/dashboard" element={<DashBoard/>}></Route>
          <Route path="/login" element={<Connection/>}></Route>
        </Routes>
  </Router>,
  <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
