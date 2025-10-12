// src/pages/buyer/Favorites.tsx
export default function Favorites(){
    const items = [
      {id:1,name:"Beef Burger",img:"/assets/img/fresh-beef.png",price:120000},
      {id:2,name:"Pasta Box",img:"/assets/img/inner/restaurant-ex.jpg",price:90000},
    ];
    return (
      <section className="py-4 container">
        <h3 className="fw-semibold mb-3">Món yêu thích</h3>
        <div className="row g-3">
          {items.map(p=>(
            <div className="col-6 col-md-4 col-lg-3" key={p.id}>
              <div className="card h-100">
                <img src={p.img} className="card-img-top" alt={p.name}/>
                <div className="card-body">
                  <div className="small text-truncate">{p.name}</div>
                  <div className="fw-semibold">{p.price.toLocaleString()}đ</div>
                  <a href={`/shop-details?id=${p.id}`} className="btn btn-sm btn-outline-warning mt-2">Mua ngay</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  