export default function SellerProducts(){
    const products=[{id:1,name:"Beef Burger",price:120000,status:"Đang bán"}];
    return (
      <>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="fw-semibold">Sản phẩm</h3>
          <a className="btn btn-warning text-dark">+ Thêm món</a>
        </div>
        <div className="table-responsive">
          <table className="table">
            <thead><tr><th>Món</th><th>Giá</th><th>TT</th><th/></tr></thead>
            <tbody>
              {products.map(p=>(
                <tr key={p.id}>
                  <td>{p.name}</td><td>{p.price.toLocaleString()}đ</td><td>{p.status}</td>
                  <td className="text-end">
                    <button className="btn btn-sm btn-outline-secondary me-2">Sửa</button>
                    <button className="btn btn-sm btn-outline-danger">Ẩn</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }