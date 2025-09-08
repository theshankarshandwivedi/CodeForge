import React, {createContext, useContext, useState, useEffect} from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const savedToken = localStorage.getItem("token");
        const savedUSer = localStorage.getItem("user");

        if(savedToken){
            setToken(savedToken);
            if (savedUSer) {
              setUser(JSON.parse(savedUSer));
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

    return (
        <AuthContext.Provider value={{ user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
