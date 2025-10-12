export default function SingleFoodMenu() {
    return (
      <>
        <section className="py-5 bg-light position-relative">
          <div className="container text-center">
            <h1 className="fw-semibold">Chi Tiết Món Ăn</h1>
            <p className="text-muted">Một món – mô tả – dinh dưỡng – ảnh minh hoạ.</p>
          </div>
          {/* mô phỏng các shape của template */}
          <img src="/assets/img/home-1/home-shape-start.png" className="position-absolute" style={{left:0,top:0}} onError={e=>((e.target as HTMLImageElement).style.display="none")} />
          <img src="/assets/img/home-1/home-shape-end.png" className="position-absolute d-none d-sm-block" style={{right:0,bottom:0}} onError={e=>((e.target as HTMLImageElement).style.display="none")} />
        </section>
  
        <section className="py-5">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-md-6">
                <div className="ratio ratio-4x3 border rounded">
                  <img src="/assets/img/fresh-beef.png" className="w-100 h-100 object-fit-cover"
                       onError={e=>((e.target as HTMLImageElement).src="/vite.svg")} alt="dish"/>
                </div>
              </div>
              <div className="col-md-6">
                <h3 className="fw-semibold">Fresh Beef Burger</h3>
                <p className="text-muted">Công thức chuẩn nhà bếp FoodConnect, nguyên liệu tươi trong ngày.</p>
                <ul className="small">
                  <li>Năng lượng: 520 kcal</li>
                  <li>Protein: 26 g</li>
                  <li>Carb: 45 g</li>
                  <li>Fat: 22 g</li>
                </ul>
                <a href="/menu" className="btn btn-warning text-dark">Xem menu khác</a>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
  