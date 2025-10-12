import React, { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth} from "../../auth/AuthContext";
import type { Role } from "../../auth/AuthContext";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<Role>("buyer");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Vui lòng điền đầy đủ email và mật khẩu");
      return;
    }
    setError("");

    login({ id: "1", name: email.split("@")[0] || "FoodConnect User", role });

    // Điều hướng theo role (KHỚP ROUTES đang dùng)
    const redirectMap = {
      buyer: "/",
      seller: "/seller",
      admin: "/admin",
    } as const;
    navigate(redirectMap[role], { replace: true });
  };

  return (
    <div className="container-fluid min-vh-100 d-flex flex-column flex-md-row p-0">
      <div className="col-md-6 d-flex justify-content-center align-items-center p-4" style={{ backgroundColor: "#FFF3E0" }}>
        <div className="card p-4 shadow-lg" style={{ maxWidth: 400, width: "100%", border: "2px solid #FF6D00", borderRadius: 15 }}>
          <h2 className="text-center mb-4" style={{ color: "#FF6D00" }}>Đăng Nhập FoodConnect</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label" style={{ color: "#4CAF50" }}>Địa chỉ Email</label>
              <input id="email" type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} required />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label" style={{ color: "#4CAF50" }}>Mật khẩu</label>
              <div className="input-group">
                <input id="password" type={showPassword ? "text" : "password"} className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} required />
                <button type="button" className="input-group-text bg-white" onClick={()=>setShowPassword(!showPassword)} aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}>
                  <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`} style={{ color: "#4CAF50" }} />
                </button>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="role" className="form-label" style={{ color: "#4CAF50" }}>Vai trò</label>
              <select id="role" className="form-select" value={role} onChange={(e)=>setRole(e.target.value as Role)}>
                <option value="buyer">Người mua</option>
                <option value="seller">Người bán</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <button type="submit" className="btn w-100" style={{ backgroundColor: "#FF6D00", color: "#fff", borderRadius: 5 }}>
              Đăng nhập
            </button>
          </form>
          <p className="text-center mt-3 text-muted">
            Chưa có tài khoản? <a href="/auth/register" style={{ color: "#4CAF50" }}>Đăng ký</a>
          </p>
          <p className="text-center mt-3 text-muted">Quên mật khẩu? <a href="#" style={{ color: "#4CAF50" }}>Khôi phục ngay</a></p>
        </div>
      </div>

      <div className="col-md-6 d-none d-md-block" style={{ backgroundImage: "url(../assets/img/food.jpg)", backgroundSize: "cover", backgroundPosition: "center", minHeight: "100vh" }} />
    </div>
  );
};

export default Login;
