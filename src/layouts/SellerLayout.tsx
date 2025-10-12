import { Outlet, NavLink, Link } from "react-router-dom";
import SellerHeader from "../components/seller/SellerHeader";
import SellerFooter from "../components/seller/SellerFooter";

export default function SellerLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <SellerHeader />

      {/* flex-grow-1 để đẩy footer xuống đáy */}
      <div className="container-fluid flex-grow-1">
        <div className="row">
          {/* Sidebar: bỏ min-vh-100, dùng sticky để không đẩy layout */}
          <aside
            className="col-md-3 col-lg-2 border-end py-3"
            style={{
              position: "sticky",
              top: 72, // ~ chiều cao header
              alignSelf: "flex-start",
              height: "calc(100vh - 72px)",
              overflowY: "auto",
            }}
          >
            <Link to="/seller" className="d-block mb-3 fw-semibold text-decoration-none">
              Seller Center
            </Link>
            <ul className="nav nav-pills flex-column gap-1">
              <li><NavLink to="/seller" end className="nav-link">Dashboard</NavLink></li>
              <li><NavLink to="/seller/onboarding" className="nav-link">Hồ sơ & KYC</NavLink></li>
              <li><NavLink to="/seller/products" className="nav-link">Sản phẩm</NavLink></li>
              <li><NavLink to="/seller/orders" className="nav-link">Đơn hàng</NavLink></li>
              <li><NavLink to="/seller/promos" className="nav-link">Khuyến mãi</NavLink></li>
              <li><NavLink to="/seller/payouts" className="nav-link">Tài chính</NavLink></li>
              <li><NavLink to="/seller/reviews" className="nav-link">Đánh giá</NavLink></li>
              <li><NavLink to="/seller/analytics" className="nav-link">Báo cáo</NavLink></li>
            </ul>
          </aside>

          {/* Main: THÊM lớp cột để không rớt xuống hàng mới */}
          <main className="col-md-9 col-lg-10 py-3">
            <Outlet />
          </main>
        </div>
      </div>

      <SellerFooter />
    </div>
  );
}
