export default function AdminDashboard(){
    const kpi=[
      {label:"Sellers chờ duyệt",value:8},
      {label:"Đơn cần xử lý",value:23},
      {label:"Khiếu nại mở",value:4},
    ];
    return (
      <>
        <h3 className="fw-semibold mb-3">Tổng quan hệ thống</h3>
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
  