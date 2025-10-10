import React from 'react';
import logo from "../assets/logo.png"

const LoadingSpinner = () => {
    return (
        <div className='flex justify-center items-center h-[calc(100vh-285px)]'>
            <h1 className='flex text-6xl font-bold text-gray-400'>L<span><img src={logo} alt="" className="w-20 h-20 animate-spin opacity-70" /></span>ADING</h1>

        </div>
    );
};

export default LoadingSpinner;