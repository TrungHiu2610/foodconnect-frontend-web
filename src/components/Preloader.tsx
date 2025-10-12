import { useEffect, useState } from "react";

export default function Preloader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 600); // fake load
    return () => clearTimeout(t);
  }, []);
  if (done) return null;

  return (
    <div className="position-fixed top-0 start-0 w-100 h-100 bg-white d-flex flex-column justify-content-center align-items-center" style={{zIndex: 2000}}>
      <div className="spinner-border text-warning" role="status" />
      <div className="mt-3 fw-semibold">Loading</div>
    </div>
  );
}
