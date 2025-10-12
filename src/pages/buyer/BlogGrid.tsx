import { Link } from "react-router-dom";

const posts = [
  {id:1, img:"/assets/img/client-admin1.jpg", title:"Bí quyết chọn nguyên liệu tươi", date:"12/08/2025"},
  {id:2, img:"/assets/img/jenny-wilson.jpg", title:"5 món signature nên thử", date:"20/08/2025"},
  {id:3, img:"/assets/img/inner/restaurant-ex.jpg", title:"Không gian & trải nghiệm", date:"28/08/2025"},
  {id:4, img:"/assets/img/fresh-beef.png", title:"Protein & chế độ dinh dưỡng", date:"31/08/2025"},
  {id:5, img:"/assets/img/apps/app-thum5.png", title:"App đặt món – mẹo dùng nhanh", date:"02/09/2025"},
  {id:6, img:"/assets/img/satisfied-like.png", title:"Khảo sát mức độ hài lòng", date:"10/09/2025"},
];

export default function BlogGrid() {
  return (
    <>
      <section className="py-5 bg-light">
        <div className="container">
          <h1 className="fw-semibold mb-4">Blog</h1>
          <div className="row g-4">
            {posts.map(p=>(
              <div className="col-md-6 col-lg-4" key={p.id}>
                <article className="card h-100 shadow-sm">
                  <img src={p.img} className="card-img-top" alt={p.title}
                       onError={(e)=>((e.target as HTMLImageElement).src="/vite.svg")}/>
                  <div className="card-body">
                    <small className="text-muted">{p.date}</small>
                    <h5 className="mt-2">{p.title}</h5>
                    <Link to={`/blog/${p.id}`} className="stretched-link">Đọc tiếp</Link>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
