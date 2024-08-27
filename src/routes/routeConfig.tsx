import React from 'react';
import { Route } from '../types';
import { lazy } from 'react';

// Dynamic import for components

const Dashboard = lazy(() => import('../pages/Dashboard'));
const Profile = lazy(() => import('../pages/Profile'));
const Settings = lazy(() => import('../pages/Settings'));


export const routes: Route[] = [
    {
        path: '/',
        element: <Dashboard />,
        protected: true,
    },
    {
        path: '/profile',
        element: <Profile />,
        protected: true,
    },
    {
        path: '/settings',
        element: <Settings />,
        protected: true,
    },
];
