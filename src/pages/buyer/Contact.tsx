export default function Contact() {
    const submit = (e:React.FormEvent)=>{ e.preventDefault(); alert("Gửi liên hệ (demo)"); };
    return (
      <>
        <section className="py-5 bg-light">
          <div className="container">
            <h1 className="fw-semibold">Liên hệ</h1>
            <p className="text-muted">Chúng tôi sẽ phản hồi sớm nhất có thể.</p>
            <div className="row g-4">
              <div className="col-lg-6">
                <form className="row g-3" onSubmit={submit}>
                  <div className="col-md-6"><input className="form-control" placeholder="Họ tên" required/></div>
                  <div className="col-md-6"><input type="email" className="form-control" placeholder="Email" required/></div>
                  <div className="col-12"><input className="form-control" placeholder="Tiêu đề" required/></div>
                  <div className="col-12"><textarea className="form-control" rows={5} placeholder="Nội dung" required/></div>
                  <div className="col-12"><button className="btn btn-warning text-dark fw-semibold">Gửi</button></div>
                </form>
              </div>
              <div className="col-lg-6">
                <div className="p-4 border rounded h-100">
                  <h5>Thông tin</h5>
                  <p className="mb-1"><i className="bi bi-geo-alt me-2" />TP. HCM</p>
                  <p className="mb-1"><i className="bi bi-telephone me-2" />1900 1234</p>
                  <p className="mb-0"><i className="bi bi-envelope me-2" />support@foodconnect.vn</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
  