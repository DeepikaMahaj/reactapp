import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';

const Menu = ()=>{
    return(
        <div>
            <NavLink exact activeClassName='active-css' to='/'>Home</NavLink>
            <NavLink activeClassName='active-css' to='/about'>About</NavLink>
            <NavLink activeClassName='active-css' to='contact'>Contact</NavLink>
        </div>
    )
}
export default Menu;