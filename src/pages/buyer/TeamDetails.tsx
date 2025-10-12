export default function TeamDetails() {
    return (
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-5">
              <div className="ratio ratio-4x5 border rounded">
                <img src="/assets/img/jenny-wilson.jpg" className="w-100 h-100 object-fit-cover"
                     onError={e=>((e.target as HTMLImageElement).src="/vite.svg")} alt="member"/>
              </div>
            </div>
            <div className="col-md-7">
              <h2 className="fw-semibold">Jenny Wilson</h2>
              <div className="text-muted mb-2">Head Chef</div>
              <p className="text-muted">
                10+ năm kinh nghiệm bếp nóng, chuyên các món Âu – Á. Đam mê kết hợp nguyên liệu địa phương.
              </p>
              <h6 className="mt-4">Kỹ năng chính</h6>
              <ul className="small">
                <li>Menu R&D, chuẩn hoá quy trình</li>
                <li>Training đội bếp, kiểm soát chất lượng</li>
                <li>Food styling & plating</li>
              </ul>
              <a href="/team" className="btn btn-outline-secondary">Quay lại danh sách</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  