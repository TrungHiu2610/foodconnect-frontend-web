import { Outlet, NavLink } from "react-router-dom";
import AdminHeader from "../components/admin/AdminHeader";
import AdminFooter from "../components/admin/AdminFooter";

export default function AdminLayout() {
  return (
    <>
      <AdminHeader />
      <div className="container-fluid">
        <div className="row">
          <aside className="col-lg-2 border-end min-vh-100 py-3">
            <div className="fw-semibold mb-3">Admin</div>
            <ul className="nav nav-pills flex-column gap-1">
              <li><NavLink to="/admin" end className="nav-link">Dashboard</NavLink></li>
              <li><NavLink to="/admin/sellers" className="nav-link">Người bán</NavLink></li>
              <li><NavLink to="/admin/orders" className="nav-link">Đơn hàng</NavLink></li>
              <li><NavLink to="/admin/reviews" className="nav-link">Review</NavLink></li>
              <li><NavLink to="/admin/fees" className="nav-link">Phí sàn</NavLink></li>
              <li><NavLink to="/admin/reports" className="nav-link">Báo cáo</NavLink></li>
            </ul>
          </aside>
          <main className="col-lg-10 p-4">
            <Outlet />
          </main>
        </div>
      </div>
      <AdminFooter />
    </>
  );
}
