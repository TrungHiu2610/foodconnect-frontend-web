  // src/pages/buyer/BuyerProfile.tsx
  export default function BuyerProfile(){
    return (
      <section className="py-4 container">
        <h3 className="fw-semibold mb-3">Hồ sơ</h3>
        <form className="row g-3">
          <div className="col-md-6"><label className="form-label">Họ tên</label><input className="form-control" defaultValue="Nguyễn A"/></div>
          <div className="col-md-6"><label className="form-label">SĐT</label><input className="form-control" defaultValue="0901 234 567"/></div>
          <div className="col-12"><label className="form-label">Địa chỉ</label><input className="form-control" defaultValue="TP. HCM"/></div>
          <div className="col-12"><button className="btn btn-warning text-dark">Lưu thay đổi</button></div>
        </form>
      </section>
    );
  }