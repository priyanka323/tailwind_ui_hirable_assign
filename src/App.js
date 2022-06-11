import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Landing from './component/Landing/Landing';
import Section from './component/Section/Section';
import Page from './component/Page/Page';
import Signup from './component/Signup/Signup'

function App() {
  return (
    <>
      <Navbar/>
      <Landing/>
      <Section/>
      <Page/>
      {/* <Signup/> */}
      {/* <div>
        <Router>
            <Routes>
              
              <Route path="/Signup" element={<Signup />}></Route>
            
            </Routes>
        </Router>
     </div> */}
    </>
  );
}

export default App;
