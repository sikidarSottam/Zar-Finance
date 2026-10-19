import type { ReactElement } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { apiService } from './api';

interface ProtectedRouteProps {
    element: ReactElement;
}

export const CustomerRoute = ({ element }: ProtectedRouteProps) => {
    const location = useLocation();

    return apiService.isCustomer() ? (
        element
    ) : (
        <Navigate to="/login" replace state={{ from: location }} />
    );
};

export const AuditorRoute = ({ element }: ProtectedRouteProps) => {
    const location = useLocation();

    return apiService.isAdmin() || apiService.isAuditor() ? (
        element
    ) : (
        <Navigate to="/login" replace state={{ from: location }} />
    );
};
