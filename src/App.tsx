import React from 'react';
import AppRoutes from './routes/AppRoutes';
import { useNavigate } from 'react-router-dom';

 const Header = React.lazy(() => import('header/Header'));
const Footer = React.lazy(() => import('footer/Footer'));
const Sidebar = React.lazy(() => import('sidebar/Sidebar'));

const App: React.FC = () => {
  const navigate = useNavigate();
    return (

            <React.Suspense fallback={<div>Loading...</div>}>
                <Header navigate={navigate} />
                <Sidebar />
                <AppRoutes />
                <Footer />
            </React.Suspense>

    );
};

export default App;
