import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Agenda from './pages/Agenda';
import Usuario from './pages/Usuario';
import Config from './pages/Config';
import Erro from './pages/Erro';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/usuario" element={<Usuario />} />
          <Route path="/config" element={<Config />} />
          <Route path="*" element={<Erro />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
