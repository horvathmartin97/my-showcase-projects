import authService from "@/services/authService";
import { jwtDecode } from "jwt-decode";
import type {
  AuthContextProviderProps,
  AuthContextType,
  AuthSuccess,
  AuthTokenData,
  AuthUser,
} from "@/types/authTypes";
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useNavigate } from "react-router";

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const navigate = useNavigate();
  const [user, setUser] = useState<AuthUser | undefined>();

  const register = useCallback(
    async (
      email: string,
      name: string,
      password: string
    ): Promise<AuthSuccess> => {
      const registerResponse = await authService.register(
        email,
        name,
        password
      );

      if (!registerResponse.ok) {
        return {
          ok: false,
          message: registerResponse.message || "Registration failed",
        };
      }
      return { ok: true, message: "Registration successful" };
    },
    []
  );

  const login = useCallback(
    async (email: string, password: string): Promise<AuthSuccess> => {
      const loginResponse = await authService.login(email, password);
      if (!loginResponse.ok || !loginResponse.data?.token) {
        return { ok: false, message: loginResponse.message };
      }
      const decodedToken = jwtDecode<AuthTokenData>(loginResponse.data.token);

      const lsAuth = { token: loginResponse.data.token, ...decodedToken };

      localStorage.setItem("user", JSON.stringify(lsAuth));

      setUser(lsAuth);

      return { ok: true, message: "Successfully logged in!" };
    },
    []
  );
  const logOut = useCallback(() => {
    localStorage.removeItem("user");
    setUser(undefined);
    navigate("/login");
  }, [navigate]);

  useEffect(() => {
    const lsUserString = localStorage.getItem("user");

    if (lsUserString) {
      if (!lsUserString) {
        return;
      }

      try {
        const lsUser = JSON.parse(lsUserString) as AuthUser;

        if (!lsUser.token || !lsUser.id || !lsUser.email) {
          localStorage.removeItem("user");
          return;
        }

        setUser(lsUser);
      } catch (error) {
        localStorage.removeItem("user");
      }
    }
  }, []);

  const contextValue = useMemo(
    () => ({
      login,
      register,
      logOut,

      user,
    }),
    [login, register, logOut, user]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
