import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import "./App.css";

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/destination">
        Destination
      </a>
      <a className="menu-item" href="/offer">
        Offer
      </a>
      <a className="menu-item" href="/contacts">
        Contacts
      </a>
    </Menu>
  );
};