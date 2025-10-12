// src/routes/guards.tsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export function RequireRole({ role }: { role: "buyer" | "seller" | "admin" }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/auth/login" replace />;
  return user.role === role ? <Outlet /> : <Navigate to="/" replace />;
}
