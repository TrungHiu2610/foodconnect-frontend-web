import { useState } from "react";

const CATS = ["Tất cả","Burgers","Pasta","Drinks"];
const MAP = {
  "Tất cả": ["/assets/img/fresh-beef.png","/assets/img/apps/app-thum5.png","/assets/img/inner/restaurant-ex.jpg"],
  "Burgers": ["/assets/img/fresh-beef.png"],
  "Pasta": ["/assets/img/inner/restaurant-ex.jpg"],
  "Drinks": ["/assets/img/satisfied-like.png"],
} as Record<string,string[]>;

export default function MenuCategories() {
  const [active, setActive] = useState("Tất cả");
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h1 className="fw-semibold mb-3">Menu Categories</h1>
        <ul className="nav nav-pills gap-2 mb-4 flex-wrap">
          {CATS.map(c=>(
            <li className="nav-item" key={c}>
              <button className={`btn ${active===c?'btn-warning text-dark':'btn-outline-secondary'}`} onClick={()=>setActive(c)}>{c}</button>
            </li>
          ))}
        </ul>
        <div className="row g-3">
          {MAP[active].map((src,i)=>(
            <div className="col-6 col-md-4 col-lg-3" key={i}>
              <img src={src} className="img-fluid rounded" alt={active+i}
                   onError={(e)=>((e.target as HTMLImageElement).src='/vite.svg')} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
