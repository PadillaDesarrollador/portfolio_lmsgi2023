import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { NavBar } from './commons/NavBar';
import { AboutMePage } from './pages/About Me/AboutMePage';
import { ContactPage } from './pages/Contact/ContactPage';
import { Footer } from './pages/Footer/Footer';
import { HomePage } from './pages/Home/HomePage';
import { WorksPage } from './pages/Works/WorksPage';


function App() {
  return (
    <>
      <header>
      <NavBar />
      </header>
      <main>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='aboutme' element={<AboutMePage />}></Route>
        <Route path='works' element={<WorksPage />}></Route>
        <Route path='contact' element={<ContactPage />}></Route>
      </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>

  );
}

export default App;
