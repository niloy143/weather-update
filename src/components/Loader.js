import React from 'react';

const Loader = ({ children, text }) => {
    return (
        <h3 className={`absolute top-0 bottom-0 left-0 right-0 m-auto flex justify-center items-center ${text && 'text-xl sm:text-3xl'}`}>{text ? 'Loading...' : children}</h3>
    );
};

export default Loader;