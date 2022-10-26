import React from 'react';
import { createContext } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const user = {
        displayName: "Sumaiya"
    }
    const authInfo = { user }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;