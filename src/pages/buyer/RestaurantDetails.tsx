import HeroSwiper from "../../components/HeroSwiper";
import GalleryLightbox from "../../components/GalleryLightbox";

export default function RestaurantDetails() {
  const hero = [
    "/assets/img/hero/home1.jpg",
    "/assets/img/hero/home2.jpg",
    "/assets/img/hero/home3.jpg",
  ];
  const gallery = [
    "/assets/img/inner/restaurant-ex.jpg",
    "/assets/img/fresh-beef.png",
    "/assets/img/apps/app-thum5.png",
    "/assets/img/jenny-wilson.jpg",
  ];

  return (
    <>
      <section className="py-4">
        <div className="container">
          <HeroSwiper slides={hero} />
        </div>
      </section>

      <section className="py-3">
        <div className="container">
          <h2 className="fw-semibold">FoodConnect – Chi nhánh A</h2>
          <p className="text-muted">Giờ mở cửa: 09:00–22:00 · Hotline: 1900 1234</p>
        </div>
      </section>

      <section className="py-4 bg-light">
        <div className="container">
          <h4 className="fw-semibold mb-3">Thư viện ảnh</h4>
          <GalleryLightbox images={gallery} />
        </div>
      </section>
    </>
  );
}
