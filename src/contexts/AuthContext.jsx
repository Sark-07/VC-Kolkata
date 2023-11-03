import { createContext, useState, useContext } from 'react';
import jwtDecode from 'jwt-decode'; // If you want to check token expiration
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem('token')) || null
  );

  const login = (token) => {
    setToken(token);
    localStorage.setItem('token', JSON.stringify(token));
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
    return <Navigate to='/' replace />;
  };

  const checkRole = () => {
    if (token) {
      return token.role;
    }
    return ''
  };

  const isAuthenticated = () => {
    if (!token) {
      // If token is not available, the user is not authenticated
      return false;
    }

    try {
      const decodedToken = jwtDecode(token.token);
      const currentTime = Date.now() / 1000;
      // console.log(decodedToken, decodedToken.exp);
      // Check if the token is expired
      if (decodedToken.exp < currentTime) {
        localStorage.removeItem('token');
        return <Navigate to='/signin' replace />;
      }

      // Token is valid and not expired
      return true;
    } catch (error) {
      // If there's an error decoding the token, consider the user as not authenticated
      return false;
    }
  };

  return (
    <AuthContext.Provider
      value={{ token, login, logout, isAuthenticated, checkRole }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useAuth = () => useContext(AuthContext);

export { AuthContext, AuthProvider, useAuth };
