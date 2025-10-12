export default function Home() {
  const featured = [
    { src: "/assets/img/fresh-beef.png", name: "Beef Burger" },
    { src: "/assets/img/inner/restaurant-ex.jpg", name: "Pasta Box" },
    { src: "/assets/img/apps/app-thum5.png", name: "Appetizer" },
    { src: "/assets/img/satisfied-like.png", name: "Combo Drinks" },
    { src: "/assets/img/jenny-wilson.jpg", name: "Chef Choice" },
    { src: "/assets/img/fresh-beef.png", name: "Premium Burger" },
  ];

  const onImgErr = (e: React.SyntheticEvent<HTMLImageElement>) => {
    (e.target as HTMLImageElement).src = "/vite.svg";
  };

  return (
    <>
      {/* HERO: rõ CTA + thanh tìm kiếm */}
      <section className="py-5 py-lg-6 bg-light">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <h1 className="display-5 fw-bold">
                Cảm hứng ẩm thực <span className="text-warning">địa phương</span>
              </h1>
              <p className="lead text-muted mt-3">
                Bữa ăn ngon – giao nhanh – nguyên liệu tươi sạch. Kết nối đầu bếp &amp; thực khách chỉ với một cú click.
              </p>

              {/* Thanh tìm kiếm */}
              <form
                className="row g-2 mt-3"
                role="search"
                onSubmit={(e) => {
                  e.preventDefault();
                  window.location.href = "/menu-list";
                }}
              >
                <div className="col-12 col-md-8">
                  <label htmlFor="search" className="visually-hidden">
                    Tìm món hoặc nhà hàng
                  </label>
                  <input
                    id="search"
                    className="form-control form-control-lg"
                    placeholder="Tìm món hoặc nhà hàng…"
                  />
                </div>
                <div className="col-12 col-md-4 d-grid">
                  <button className="btn btn-warning btn-lg text-dark fw-semibold">
                    <i className="bi bi-search me-2" />
                    Tìm ngay
                  </button>
                </div>
              </form>

              {/* CTA chính */}
              <div className="d-flex flex-wrap gap-3 mt-4">
                <a href="/menu-list" className="btn btn-warning text-dark fw-semibold btn-lg">
                  Xem thực đơn
                </a>
                <a href="/book-table" className="btn btn-outline-secondary btn-lg">
                  Đặt món ngay
                </a>
              </div>

              {/* Lối tắt danh mục */}
              <div className="d-flex flex-wrap gap-2 mt-4">
                {["Ăn vặt", "Thực phẩm khô", "Đồ uống", "Món chay"].map((c) => (
                  <a key={c} href="/menu-categories" className="badge rounded-pill text-bg-light p-2">
                    {c}
                  </a>
                ))}
              </div>
            </div>

            <div className="col-lg-5 text-center">
              <img
                src="/assets/img/fresh-beef.png"
                alt="Món nổi bật"
                className="img-fluid"
                onError={onImgErr}
              />
            </div>
          </div>
        </div>
      </section>

      {/* LÝ DO CHỌN CHÚNG TÔI */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {[
              { icon: "bi-bag", title: "Đặt món dễ dàng", desc: "Chọn món trong vài giây, thanh toán tiện lợi." },
              { icon: "bi-truck", title: "Giao nhanh", desc: "Đối tác giao hàng phủ khắp khu vực của bạn." },
              { icon: "bi-shield-check", title: "Nguồn sạch", desc: "Kiểm soát chất lượng & nguồn gốc nguyên liệu." },
            ].map((f) => (
              <div className="col-md-4" key={f.title}>
                <div className="p-4 border rounded-3 h-100">
                  <i className={`bi ${f.icon} fs-2 text-warning`} />
                  <h5 className="mt-3">{f.title}</h5>
                  <p className="text-muted small mb-0">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MÓN NỔI BẬT */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <h3 className="fw-semibold mb-0">Món nổi bật</h3>
            <a href="/menu-list" className="btn btn-sm btn-outline-secondary">
              Xem tất cả
            </a>
          </div>

          <div className="row g-3">
            {featured.map((item, i) => (
              <div className="col-6 col-md-4 col-lg-2" key={i}>
                <div className="card h-100 shadow-sm">
                  <img
                    src={item.src}
                    className="card-img-top"
                    alt={item.name}
                    onError={onImgErr}
                    style={{ objectFit: "cover", height: 120 }}
                  />
                  <div className="card-body p-2">
                    <div className="small text-truncate">{item.name}</div>
                    <div className="d-flex justify-content-between align-items-center mt-1">
                      <span className="fw-semibold text-warning">—</span>
                      <a href="/shop-details" className="stretched-link small">
                        Xem
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ĐÁNH GIÁ NHANH */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="p-4 border rounded-3 h-100">
                <h4 className="fw-semibold">Khách hàng nói gì?</h4>
                <p className="text-muted">
                  “Đặt món nhanh, giao đúng hẹn, đồ ăn nóng hổi. Rất hài lòng!”
                </p>
                <div className="d-flex align-items-center gap-3">
                  <img
                    src="/assets/img/jenny-wilson.jpg"
                    alt="Jenny Wilson"
                    className="rounded-circle"
                    width={48}
                    height={48}
                    onError={onImgErr}
                  />
                  <div className="small">
                    <div className="fw-semibold">Jenny Wilson</div>
                    <div className="text-muted">Khách hàng thân thiết</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="p-4 border rounded-3 h-100">
                <h4 className="fw-semibold">Tải ứng dụng</h4>
                <p className="text-muted">Đặt món và theo dõi đơn ngay trên điện thoại.</p>
                <div className="d-flex gap-3">
                  <img
                    src="/assets/img/google.png"
                    alt="Google Play"
                    height={46}
                    onError={onImgErr}
                  />
                  <img
                    src="/assets/img/app-store.png"
                    alt="App Store"
                    height={46}
                    onError={onImgErr}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA CUỐI TRANG */}
      <section className="py-5 bg-warning-subtle">
        <div className="container text-center">
          <h4 className="mb-3">Sẵn sàng đặt món?</h4>
          <a href="/book-table" className="btn btn-warning text-dark fw-semibold">
            Đặt món ngay
          </a>
        </div>
      </section>
    </>
  );
}
