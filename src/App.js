import './App.css';

import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {  BrowserRouter as Router, Route, Routes } from "react-router-dom";


export default class App extends Component {
  render() {
    return( 
      <>
<Router>
<Navbar/>
   <div className="container">
          <Routes>
            <Route exact path="/" element={<News key="general" category="general" country="in" />}></Route>
            <Route exact path="/home" element={<News key="general" category="general" country="in" />}></Route>
       <Route exact path="/business"element={<News key="busniess" category="busniess" country="in" />}></Route>
       <Route exact path="/entertainment"element={<News key="entertainment" category="entertainment" country="in" />}></Route>
        <Route exact path="/general"element={<News key="general" category="general" country="in" />}></Route>
       <Route exact path="/science"element={<News key="science" category="science" country="in" />}></Route>
        <Route exact path="/sports"element={<News key="sports" category="sports" country="in" />}></Route>
        <Route exact path="/health"element={<News key="health" category="health" country="in" />}></Route>
        <Route exact path="/technlogy"element={<News key="technology" category="technology" country="in" />}></Route>
          </Routes>
        </div>
    </Router>   
    </>
         
    );
  }
}
