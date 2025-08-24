import { Navigate, Outlet } from 'react-router';
import useSession from 'hooks/useSession';

export const ProtectedRoute = () => {
  const { isAuthenticated } = useSession();

  // Check if the user is authenticated
  if (!isAuthenticated) {
    // If not authenticated, redirect to main page
    return <Navigate to="/" />;
  }

  // If authenticated, render the child routes
  return <Outlet />;
};
