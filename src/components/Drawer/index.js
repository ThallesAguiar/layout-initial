import React, { useState } from 'react';
import { MdHome, MdCalendarToday, MdPerson, MdSettings, MdLogout } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import LogoutModal from '../LogoutModal'; // Importe o modal de logout
import './style.css';

const Drawer = ({ selectedItem, setSelectedItem, isOpen }) => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = () => {
    // Aqui você pode adicionar a lógica de logout, como limpar tokens ou redirecionar
    console.log('Usuário deslogado');
    setShowLogoutModal(false);
  };

  return (
    <div className={`drawer ${isOpen ? 'open' : 'closed'}`}>
      <div className="menu-items">
        <div className="drawer-top">
          {/* <img src={logo} alt="Logo" className="drawer-logo" /> */}
          logo
        </div>
        <NavLink
          to="/"
          className={({ isActive }) => `menu-item ${isActive ? 'selected' : ''}`}
          onClick={() => setSelectedItem('home')}
        >
          <MdHome />
          {isOpen && <span>Home</span>}
        </NavLink>
        <NavLink
          to="/agenda"
          className={({ isActive }) => `menu-item ${isActive ? 'selected' : ''}`}
          onClick={() => setSelectedItem('agenda')}
        >
          <MdCalendarToday />
          {isOpen && <span>Agenda</span>}
        </NavLink>
        <NavLink
          to="/usuario"
          className={({ isActive }) => `menu-item ${isActive ? 'selected' : ''}`}
          onClick={() => setSelectedItem('usuarios')}
        >
          <MdPerson />
          {isOpen && <span>Usuários</span>}
        </NavLink>
      </div>
      <div className="bottom-icons">
        <NavLink
          to="/config"
          className={({ isActive }) => `menu-item ${isActive ? 'selected' : ''}`}
          onClick={() => setSelectedItem('config')}
        >
          <MdSettings />
          {isOpen && <span>Configurações</span>}
        </NavLink>
        <div className="separator"></div>
        <button className="icon-button" onClick={() => setShowLogoutModal(true)}>
          <MdLogout />
          {isOpen && <span>Logout</span>}
        </button>
      </div>
      <LogoutModal
        show={showLogoutModal}
        handleClose={() => setShowLogoutModal(false)}
        handleLogout={handleLogout}
      />
    </div>
  );
};

export default Drawer;
