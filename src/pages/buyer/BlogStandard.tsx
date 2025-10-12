import { Link } from "react-router-dom";

export default function BlogStandard() {
  return (
    <section className="py-5">
      <div className="container">
        <h1 className="fw-semibold mb-4">Bài viết mới</h1>

        {[1,2,3].map(i=>(
          <article key={i} className="row g-4 align-items-center mb-4">
            <div className="col-md-5">
              <img src="/assets/img/inner/restaurant-ex.jpg" className="img-fluid rounded"
                   onError={(e)=>((e.target as HTMLImageElement).src="/vite.svg")} alt="post"/>
            </div>
            <div className="col-md-7">
              <h4 className="mb-2">Tiêu đề bài viết {i}</h4>
              <p className="text-muted">
                Tóm tắt ngắn gọn về nội dung bài viết theo layout chuẩn của trang Blog Standard.
              </p>
              <Link to={`/blog/${i}`} className="btn btn-outline-secondary btn-sm">Đọc tiếp</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
