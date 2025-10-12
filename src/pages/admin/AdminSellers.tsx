export default function AdminSellers(){
    const queue=[
      {id:1,store:"Bếp Cô Ba",owner:"Nguyễn C",submitted:"2025-09-20"},
    ];
    return (
      <>
        <h3 className="fw-semibold mb-3">Duyệt hồ sơ người bán</h3>
        <div className="table-responsive">
          <table className="table">
            <thead><tr><th>Gian hàng</th><th>Chủ</th><th>Gửi lúc</th><th/></tr></thead>
            <tbody>
              {queue.map(s=>(
                <tr key={s.id}>
                  <td>{s.store}</td><td>{s.owner}</td><td>{s.submitted}</td>
                  <td className="text-end">
                    <button className="btn btn-sm btn-success me-2">Duyệt</button>
                    <button className="btn btn-sm btn-outline-danger">Từ chối</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }