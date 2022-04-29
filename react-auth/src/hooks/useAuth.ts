import React from "react";

export function useAuth(authContext: any) {
    return React.useContext(authContext);
}

export interface AuthContextType {
    user: any;
    entrar: (user: string, callback: VoidFunction) => void;
    sair: (callback: VoidFunction) => void;
}