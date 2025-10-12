export default function Faqs() {
    const faqs = [
      {q:"Thời gian giao hàng?", a:"Thường 20–40 phút tuỳ khu vực & thời điểm."},
      {q:"Có hỗ trợ hoá đơn điện tử?", a:"Có, vui lòng ghi chú khi thanh toán."},
      {q:"Có hoàn tiền khi huỷ đơn?", a:"Theo chính sách huỷ/đổi – xem chi tiết trong điều khoản."},
    ];
    return (
      <section className="py-5">
        <div className="container">
          <h1 className="fw-semibold mb-4">Câu hỏi thường gặp</h1>
          <div className="accordion" id="faq">
            {faqs.map((f,i)=>(
              <div className="accordion-item" key={i}>
                <h2 className="accordion-header" id={`h${i}`}>
                  <button className={`accordion-button ${i>0?'collapsed':''}`} type="button"
                          data-bs-toggle="collapse" data-bs-target={`#c${i}`}>
                    {f.q}
                  </button>
                </h2>
                <div id={`c${i}`} className={`accordion-collapse collapse ${i===0?'show':''}`} data-bs-parent="#faq">
                  <div className="accordion-body text-muted">{f.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  