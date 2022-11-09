import React from 'react';
import router from './router/router';
import ReactDOM from 'react-dom/client';
import {RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
    <React.StrictMode>
        Home
        <RouterProvider router={router} />
    </React.StrictMode>
);