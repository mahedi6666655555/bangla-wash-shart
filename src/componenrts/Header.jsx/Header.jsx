import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='flex justify-center pt-5 p-5'>
                <ul className='flex'>
                    <Link className="pl-5" to="/">Home</Link>
                    <Link className="pl-5" to="/Contact">Contact</Link>
                    <Link className="pl-5" to="/About">About</Link>
                </ul>
            </nav>
        </div>
    );
};

export default Header;