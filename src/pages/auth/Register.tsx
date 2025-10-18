import React, { useState, type FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [role, setRole] = useState<"buyer" | "seller" | "admin">("buyer");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      setError("Vui lòng điền đầy đủ thông tin.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Mật khẩu không trùng khớp.");
      return;
    }
    setError("");

    // Giả lập đăng ký thành công
    alert(`Đăng ký thành công!`);
    navigate("/auth/login");
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{
        backgroundImage: "url('../assets/img/food.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backdropFilter: "blur(4px)",
      }}
    >
      <div
        className="card p-4 shadow-lg"
        style={{
          maxWidth: 450,
          width: "100%",
          borderRadius: 15,
          backgroundColor: "rgba(255, 255, 255, 0.9)",
        }}
      >
        <h2 className="text-center mb-4" style={{ color: "#FF6D00" }}>
          Đăng ký FoodConnect
        </h2>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" style={{ color: "#4CAF50" }}>
              Họ tên
            </label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label" style={{ color: "#4CAF50" }}>
              Email
            </label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label" style={{ color: "#4CAF50" }}>
                Mật khẩu
              </label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label" style={{ color: "#4CAF50" }}>
                Nhập lại mật khẩu
              </label>
              <input
                type="password"
                className="form-control"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {/* <div className="mb-3">
            <label className="form-label" style={{ color: "#4CAF50" }}>
              Vai trò
            </label>
            <select
              className="form-select"
              value={role}
              onChange={(e) => setRole(e.target.value as any)}
            >
              <option value="buyer">Người mua</option>
              <option value="seller">Người bán</option>
              <option value="admin">Admin</option>
            </select>
          </div> */}

          <button
            type="submit"
            className="btn w-100"
            style={{
              backgroundColor: "#FFB300",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            Tạo tài khoản
          </button>
        </form>

        {/* dòng này căn giữa */}
        <p className="text-center mt-3 text-muted">
          Đã có tài khoản?{" "}
          <Link to="/auth/login" style={{ color: "#4CAF50", fontWeight: 500 }}>
            Đăng nhập
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
