import React from 'react';

const Button = ({ children, variant = 'default', className, ...props }) => {
    const variants = {
        default: 'bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full',
        outline: 'bg-transparent hover:bg-blue-600 text-blue-600 font-semibold hover:text-white py-2 px-4 border border-blue-600 hover:border-transparent rounded-full',
    };

    const buttonClass = variants[variant] || variants.default;

    return (
        <button className={`${buttonClass} ${className || ''}`} {...props}>
            {children}
        </button>
    );
};

export default Button;