import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function BuyerLayout() {
  return (
    <>
      <Header />
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
