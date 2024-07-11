import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';
import './App.css';

const App = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('home');

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="app">
      <Header
        toggleDrawer={toggleDrawer}
        userName="Nome do Usuário"
        isDrawerOpen={isDrawerOpen}
      />
      <Drawer
        isOpen={isDrawerOpen}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
      <div className={`main-content ${isDrawerOpen ? 'drawer-open' : 'drawer-closed'}`}>
        <div className="content">
          <Card className="bg-white text-dark">
            <Card.Body>
              <Outlet />
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default App;
