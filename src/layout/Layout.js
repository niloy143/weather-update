import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='rounded-lg shadow-lg max-w-5xl mx-3 lg:mx-auto my-12 bg-gray-300'>
            <div className="tabs pt-1 justify-center">
                <span></span>
                <NavLink to="/weather" className={({ isActive }) => `tab tab-lg tab-lifted ${isActive && 'tab-active'}`}>Weather</NavLink>
                <NavLink to="/todo" className={({ isActive }) => `tab tab-lg tab-lifted ${isActive && 'tab-active'}`}>To Do</NavLink>
                <span></span>
            </div>
            <div className={`min-h-[50vh] p-5 bg-base-100 rounded-lg relative`}>
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;