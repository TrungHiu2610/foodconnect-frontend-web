const STEPS = ["Đã nhận đơn","Đang chuẩn bị","Đang giao","Hoàn tất"];

export default function OrderTracking() {
  const current = 2; // ví dụ đang ở “Đang giao”
  return (
    <section className="py-5">
      <div className="container">
        <h1 className="fw-semibold mb-4">Theo dõi đơn hàng</h1>
        <div className="position-relative mb-4" style={{height:6, background:"#eee"}}>
          <div style={{position:"absolute",left:0,top:0,height:6, background:"#ffc107", width:`${(current/(STEPS.length-1))*100}%`}}/>
        </div>
        <div className="d-flex justify-content-between">
          {STEPS.map((s,i)=>(
            <div key={s} className="text-center" style={{width:120}}>
              <div className={`rounded-circle d-inline-flex justify-content-center align-items-center mb-2 ${i<=current?'bg-warning text-dark':'bg-light'}`} style={{width:40,height:40}}>
                {i+1}
              </div>
              <div className={`small ${i<=current?'fw-semibold':''}`}>{s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
