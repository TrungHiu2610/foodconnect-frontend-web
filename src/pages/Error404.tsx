import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <section className="py-5 text-center">
      <div className="container">
        <img src="/assets/img/logo/logo-white.png" height={40} alt="logo"
             onError={(e)=>((e.target as HTMLImageElement).src="/vite.svg")} />
        <h1 className="display-4 fw-bold mt-3">404</h1>
        <p className="text-muted">Trang bạn tìm không tồn tại.</p>
        <Link to="/" className="btn btn-warning text-dark fw-semibold">Về trang chủ</Link>
      </div>
    </section>
  );
}
