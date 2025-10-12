export default function AdminFees(){
    return (
      <>
        <h3 className="fw-semibold mb-3">Thiết lập phí sàn</h3>
        <form className="row g-3">
          <div className="col-md-4">
            <label className="form-label">% phí mặc định</label>
            <input type="number" className="form-control" defaultValue={5}/>
          </div>
          <div className="col-12">
            <button className="btn btn-warning text-dark">Lưu</button>
          </div>
        </form>
      </>
    );
  }
  