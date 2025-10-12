import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const IMGS = [
  "/assets/img/fresh-beef.png",
  "/assets/img/inner/restaurant-ex.jpg",
  "/assets/img/apps/app-thum5.png",
];

export default function ShopDetails() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section className="py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="ratio ratio-1x1 border rounded mb-3">
              <img src={IMGS[index]} className="w-100 h-100 object-fit-cover"
                   onError={e=>((e.target as HTMLImageElement).src="/vite.svg")}
                   style={{cursor:"zoom-in"}} onClick={()=>setOpen(true)} alt="product"/>
            </div>
            <div className="d-flex gap-2">
              {IMGS.map((src,i)=>(
                <img key={i} src={src} width={90} height={90} className={`rounded border ${index===i?'border-warning':''}`}
                     style={{objectFit:"cover",cursor:"pointer"}}
                     onError={e=>((e.target as HTMLImageElement).src="/vite.svg")}
                     onClick={()=>{setIndex(i); setOpen(true);}} alt={`thumb-${i}`}/>
              ))}
            </div>
          </div>

          <div className="col-lg-6">
            <h2 className="fw-semibold">Burger Premium</h2>
            <div className="mb-2">Mã SP: FC-BUR-01 · Tình trạng: Còn hàng</div>
            <div className="fs-4 fw-semibold text-warning">120.000đ <del className="fs-6 text-muted">150.000đ</del></div>
            <p className="mt-3 text-muted">
              Thịt bò tươi – phô mai – rau củ – sốt bí mật. Chuẩn công thức FoodConnect.
            </p>
            <div className="d-flex align-items-center gap-2">
              <input type="number" min={1} defaultValue={1} className="form-control" style={{width:100}}/>
              <button className="btn btn-warning text-dark">Thêm vào giỏ</button>
            </div>
            <ul className="mt-3 small text-muted">
              <li>Danh mục: Burger</li>
              <li>Tags: #fresh #fast-delivery</li>
            </ul>
          </div>
        </div>

        <Lightbox
          open={open} close={()=>setOpen(false)} index={index}
          slides={IMGS.map(src=>({src}))}
          on={{ view: ({index:i})=>setIndex(i) }}
        />
      </div>
    </section>
  );
}
