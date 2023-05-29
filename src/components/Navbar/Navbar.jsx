import React from "react";
import { NavLink } from 'react-router-dom';
import cl from './Navbar.module.css'


const Navbar = () => {
    return (
        <div className= {cl.navBar}>
        <ul className={cl.navBar__links}>
          <li><NavLink to="/todo" className={({isActive}) => (isActive ? cl.nav_link_selected : null)}>Todo</NavLink></li>
          <li><NavLink to="/done" className={({isActive}) => (isActive ? cl.nav_link_selected : null)}>Done</NavLink></li>
          <li><NavLink to="/Info" className={({isActive}) => (isActive ? cl.nav_link_selected : null)}>Info</NavLink></li>
        </ul>
      </div>
    )
}

export default Navbar