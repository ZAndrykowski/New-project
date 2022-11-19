import React from 'react'

const AuthContext = React.createContext({
    isAuthenticaded : false,
    login: () => {},
    logout: () => {}
});

AuthContext.displayName ='AuthContext';

export default AuthContext;