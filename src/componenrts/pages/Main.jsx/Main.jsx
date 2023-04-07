import React from 'react';
import App from '../../../App';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <App></App>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;