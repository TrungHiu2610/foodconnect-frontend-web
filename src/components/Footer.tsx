export default function Footer() {
    return (
      <footer className="bg-dark text-white pt-5 pb-4 mt-auto">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <img src="../assets/img/logo/logo-white.png" alt="logo" height={36} />
              <p className="mt-3 text-light opacity-75">
                Kết nối bếp nhà & vị ngon địa phương. Thực đơn tươi mỗi ngày.
              </p>
            </div>
  
            <div className="col-6 col-md-2">
              <h6 className="fw-semibold mb-3">Trang</h6>
              <ul className="list-unstyled small">
                <li><a className="link-light text-decoration-none" href="/">Home</a></li>
                <li><a className="link-light text-decoration-none" href="/about">About</a></li>
                <li><a className="link-light text-decoration-none" href="/menu-list">Menu</a></li>
                <li><a className="link-light text-decoration-none" href="/contact">Contact</a></li>
              </ul>
            </div>
  
            <div className="col-6 col-md-3">
              <h6 className="fw-semibold mb-3">Liên hệ</h6>
              <ul className="list-unstyled small">
                <li><i className="bi bi-geo-alt me-2" />TP. HCM</li>
                <li><i className="bi bi-envelope me-2" />support@foodconnect.vn</li>
                <li><i className="bi bi-telephone me-2" />1900 1234</li>
              </ul>
            </div>
  
            <div className="col-md-3">
              <h6 className="fw-semibold mb-3">Theo dõi</h6>
              <div className="d-flex gap-2">
                <a className="btn btn-outline-light btn-sm" href="#"><i className="bi bi-facebook" /></a>
                <a className="btn btn-outline-light btn-sm" href="#"><i className="bi bi-instagram" /></a>
                <a className="btn btn-outline-light btn-sm" href="#"><i className="bi bi-youtube" /></a>
              </div>
            </div>
          </div>
  
          <hr className="border-secondary my-4" />
          <div className="small text-center text-secondary">
            © {new Date().getFullYear()} FoodConnect. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }
  