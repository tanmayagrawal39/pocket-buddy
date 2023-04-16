import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import './index.css';
import App from './components/App';
import Login from './components/Login';
import HistoryScreen from './components/HistoryScreen';
import Checkout from './components/Checkout';
import Map from './components/Map';

Amplify.configure(awsconfig);

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/history',
    element: <HistoryScreen />
  },
  {
    path: '/checkout',
    element: <Checkout />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <React.StrictMode>
      <RouterProvider router={router}>
      <Map />
      </RouterProvider>

    </React.StrictMode>

);