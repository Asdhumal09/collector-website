import React from 'react';
import { Navigate } from 'react-router-dom';

// PrivateRoute Component
const PrivateRoute = ({ element: Element }) => {
  // Check if user is authenticated
  const isAuthenticated = !!localStorage.getItem('accessToken');

  return isAuthenticated ? <Element /> : <Navigate to="/" />;
};

export default PrivateRoute;
