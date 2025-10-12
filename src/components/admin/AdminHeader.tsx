import { NavLink, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthContext";

export default function AdminHeader() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    navigate("/auth/login", { replace: true });
  };

  return (
    <header className="bg-dark text-white sticky-top">
      <nav className="navbar navbar-expand-lg container py-2 navbar-dark">
        <Link to="/admin" className="navbar-brand d-flex align-items-center">
          <i className="bi bi-shield-lock me-2"></i>
          <span className="fw-semibold">FoodConnect Admin</span>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#adminNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="adminNav" className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><NavLink end to="/admin" className="nav-link">Dashboard</NavLink></li>
            <li className="nav-item"><NavLink to="/admin/sellers" className="nav-link">Người bán</NavLink></li>
            <li className="nav-item"><NavLink to="/admin/orders" className="nav-link">Đơn hàng</NavLink></li>
            <li className="nav-item"><NavLink to="/admin/reviews" className="nav-link">Review</NavLink></li>
            <li className="nav-item"><NavLink to="/admin/fees" className="nav-link">Phí sàn</NavLink></li>
            <li className="nav-item"><NavLink to="/admin/reports" className="nav-link">Báo cáo</NavLink></li>
          </ul>

          <ul className="navbar-nav ms-auto align-items-center gap-2">
            <li className="nav-item">
              <Link to="/buyer" className="btn btn-outline-light btn-sm">
                <i className="bi bi-grid-1x2 me-1" /> Trang người mua
              </Link>
            </li>

            {!user ? (
              <li className="nav-item"><NavLink to="/auth/login" className="btn btn-warning btn-sm text-dark">Đăng nhập</NavLink></li>
            ) : (
              <li className="nav-item dropdown">
                <button className="btn btn-light dropdown-toggle text-dark" data-bs-toggle="dropdown">
                  <i className="bi bi-person-circle me-2" /> {user.name}
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><button className="dropdown-item text-danger" onClick={onLogout}>
                    <i className="bi bi-box-arrow-right me-2" /> Đăng xuất
                  </button></li>
                </ul>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}
