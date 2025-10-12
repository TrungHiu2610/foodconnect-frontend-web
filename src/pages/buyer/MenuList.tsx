type Item = { id:number; name:string; price:number; img:string; tag:string };

const DATA: Item[] = [
  { id:1, name:"Beef Burger", price:120000, img:"/assets/img/fresh-beef.png", tag:"burger" },
  { id:2, name:"Pasta Box",   price: 90000, img:"/assets/img/fresh-beef.png", tag:"pasta" },
  { id:3, name:"Appetizer",   price: 70000, img:"/assets/img/fresh-beef.png", tag:"starter" },
];

export default function MenuList() {
  return (
    <section className="py-5">
      <div className="container">
        <h1 className="fw-semibold mb-4">Menu List</h1>
        <div className="row g-4">
          {DATA.map(i=>(
            <div className="col-12" key={i.id}>
              <div className="d-flex gap-3 align-items-center p-3 border rounded-3">
                <img src={i.img} alt={i.name} width={96} height={96} className="rounded object-fit-cover"
                     onError={(e)=>((e.target as HTMLImageElement).src="/vite.svg")} />
                <div className="flex-grow-1">
                  <h5 className="mb-1">{i.name}</h5>
                  <span className="badge text-bg-light">{i.tag}</span>
                </div>
                <div className="fw-semibold">{i.price.toLocaleString()}đ</div>
                <button className="btn btn-warning text-dark">Thêm</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
    