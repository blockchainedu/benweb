import React from 'react';
import Link from 'react-router/lib/Link';

const NavLinkItem = (props) => {
    return (
        <div className='NavLinkItem'>
            <Link to={props.route}>
                <h6>{props.text}</h6>
            </Link>
        </div>
    );
}

export default NavLinkItem