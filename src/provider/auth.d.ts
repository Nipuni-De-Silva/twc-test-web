export type AuthContextType = {
    token: string | null;
    setToken: (newToken: string) => void;
    removeToken: () => void;
}