import { Navigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthContext";

/**
 * Điểm vào của app:
 * - Nếu CHƯA đăng nhập  -> /auth/login
 * - Nếu đã đăng nhập     -> chuyển theo role: buyer/seller/admin
 */
export default function StartRedirect() {
  const { user } = useAuth();
  if (!user) return <Navigate to="/auth/login" replace />;

  const to =
    user.role === "buyer" ? "/buyer" :
    user.role === "seller" ? "/seller" :
    "/admin";

  return <Navigate to={to} replace />;
}
