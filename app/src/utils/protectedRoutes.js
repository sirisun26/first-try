// components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ element }) => {
    // Access the user from the Redux store
    const user = useSelector(state => state.assessment.user);
    
    // Check if user email is present and valid
    const isAuthenticated = user && user.email && user.email.trim() !== '';

    return isAuthenticated ? element : <Navigate to="/register" />;
};

export default ProtectedRoute;
