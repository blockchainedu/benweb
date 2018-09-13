import React from 'react';
import Link from 'react-router/lib/Link';

const NavLinkItem = ({ onClick, route, text }) => {
    return (
        <div className='NavLinkItem' onClick={onClick}>
            <Link to={route}>
                <h6>{text}</h6>
            </Link>
        </div>
    );
}

export default NavLinkItem