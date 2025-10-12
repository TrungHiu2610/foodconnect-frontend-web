type Member = { id:number; name:string; role:string; img:string };

const TEAM: Member[] = [
  { id:1, name:"Jenny Wilson", role:"Head Chef", img:"/assets/img/jenny-wilson.jpg" },
  { id:2, name:"Alex Li", role:"Sous Chef", img:"/assets/img/inner-global-obl.png" },
  { id:3, name:"Maria", role:"Barista", img:"/assets/img/inner-global-pasta.png" },
];

export default function Team() {
  return (
    <section className="py-5">
      <div className="container">
        <h1 className="fw-semibold mb-4">Our Team</h1>
        <div className="row g-4">
          {TEAM.map(m=>(
            <div className="col-6 col-md-4" key={m.id}>
              <div className="card h-100 text-center">
                <div className="ratio ratio-1x1">
                  <img src={m.img} className="w-100 h-100 object-fit-cover"
                       onError={e=>((e.target as HTMLImageElement).src="/vite.svg")} alt={m.name}/>
                </div>
                <div className="card-body">
                  <h6 className="mb-1">{m.name}</h6>
                  <div className="small text-muted">{m.role}</div>
                  <a className="btn btn-outline-warning btn-sm mt-2" href="/team-details">Xem hồ sơ</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
