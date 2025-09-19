import React, {createContext, useContext, useState, useEffect} from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const savedToken = localStorage.getItem("token");
        const savedUser = localStorage.getItem("user");

        if(savedToken){
            setToken(savedToken);
            if (savedUser) {
              setUser(JSON.parse(savedUser));
            }
        }
    }, []);

    useEffect(() =>{
        if(token){
            localStorage.setItem("token", token);
        }
        else{
            localStorage.removeItem("token");
        }

        if(user){
            localStorage.setItem("user", JSON.stringify(user));
        }else{
            localStorage.removeItem("user");
        }
    }, [token, user]);

    const login = (token, userData) => {
      setToken(token);
      setUser(userData);
    };

    const logout = () => {
      setToken(null);
      setUser(null);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    };

    const isAuthenticated = !!user && !!token;

    return (
        <AuthContext.Provider value={{ user, token, login, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    return useContext(AuthContext);
};
