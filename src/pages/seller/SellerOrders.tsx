export default function SellerOrders(){
    const orders=[{id:"FC1001",buyer:"Nguyễn A",total:210000,status:"Chờ xác nhận"}];
    return (
      <>
        <h3 className="fw-semibold mb-3">Đơn hàng</h3>
        <div className="table-responsive">
          <table className="table">
            <thead><tr><th>Mã</th><th>Khách</th><th>Tổng</th><th>Trạng thái</th><th/></tr></thead>
            <tbody>
              {orders.map(o=>(
                <tr key={o.id}>
                  <td>{o.id}</td><td>{o.buyer}</td><td>{o.total.toLocaleString()}đ</td><td>{o.status}</td>
                  <td className="text-end"><button className="btn btn-sm btn-warning text-dark">Xác nhận</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }