import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Home } from '../Views/Home';
import { Profile } from '../Views/Profile';
import { About } from '../Views/About';
const Pages = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Profil" element={<Profile />} />
        <Route exact path="/About" element={<About />} />
      </Routes>

      {/* <Footer /> */}
    </>
  );
};

export default Pages;
