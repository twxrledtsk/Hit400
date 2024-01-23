import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from './Routes/routes';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter(routes);

root.render(
  <React.StrictMode>
  <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </React.StrictMode>
);
