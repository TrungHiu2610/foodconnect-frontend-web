export default function SellerOnboarding(){
    return (
      <>
        <h3 className="fw-semibold mb-3">Xác minh hồ sơ người bán</h3>
        <p className="text-muted small">Tải giấy phép ATTP/kinh doanh, ảnh bếp, chứng chỉ… để admin duyệt trước khi mở bán.</p>
        <form className="row g-3">
          <div className="col-md-6"><label className="form-label">Tên gian hàng</label><input className="form-control"/></div>
          <div className="col-md-6"><label className="form-label">SĐT liên hệ</label><input className="form-control"/></div>
          <div className="col-12"><label className="form-label">Mô tả</label><textarea className="form-control" rows={4}/></div>
          <div className="col-12"><label className="form-label">Giấy tờ/Chứng chỉ (PDF/JPG)</label><input type="file" className="form-control" multiple/></div>
          <div className="col-12"><button className="btn btn-warning text-dark">Gửi duyệt</button></div>
        </form>
      </>
    );
  }