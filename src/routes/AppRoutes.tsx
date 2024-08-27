import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { routes } from './routeConfig';

const AppRoutes: React.FC = () => {
    return (
        <Routes >

            {routes.map((route) => (
                route.protected ? (
                    <Route key={route.path} path={route.path} element={<ProtectedRoute element={route.element} />} />
                ) : (
                    <Route key={route.path} path={route.path} element={route.element} />
                )
            ))}
        </Routes>
    );
};

export default AppRoutes;
