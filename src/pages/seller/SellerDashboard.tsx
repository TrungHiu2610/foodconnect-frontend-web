export default function SellerDashboard(){
    const kpi = [
      {label:"Đơn hôm nay", value:12},
      {label:"Doanh thu (tháng)", value:"32.5M"},
      {label:"Đánh giá TB", value:"4.7★"},
    ];
    return (
      <>
        <h3 className="fw-semibold mb-3">Tổng quan gian hàng</h3>
        <div className="row g-3">
          {kpi.map(k=>(
            <div className="col-md-4" key={k.label}>
              <div className="p-3 border rounded text-center">
                <div className="h4 mb-1">{k.value}</div>
                <div className="text-muted small">{k.label}</div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }