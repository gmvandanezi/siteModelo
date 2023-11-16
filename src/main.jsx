import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Forms from './pages/Forms';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/sobre",
                element: <About />,
            },
            {
                path: "/portfolio",
                element: <Portfolio />,
            },
            {
                path: "/contato",
                element: <Contact />,
            },
        ]
    },
    {
        path: "/forms",
        element: <Forms />,
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
        <RouterProvider router={router} />,
)
