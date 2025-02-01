import React, { createContext, useState, useContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {  
  const initialState = localStorage.getItem("user");

  const [authUser, setAuthUser] = useState(
    initialState ? JSON.parse(initialState) : undefined
  );

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}> 
      {children} 
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
