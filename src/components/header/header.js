import React from "react";
import './header.scss';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="container">
            <nav className="header">
                <Link className='headerLogo' to="/" >TRAINING</Link>
                <div className='headerLinkBox'>
                    <Link className='headerLink' to="/todo-app">TodoApp</Link>
                    <a className='headerLink' href="/starDB">StarDB</a>
                </div>
            </nav>
        </div>
    )
}

export default Header
