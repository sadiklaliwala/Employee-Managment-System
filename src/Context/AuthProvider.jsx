import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStroage } from "../Utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    // localStorage.clear();

    //this is black box ai code which is giving data 
    const [UserData, setUserData] = useState(() => {
        setLocalStroage();
        const { Employees, Admin } = getLocalStorage();
        return { Employees, Admin };
      });
    //  Add a useEffect to handle page refreshes
     useEffect(() => {
        const { Employees, Admin } = getLocalStorage();
        setUserData({ Employees, Admin });
    }, []);
    return (
        <AuthContext.Provider value={UserData}>

            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;