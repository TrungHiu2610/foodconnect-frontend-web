export default function SellerPayouts(){
    const rows=[{period:"09/2025",revenue:32500000,fee:1625000,payout:30875000,status:"Đã thanh toán"}];
    return (
      <>
        <h3 className="fw-semibold mb-3">Tài chính & Phí sàn</h3>
        <div className="table-responsive">
          <table className="table">
            <thead><tr><th>Kỳ</th><th>Doanh thu</th><th>Phí sàn</th><th>Thực nhận</th><th>TT</th></tr></thead>
            <tbody>
              {rows.map(r=>(
                <tr key={r.period}>
                  <td>{r.period}</td>
                  <td>{r.revenue.toLocaleString()}đ</td>
                  <td>{r.fee.toLocaleString()}đ</td>
                  <td>{r.payout.toLocaleString()}đ</td>
                  <td>{r.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }