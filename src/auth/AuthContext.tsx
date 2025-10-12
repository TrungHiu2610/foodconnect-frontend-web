import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
export type Role = "buyer" | "seller" | "admin";
export type User = { id: string; name: string; role: Role };

type AuthCtx = {
  user: User | null;
  login: (u: User) => void;
  logout: () => void;
};

const Ctx = createContext<AuthCtx>({ user: null, login: () => {}, logout: () => {} });
export const useAuth = () => useContext(Ctx);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem("me");
    if (raw) setUser(JSON.parse(raw));
  }, []);

  const login = (u: User) => {
    localStorage.setItem("me", JSON.stringify(u));
    setUser(u);
  };

  const logout = () => {
    localStorage.removeItem("me");
    setUser(null);
  };

  return <Ctx.Provider value={{ user, login, logout }}>{children}</Ctx.Provider>;
}
