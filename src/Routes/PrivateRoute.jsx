import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const location = useLocation();
    // console.log(location.pathname);

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div className='flex justify-center items-center min-h-screen'>
            <progress className="progress w-56 progress-error"></progress>
        </div>
    }

    if (user?.email) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login" replace></Navigate>
};

export default PrivateRoute;