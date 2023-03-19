import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { NavBar } from './commons/NavBar';
import { AboutMePage } from './pages/About Me/AboutMePage';
import { ContactPage } from './pages/Contact/ContactPage';
import { WorksPage } from './pages/Works/WorksPage';

function App() {
  return (
    <>
      <header>
      <NavBar />
      </header>
      <main>
      <Routes>
        <Route path='aboutme' element={<AboutMePage />}></Route>
        <Route path='works' element={<WorksPage />}></Route>
        <Route path='contact' element={<ContactPage />}></Route>
      </Routes>
      </main>
    </>

  );
}

export default App;
