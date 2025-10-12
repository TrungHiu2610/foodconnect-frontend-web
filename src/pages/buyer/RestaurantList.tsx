import HeroSwiper from "../../components/HeroSwiper";

type Restaurant = {
  id: number; name: string; cover: string; logo: string;
  address: string; open: string; rating: number; tags: string[];
};

const DATA: Restaurant[] = [
  {
    id: 1,
    name: "FoodConnect – Chi nhánh A",
    cover: "/assets/img/hero/home1.jpg",
    logo: "/assets/img/logo/logo-white.png",
    address: "123 Nguyễn Trãi, Q.5, TP.HCM",
    open: "09:00–22:00",
    rating: 4.5,
    tags: ["Burgers", "Pasta", "Drinks"],
  },
  {
    id: 2,
    name: "FoodConnect – Chi nhánh B",
    cover: "/assets/img/hero/home2.jpg",
    logo: "/assets/img/logo/logo-white.png",
    address: "45 Hoàng Diệu, Q.4, TP.HCM",
    open: "10:00–21:00",
    rating: 4.3,
    tags: ["Sushi", "Seafood"],
  },
];

export default function RestaurantList() {
  const hero = ["/assets/img/hero/home3.jpg", "/assets/img/hero/home4.jpg"];

  return (
    <>
      <section className="py-4">
        <div className="container"><HeroSwiper slides={hero} /></div>
      </section>

      <section className="py-5">
        <div className="container">
          <h1 className="fw-semibold mb-4">Restaurant List</h1>
          <div className="row g-4">
            {DATA.map(r => (
              <div className="col-md-6" key={r.id}>
                <div className="card h-100 shadow-sm">
                  <div className="ratio ratio-21x9">
                    <img src={r.cover} className="w-100 h-100 object-fit-cover"
                         onError={e=>((e.target as HTMLImageElement).src="/vite.svg")} alt={r.name}/>
                  </div>
                  <div className="card-body">
                    <div className="d-flex align-items-center gap-3">
                      <img src={r.logo} width={44} height={44} className="rounded-circle border"
                           onError={e=>((e.target as HTMLImageElement).src="/vite.svg")} alt="logo"/>
                      <div>
                        <h5 className="mb-1">{r.name}</h5>
                        <div className="small text-muted">{r.address}</div>
                      </div>
                      <span className="ms-auto badge text-bg-warning text-dark">
                        ★ {r.rating}
                      </span>
                    </div>
                    <div className="mt-3 small">Giờ mở cửa: {r.open}</div>
                    <div className="mt-2 d-flex gap-2 flex-wrap">
                      {r.tags.map(t => <span key={t} className="badge text-bg-light">{t}</span>)}
                    </div>
                    <a href="/restaurant-details" className="btn btn-warning text-dark mt-3">Xem chi tiết</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
