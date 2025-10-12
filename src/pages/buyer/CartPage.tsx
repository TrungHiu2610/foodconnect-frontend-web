import { Link } from "react-router-dom";
type Item = { id:number; name:string; price:number; qty:number; img:string };
const initial: Item[] = [
  {id:1, name:"Pasta Bò", price:120000, qty:1, img:"/assets/img/fresh-beef.png"},
  {id:2, name:"Combo Appetizer", price:90000, qty:2, img:"/assets/img/apps/app-thum5.png"},
];

export default function CartPage() {
  return (
    <section className="py-5">
      <div className="container">
        <h1 className="fw-semibold mb-4">Giỏ hàng</h1>
        <div className="table-responsive">
          <table className="table align-middle">
            <thead>
              <tr><th>Món</th><th>Giá</th><th>Số lượng</th><th>Tạm tính</th></tr>
            </thead>
            <tbody>
              {initial.map(i=>(
                <tr key={i.id}>
                  <td>
                    <img src={i.img} alt={i.name} width={48} className="me-2 rounded"
                         onError={(e)=>((e.target as HTMLImageElement).src="/vite.svg")}/>
                    {i.name}
                  </td>
                  <td>{i.price.toLocaleString()}đ</td>
                  <td><input type="number" defaultValue={i.qty} min={1} className="form-control" style={{width:90}}/></td>
                  <td>{(i.price*i.qty).toLocaleString()}đ</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-end">
          <Link to="/checkout" className="btn btn-warning text-dark fw-semibold">Thanh toán</Link>
        </div>
      </div>
    </section>
  );
}
