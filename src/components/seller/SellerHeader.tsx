import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthContext";

export default function SellerHeader() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const onLogout = () => {
    logout();
    navigate("/auth/login", { replace: true });
  };

  const initial = (user?.name?.trim()?.charAt(0) || "U").toUpperCase();

  return (
    <header
      className="sticky-top shadow-sm"
      style={{
        background:
          "linear-gradient(90deg, rgba(255,154,0,1) 0%, rgba(255,109,0,1) 60%, rgba(255,94,0,1) 100%)",
      }}
    >
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container py-2 d-flex align-items-center">
          {/* BRAND to, rõ ràng */}
          <Link to="/seller" className="d-flex align-items-center text-white text-decoration-none">
            <img
              src="/assets/img/logo/logo-white.png"
              alt="logo"
              height={36}                  /* tăng kích cỡ logo */
              className="me-2"
              onError={(e) => ((e.target as HTMLImageElement).src = "/vite.svg")}
            />
            <span className="fw-bold" style={{ fontSize: "1.35rem", letterSpacing: ".2px" }}>
              Seller Center
            </span>
          </Link>

          <div className="ms-auto d-flex align-items-center gap-2">
            {/* Nút VỀ TRANG NGƯỜI MUA */}
            <Link
              to="/buyer"
              className="btn btn-light btn-sm rounded-pill d-flex align-items-center px-3"
            >
              <i className="bi bi-house-door me-2" />
              Về trang người mua
            </Link>

            {/* Dropdown TÀI KHOẢN */}
            <div className="dropdown">
              <button
                className="btn btn-light btn-sm rounded-pill d-flex align-items-center px-2 px-md-3"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span
                  className="rounded-circle bg-warning text-dark fw-bold d-inline-flex justify-content-center align-items-center me-2"
                  style={{ width: 28, height: 28 }}
                >
                  {initial}
                </span>
                <span className="text-dark me-1 d-none d-sm-inline">
                  {user?.name || "Tài khoản"}
                </span>
                <i className="bi bi-caret-down-fill text-dark" />
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <Link to="/seller/onboarding" className="dropdown-item">
                    Hồ sơ & KYC
                  </Link>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <button className="dropdown-item text-danger" onClick={onLogout}>
                    <i className="bi bi-box-arrow-right me-2" />
                    Đăng xuất
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
