// src/pages/seller/SellerReviews.tsx
export default function SellerReviews(){
    const reviews=[{id:1,user:"Trần B",rating:5,content:"Ngon và sạch!",flag:false}];
    return (
      <>
        <h3 className="fw-semibold mb-3">Đánh giá</h3>
        {reviews.map(r=>(
          <div key={r.id} className="border rounded p-3 mb-2">
            <div className="d-flex justify-content-between">
              <div className="fw-semibold">{r.user} · {r.rating}★</div>
              <button className="btn btn-sm btn-outline-secondary">Trả lời</button>
            </div>
            <div className="text-muted">{r.content}</div>
          </div>
        ))}
      </>
    );
  }
  