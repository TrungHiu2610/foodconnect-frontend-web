type Product = { id:number; name:string; img:string; price:number; oldPrice?:number; badge?:string };

const PRODUCTS: Product[] = [
  { id:1, name:"Burger Premium", img:"/assets/img/fresh-beef.png", price:120000, oldPrice:150000, badge:"Hot" },
  { id:2, name:"Pasta Box", img:"/assets/img/food.jpg", price:90000 },
  { id:3, name:"Combo Drinks", img:"/assets/img/fresh-beef.png", price:60000, badge:"Sale" },
  { id:4, name:"Appetizer", img:"/assets/img/food.jpg", price:70000 },
];

export default function Shop() {
  return (
    <section className="py-5">
      <div className="container">
        <h1 className="fw-semibold mb-4">Shop</h1>
        <div className="row g-4">
          {PRODUCTS.map(p=>(
            <div className="col-6 col-md-4 col-lg-3" key={p.id}>
              <div className="card h-100">
                <div className="ratio ratio-1x1">
                  <img src={p.img} className="w-100 h-100 object-fit-cover"
                       onError={e=>((e.target as HTMLImageElement).src="/vite.svg")} alt={p.name}/>
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start">
                    <h6 className="mb-1">{p.name}</h6>
                    {p.badge && <span className="badge text-bg-warning text-dark">{p.badge}</span>}
                  </div>
                  <div className="fw-semibold">
                    {p.price.toLocaleString()}đ{" "}
                    {p.oldPrice && <del className="text-muted small">{p.oldPrice.toLocaleString()}đ</del>}
                  </div>
                  <a href="/shop-details" className="btn btn-outline-warning btn-sm mt-2">Xem chi tiết</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
