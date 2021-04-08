import React from 'react';
import { NavLink } from 'react-router-dom';
import headerImage from '../../assets/wall-with-plants.jpg';
import { ReactComponent as FlagNL } from '../../assets/netherlands.svg';
import content from '../../data/content.json';
import './Header.css';

function Header() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/about-us">
                {content.nl.header.menuItems.aboutUs}
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/all-plants">
                {content.nl.header.menuItems.allPlants}
              </NavLink>
              </li>
            <li className="language-switch">
              <p>{content.nl.header.changeTo}</p>
              <FlagNL />
            </li>
          </ul>
        </nav>
        <div className="image-container">
          <img src={headerImage} alt="Header image plants" className="header-image" />
          <h1>{content.nl.header.title}</h1>
        </div>

      </header>
    </>
  );
}

export default Header;
