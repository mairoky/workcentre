import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
import { AuthContext } from '../context/AuthProvider';
import useCheckAdmin from '../hooks/useCheckAdmin';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    const [isAdmin, userLoading] = useCheckAdmin(user?.email);

    if (loading || userLoading) {
        return <Loader />
    }
    if (!user && !isAdmin) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    return children;
};

export default AdminRoute;