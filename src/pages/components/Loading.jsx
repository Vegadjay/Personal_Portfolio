import React from 'react';
import './styles.css';

export const Loading = () => {
    return (
        <div className="container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
            <div className="dash uno"></div>
            <div className="dash dos"></div>
            <div className="dash tres"></div>
            <div className="dash cuatro"></div>
        </div>
    );
};