import { createContext, useEffect,  useState, PropsWithChildren } from "react";
import { AuthContextType } from "./auth";
import { addTokenToApi, removeTokenFromApi } from "../api/auth/token";


export const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: PropsWithChildren) => {
    //const [token, setToken_] = useState(localStorage.getItem('token'));
    const [token, setToken_] = useState<string | null>(localStorage.getItem('token'));

    const setToken = (newToken: string) => {
        setToken_(newToken);
    }

    const removeToken = () => {
        setToken_(null);
    }

    useEffect(() => {
        console.log(`Local Storage read token: ${token}`)
        if (token) {
            // api.defaults.headers.common["Authorization"] = "Bearer " + token;
            // localStorage.setItem('token', token);
            addTokenToApi(token)
        } else {
            // delete api.defaults.headers.common["Authorization"];
            // localStorage.removeItem('token')
            removeTokenFromApi()
        }
    }, [token]);

    // const contextValue = useMemo(
    //     () => ({
    //         token,
    //         setToken,
    //     }),
    //     [token]
    // );

    return (
        <AuthContext.Provider value={{token, setToken, removeToken}} >
            {children}
        </AuthContext.Provider>
        // This will not work for ts, only work for tsx
        //https://stackoverflow.com/questions/57242264/cannot-find-namespace-ctx-error-when-creating-context-with-react-typescript
    );
}

export default AuthProvider;