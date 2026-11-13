import {type ReactNode, useCallback, useMemo, useState} from "react";
import type {LoginDto} from "../DTO's/LoginDto.ts";
import {AuthContext} from "./AuthContext.ts";

interface Props{
    children: ReactNode;
}

export function AuthProvider({ children }: Props){
    const [currentUser, setCurrentUser] = useState<LoginDto | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = useCallback((user: LoginDto) => {
        setCurrentUser(user);
        setIsAuthenticated(true);
    }, []);
    const logout = useCallback(() => {
        setCurrentUser(null);
        setIsAuthenticated(false);
        }, []);

    const contextValue = useMemo(() => ({
        currentUser,
        isAuthenticated,
        login,
        logout,
    }),[currentUser, isAuthenticated, login, logout]);

    return(
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )

}