import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/MyHome';
import MemberList from './components/pages/MemberList';
import MemberDetails from './components/pages/MemberDetails';
import { routes } from './routes/routes';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={routes.home} element ={<HomePage/>} />
        <Route path={routes.memberlist} element ={<MemberList/>} />
        <Route path={routes.memberdetails} element ={<MemberDetails/>} />
        </Routes>
    </div>
  );
}

export default App;
