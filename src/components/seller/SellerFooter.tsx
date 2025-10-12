export default function SellerFooter() {
  return (
    <footer className="mt-auto position-relative" style={{ zIndex: 1 }}>  
      {/* viền nhấn màu brand ở trên footer */}
      <div
        style={{
          height: 3,
          background:
            "linear-gradient(90deg, rgba(255,154,0,1) 0%, rgba(255,109,0,1) 60%, rgba(255,94,0,1) 100%)",
        }}
      />
      <div className="bg-dark">
        <div className="container py-3">
          <div className="d-flex flex-wrap justify-content-between align-items-center small text-white-50">
            <div>
              © {new Date().getFullYear()} <span className="text-white">FoodConnect</span> —{" "}
              <span className="text-white">Seller Center</span>
            </div>
            <div className="d-flex gap-3">
              <a className="link-light link-opacity-75" href="#">Điều khoản</a>
              <a className="link-light link-opacity-75" href="#">Bảo mật</a>
              <a className="link-light link-opacity-75" href="#">Hỗ trợ</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
