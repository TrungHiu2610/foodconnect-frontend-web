import { useParams, Link } from "react-router-dom";

export default function BlogDetails() {
  const { id } = useParams();

  return (
    <article className="py-5">
      <div className="container">
        <nav className="mb-3"><Link to="/blog">← Quay lại Blog</Link></nav>
        <h1 className="fw-semibold">Chi tiết bài viết #{id}</h1>
        <img
          src="/assets/img/inner/restaurant-ex.jpg"
          className="img-fluid rounded my-3"
          alt="cover"
          onError={(e)=>((e.target as HTMLImageElement).src="/vite.svg")}
        />
        <p className="text-muted">
          Nội dung mô phỏng theo layout blog-details: đoạn mở bài, hình ảnh minh hoạ, nội dung chính…
        </p>
        <hr/>
        <div className="d-flex gap-2">
          <span className="badge text-bg-light">food</span>
          <span className="badge text-bg-light">tips</span>
          <span className="badge text-bg-light">delivery</span>
        </div>
      </div>
    </article>
  );
}
