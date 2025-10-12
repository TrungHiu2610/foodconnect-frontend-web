export default function BookTable() {
    const submit = (e:React.FormEvent) => { e.preventDefault(); alert("Đặt món (demo)"); };
    return (
      <section className="py-5">
        <div className="container">
          <h1 className="fw-semibold mb-4">Đặt món</h1>
          <form className="row g-3" onSubmit={submit}>
            <div className="col-md-6">
              <label className="form-label">Họ tên</label>
              <input className="form-control" required />
            </div>
            <div className="col-md-6">
              <label className="form-label">Số điện thoại</label>
              <input className="form-control" required />
            </div>
            <div className="col-md-6">
              <label className="form-label">Ngày</label>
              <input type="date" className="form-control" required />
            </div>
            <div className="col-md-6">
              <label className="form-label">Giờ</label>
              <input type="time" className="form-control" required />
            </div>
            <div className="col-md-6">
              <label className="form-label">Số lượng</label>
              <input type="number" min={1} defaultValue={2} className="form-control" />
            </div>
            <div className="col-12">
              <label className="form-label">Ghi chú</label>
              <textarea className="form-control" rows={4} />
            </div>
            <div className="col-12">
              <button className="btn btn-warning text-dark fw-semibold">Xác nhận</button>
            </div>
          </form>
        </div>
      </section>
    );
  }
  