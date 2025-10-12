// src/components/Header.tsx
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    navigate("/auth/login", { replace: true });
  };

  return (
    <header id="header-sticky" className="bg-dark">
      <nav className="navbar navbar-expand-lg navbar-dark container py-2">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="/assets/img/logo/logo-white.png"
            alt="logo"
            height={36}
            className="me-2"
            onError={(e) => ((e.target as HTMLImageElement).src = "/vite.svg")}
          />
          <span className="fw-semibold">FoodConnect</span>
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">
                Pages
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                {/* Blog */}
                <li><NavLink className="dropdown-item" to="/blog">Blog Grid</NavLink></li>
                <li><NavLink className="dropdown-item" to="/blog-standard">Blog Standard</NavLink></li>
                <li><NavLink className="dropdown-item" to="/blog/1">Blog Details</NavLink></li>
                <li><hr className="dropdown-divider" /></li>

                {/* Menu */}
                <li><NavLink className="dropdown-item" to="/menu-list">Menu List</NavLink></li>
                <li><NavLink className="dropdown-item" to="/menu-categories">Menu Categories</NavLink></li>
                <li><NavLink className="dropdown-item" to="/single-food-menu">Single Food Menu</NavLink></li>
                <li><hr className="dropdown-divider" /></li>

                {/* Restaurant */}
                <li><NavLink className="dropdown-item" to="/restaurant-list">Restaurant List</NavLink></li>
                <li><NavLink className="dropdown-item" to="/restaurant-details">Restaurant Details 01</NavLink></li>
                <li><NavLink className="dropdown-item" to="/restaurant-details-2">Restaurant Details 02</NavLink></li>
                <li><hr className="dropdown-divider" /></li>

                {/* Shop */}
                <li><NavLink className="dropdown-item" to="/shop">Shop</NavLink></li>
                <li><NavLink className="dropdown-item" to="/shop-details">Shop Details</NavLink></li>
                <li><hr className="dropdown-divider" /></li>

                {/* Others */}
                <li><NavLink className="dropdown-item" to="/book-table">Book Table</NavLink></li>
                <li><NavLink className="dropdown-item" to="/order-tracking">Order Tracking</NavLink></li>
                <li><NavLink className="dropdown-item" to="/team">Team</NavLink></li>
                <li><NavLink className="dropdown-item" to="/team-details">Team Details</NavLink></li>
                <li><NavLink className="dropdown-item" to="/contact">Contact</NavLink></li>
                <li><NavLink className="dropdown-item" to="/faqs">FAQs</NavLink></li>
              </ul>
            </li>

            {/* Giỏ hàng */}
            <li className="nav-item ms-lg-2">
              <NavLink to="/cart" className="btn btn-outline-light position-relative">
                <i className="bi bi-cart me-2" /> Giỏ hàng
              </NavLink>
            </li>

            {/* CTA Đặt món */}
            <li className="nav-item ms-lg-2">
              <Link className="btn btn-warning text-dark fw-semibold" to="/book-table">
                <i className="bi bi-bag me-2" /> Đặt món
              </Link>
            </li>

            {/* --- KHU VỰC TÀI KHOẢN: đặt ngoài cùng, sau nút Đặt món --- */}
            {!user ? (
              <>
                <li className="nav-item ms-lg-2">
                  <NavLink to="/auth/login" className="btn btn-outline-light">
                    Đăng nhập
                  </NavLink>
                </li>
                <li className="nav-item ms-lg-2">
                  <NavLink to="/auth/register" className="btn btn-light text-dark fw-semibold">
                    Đăng ký
                  </NavLink>
                </li>
              </>
            ) : (
              <li className="nav-item dropdown ms-lg-2">
                <button
                  className="btn btn-light dropdown-toggle d-flex align-items-center"
                  data-bs-toggle="dropdown"
                >
                  <i className="bi bi-person-circle me-2" />
                  <span className="text-dark">{user.name}</span>
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  {/* menu theo role */}
                  {user.role === "buyer" && (
                    <>
                      <li><NavLink to="/buyer/orders" className="dropdown-item">Đơn hàng của tôi</NavLink></li>
                      <li><NavLink to="/buyer/favorites" className="dropdown-item">Yêu thích</NavLink></li>
                      <li><NavLink to="/buyer/profile" className="dropdown-item">Hồ sơ</NavLink></li>
                      <li><hr className="dropdown-divider" /></li>
                    </>
                  )}
                  {user.role === "seller" && (
                    <>
                      <li><NavLink to="/seller" className="dropdown-item">Seller Dashboard</NavLink></li>
                      <li><NavLink to="/seller/orders" className="dropdown-item">Đơn hàng</NavLink></li>
                      <li><hr className="dropdown-divider" /></li>
                    </>
                  )}
                  {user.role === "admin" && (
                    <>
                      <li><NavLink to="/admin" className="dropdown-item">Admin Dashboard</NavLink></li>
                      <li><NavLink to="/admin/orders" className="dropdown-item">Quản trị đơn</NavLink></li>
                      <li><hr className="dropdown-divider" /></li>
                    </>
                  )}
                  <li>
                    <button className="dropdown-item text-danger" onClick={onLogout}>
                      <i className="bi bi-box-arrow-right me-2" />
                      Đăng xuất
                    </button>
                  </li>
                </ul>
              </li>
            )}
            {/* --- /KHU VỰC TÀI KHOẢN --- */}
          </ul>
        </div>
      </nav>
    </header>
  );
}
