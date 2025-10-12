 // src/pages/buyer/BuyerOrders.tsx
 export default function BuyerOrders(){
    const data = [
      {id:"FC1001",date:"2025-09-01",total:210000,status:"Đang giao"},
      {id:"FC1002",date:"2025-09-05",total:120000,status:"Hoàn tất"},
    ];
    return (
      <section className="py-4 container">
        <h3 className="fw-semibold mb-3">Đơn hàng của tôi</h3>
        <div className="table-responsive">
          <table className="table">
            <thead><tr><th>Mã đơn</th><th>Ngày</th><th>Tổng</th><th>Trạng thái</th><th/></tr></thead>
            <tbody>
              {data.map(x=>(
                <tr key={x.id}>
                  <td>{x.id}</td><td>{x.date}</td>
                  <td>{x.total.toLocaleString()}đ</td><td>{x.status}</td>
                  <td><a className="btn btn-sm btn-outline-secondary" href={`/order-tracking?id=${x.id}`}>Theo dõi</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
  