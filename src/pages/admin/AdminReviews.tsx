export default function AdminReviews(){
    const reviews=[{id:1,product:"Burger",user:"Acc lạ",rating:1,spamScore:0.93,status:"Nghi vấn"}];
    return (
      <>
        <h3 className="fw-semibold mb-3">Quản trị Review</h3>
        <div className="table-responsive">
          <table className="table">
            <thead><tr><th>Sản phẩm</th><th>Người viết</th><th>★</th><th>SpamScore</th><th>TT</th><th/></tr></thead>
            <tbody>
              {reviews.map(r=>(
                <tr key={r.id}>
                  <td>{r.product}</td><td>{r.user}</td><td>{r.rating}</td><td>{(r.spamScore*100).toFixed(0)}%</td><td>{r.status}</td>
                  <td className="text-end">
                    <button className="btn btn-sm btn-success me-2">Giữ</button>
                    <button className="btn btn-sm btn-outline-danger">Gỡ</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }