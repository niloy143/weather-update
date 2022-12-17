import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
    const { pathname } = useLocation();

    return (
        <div className='rounded-lg shadow-lg max-w-5xl mx-3 lg:mx-auto my-12 bg-gray-300'>
            <div className="tabs">
                <NavLink to="/weather" className={({ isActive }) => `tab tab-lg tab-lifted ${isActive && 'tab-active'}`}>Weather</NavLink>
                <NavLink to="/todo" className={({ isActive }) => `tab tab-lg tab-lifted ${isActive && 'tab-active'}`}>To Do</NavLink>
                <span></span>
            </div>
            <div className={`min-h-[50vh] p-5 bg-base-100 ${pathname === '/weather' ? 'rounded-b-lg rounded-r-lg' : 'rounded-lg'} border border-t-0 border-gray-300 relative`}>
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;