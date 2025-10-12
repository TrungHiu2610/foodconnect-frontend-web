import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      {/* Breadcrumb / Hero light */}
      <section className="py-5 text-white"
        style={{
          backgroundImage: "url('/assets/img/home-1/big-burger.jpg')",
          backgroundSize: "cover", backgroundPosition: "center"
        }}>
        <div className="container">
          <h1 className="display-6 fw-bold">Về FoodConnect</h1>
          <p className="mb-0"><Link to="/" className="text-white-50">Home</Link> / About</p>
        </div>
      </section>

      {/* About block */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <img
                src="/assets/img/inner/restaurant-list1.jpg"
                className="img-fluid rounded"
                alt="about"
                onError={(e)=>((e.target as HTMLImageElement).src="/vite.svg")}
              />
            </div>
            <div className="col-lg-6">
              <h2 className="fw-semibold">Kết nối vị ngon địa phương</h2>
              <p className="text-muted">
                Nền tảng đặt món & đặt bàn, đồng bộ dữ liệu thực đơn, đơn hàng và khuyến mãi.
              </p>
              <ul className="list-unstyled">
                <li className="mb-2"><i className="bi bi-check-circle text-warning me-2"></i>Đặt món nhanh, thanh toán tiện</li>
                <li className="mb-2"><i className="bi bi-check-circle text-warning me-2"></i>Đối tác giao hàng tin cậy</li>
                <li className="mb-2"><i className="bi bi-check-circle text-warning me-2"></i>Quản trị nhà hàng tập trung</li>
              </ul>
              <Link to="/contact" className="btn btn-warning text-dark fw-semibold">Liên hệ</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature stats */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4 text-center">
            {[
              {n:"150+", t:"Đối tác nhà hàng"},
              {n:"1M+", t:"Đơn hàng xử lý"},
              {n:"98%", t:"Khách hàng hài lòng"},
            ].map((i,idx)=>(
              <div className="col-6 col-md-4" key={idx}>
                <h3 className="fw-bold">{i.n}</h3>
                <p className="text-muted mb-0">{i.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
