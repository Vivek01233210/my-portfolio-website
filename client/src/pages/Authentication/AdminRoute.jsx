import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AccessDenied from '../AccessDenied.jsx';

export default function AdminRoute() {
    const { isAuthenticated, user } = useSelector((state) => state.auth);

    if (isAuthenticated && user.role === 'admin') {
        return <Outlet />
    } else {
        return <AccessDenied/>
        // return <Navigate to="/login" />
    }
}

