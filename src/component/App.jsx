import '../asset/App.scss';
import NavBar from './navBar/NavBar';
import Home from '../pages/homePage/Home';
import Sign from '../pages/auth/Sign';
import SearchResult from '../pages/resultPage/SerachResult';
import ReservationResult from '../pages/resultPage/ReservationResult';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/dashboard/Dashboard';
import jwt_decode from 'jwt-decode';
import { useState } from 'react';

function App() {
	return (
		<div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/users/login" element={<Sign />} />
        <Route path="/result" element={<SearchResult />} />
        <Route path="/reserve" element={<ReservationResult />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
