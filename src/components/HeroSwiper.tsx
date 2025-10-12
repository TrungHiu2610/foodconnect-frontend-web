import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function HeroSwiper({ slides }: { slides: string[] }) {
  return (
    <Swiper modules={[Autoplay, Pagination]} autoplay={{ delay: 2500 }} pagination={{ clickable: true }}>
      {slides.map((src, i) => (
        <SwiperSlide key={i}>
          <div className="ratio ratio-21x9">
            <img
              src={src}
              className="w-100 h-100 object-fit-cover"
              alt={`slide-${i}`}
              onError={(e) => ((e.target as HTMLImageElement).src = "/vite.svg")}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
