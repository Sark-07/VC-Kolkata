import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { useEffect } from 'react';

export const StudentProtectedRoute = ({ children }) => {
  const { isAuthenticated, checkRole } = useAuth();

  useEffect(() => {
    if (!isAuthenticated()) {
      // user is not authenticated
      toast.error('Please Login!');
    }
  }, []);
  
  if (!isAuthenticated()) {
    return <Navigate to='/student-login' replace={true} />;
  } else if (checkRole() === 'teacher') {
    return <Navigate to={'/'} replace={true} />;
  }
  return children;
};

export const TeacherProtectedRoute = ({ children }) => {
  const { isAuthenticated, checkRole } = useAuth();

  useEffect(() => {
    if (!isAuthenticated()) {
      // user is not authenticated
      toast.error('Please Login!');
    }
  }, []);

  if (!isAuthenticated()) {
    return <Navigate to='/teacher-login' replace={true} />;
  } else if (checkRole() === 'student') {
    return <Navigate to={'/'} replace={true} />;
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
