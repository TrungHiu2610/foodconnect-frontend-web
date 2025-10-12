export default function AdminOrders(){
    const orders=[{id:"FC1001",seller:"Bếp Cô Ba",buyer:"Trần D",total:210000,status:"Tranh chấp"}];
    return (
      <>
        <h3 className="fw-semibold mb-3">Đơn hàng</h3>
        <div className="table-responsive">
          <table className="table">
            <thead><tr><th>Mã</th><th>Seller</th><th>Buyer</th><th>Tổng</th><th>TT</th><th/></tr></thead>
            <tbody>
              {orders.map(o=>(
                <tr key={o.id}>
                  <td>{o.id}</td><td>{o.seller}</td><td>{o.buyer}</td><td>{o.total.toLocaleString()}đ</td><td>{o.status}</td>
                  <td className="text-end">
                    <button className="btn btn-sm btn-outline-secondary me-2">Xem</button>
                    <button className="btn btn-sm btn-warning me-2">Hoàn tiền</button>
                    <button className="btn btn-sm btn-outline-danger">Phạt seller</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
  