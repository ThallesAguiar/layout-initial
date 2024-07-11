import React from 'react';
import { MdMenu } from "react-icons/md";
import { Breadcrumb } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import './style.css';

const Header = ({ toggleDrawer, userName, isDrawerOpen }) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <header className={`header ${isDrawerOpen ? '' : 'drawer-closed'}`}>
      <div className="header-left">
        <button onClick={toggleDrawer} className="menu-btn">
          <MdMenu className="menu-icon" />
        </button>
        <div className="breadcrumb-container">
          <Breadcrumb>
            <Breadcrumb.Item to="/" href='/' className="breadcrumb-home">home</Breadcrumb.Item>
            {pathnames.map((value, index) => {
              const isLast = index === pathnames.length - 1;
              const to = `/${pathnames.slice(0, index + 1).join('/')}`;

              return isLast ? (
                <Breadcrumb.Item active key={to} className="breadcrumb-active">
                  <span id='text-active'>
                    {value}
                  </span>
                </Breadcrumb.Item>
              ) : (
                <Breadcrumb.Item href={to} key={to} to={to} className="breadcrumb-link">
                  {value}
                </Breadcrumb.Item>
              );
            })}
          </Breadcrumb>
        </div>
      </div>
      <div className="user-name">{userName}</div>
    </header>
  );
};

export default Header;
