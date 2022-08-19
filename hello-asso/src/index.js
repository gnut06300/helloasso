import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from './App';
//views
import Home from './Views/Home';
import Association from './Views/Association';
import About from './Views/About';
// import Navigation from './Components/Navigation';

//css
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <Router>
        <App />
        {/* <Navigation /> */}
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route path='/association' element={<Association/>}></Route>
          <Route path='/about' element={<About/>}></Route>
        </Routes>
  </Router>,
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
