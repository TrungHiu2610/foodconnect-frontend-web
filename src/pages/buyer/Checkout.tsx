export default function Checkout() {
    const submit = (e:React.FormEvent)=>{ e.preventDefault(); alert("Đặt hàng (demo)"); };
    return (
      <section className="py-5">
        <div className="container">
          <h1 className="fw-semibold mb-4">Thanh toán</h1>
          <form className="row g-4" onSubmit={submit}>
            <div className="col-md-6">
              <label className="form-label">Họ tên</label>
              <input className="form-control" required />
            </div>
            <div className="col-md-6">
              <label className="form-label">Số điện thoại</label>
              <input className="form-control" required />
            </div>
            <div className="col-12">
              <label className="form-label">Địa chỉ</label>
              <input className="form-control" required />
            </div>
            <div className="col-md-6">
              <label className="form-label">Phương thức</label>
              <select className="form-select">
                <option>COD</option><option>Chuyển khoản</option><option>Ví điện tử</option>
              </select>
            </div>
            <div className="col-12">
              <button className="btn btn-warning text-dark fw-semibold">Đặt hàng</button>
            </div>
          </form>
        </div>
      </section>
    );
  }
  