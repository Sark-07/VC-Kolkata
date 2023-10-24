import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';

export const StudentProtectedRoute = ({ children }) => {
  const { isAuthenticated, checkRole } = useAuth();

  if (!isAuthenticated()) {
    // user is not authenticated
    toast.error('Please Login!');
    return <Navigate to='/student-login' />;
  } else if (checkRole() === 'teacher') {
    return <Navigate to={'/'} />;
  }
  return children;
};

export const TeacherProtectedRoute = ({ children }) => {
  const { isAuthenticated, checkRole } = useAuth();

  if (!isAuthenticated()) {
    // user is not authenticated
    toast.error('Please Login!');
    return <Navigate to='/teacher-login' />;
  } else if (checkRole() === 'student') {
    return <Navigate to={'/'} />;
  }
  return children;
};

// Add prop validation for restricted prop
StudentProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
TeacherProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
