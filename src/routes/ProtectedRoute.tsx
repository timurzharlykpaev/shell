import React from 'react';
import { Navigate } from 'react-router-dom';
import { ProtectedRouteProps } from '../types';

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
    const isAuthenticated = true; // Add your authentication logic here

    return isAuthenticated ? <>{element}</> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
