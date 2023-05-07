import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/MyHome';
import MemberList from './components/pages/MemberList';
import MemberDetails from './components/pages/MemberDetails';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element ={<HomePage/>} />
        <Route path="/memberlist" element ={<MemberList/>} />
        <Route path="/memberdetails" element ={<MemberDetails/>} />

        </Routes>
    </div>
  );
}

export default App;
