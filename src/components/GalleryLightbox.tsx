import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function GalleryLightbox({ images }: { images: string[] }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      <div className="row g-3">
        {images.map((src, i) => (
          <div className="col-6 col-md-4 col-lg-3" key={i}>
            <img
              src={src}
              className="img-fluid rounded"
              alt={`g-${i}`}
              style={{ cursor: "pointer" }}
              onClick={() => { setIndex(i); setOpen(true); }}
              onError={(e) => ((e.target as HTMLImageElement).src = "/vite.svg")}
            />
          </div>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images.map((src) => ({ src }))}
        on={{ view: ({ index: i }) => setIndex(i) }}
      />
    </>
  );
}
