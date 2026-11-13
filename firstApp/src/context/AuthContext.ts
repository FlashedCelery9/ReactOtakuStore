import type {LoginDto} from "../DTO's/LoginDto.ts";
import {createContext} from "react";

interface AuthContextType {
    currentUser: LoginDto | null;
    isAuthenticated: boolean;
    login: (user: LoginDto) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);