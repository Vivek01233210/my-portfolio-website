import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AccessDenied from '../Alert/AccessDenied.jsx';

export default function PublicRoute() {
    const { isAuthenticated } = useSelector((state) => state.auth);

    if (!isAuthenticated) {
        return <Outlet />
    } else {
        return <AccessDenied />
        // return <Navigate to="/" />
    }
}