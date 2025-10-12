import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext";
import { RequireRole } from "./routes/Guards";
import StartRedirect from "./pages/auth/StartRedirect";

// Layouts
import BuyerLayout from "./layouts/BuyerLayout";
import SellerLayout from "./layouts/SellerLayout";
import AdminLayout from "./layouts/AdminLayout";

// Auth
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

// BUYER pages
import Home from "./pages/buyer/Home";
import About from "./pages/buyer/About";
import Contact from "./pages/buyer/Contact";
import Faqs from "./pages/buyer/Faqs";
import MenuList from "./pages/buyer/MenuList";
import MenuCategories from "./pages/buyer/MenuCategories";
import Shop from "./pages/buyer/Shop";
import ShopDetails from "./pages/buyer/ShopDetails";
import CartPage from "./pages/buyer/CartPage";
import Checkout from "./pages/buyer/Checkout";
import OrderTracking from "./pages/buyer/OrderTracking";
import BookTable from "./pages/buyer/BookTable";
import RestaurantList from "./pages/buyer/RestaurantList";
import RestaurantDetails from "./pages/buyer/RestaurantDetails";
import SingleFoodMenu from "./pages/buyer/SingleFoodMenu";
import Team from "./pages/buyer/Team";
import TeamDetails from "./pages/buyer/TeamDetails";
import BlogGrid from "./pages/buyer/BlogGrid";
import BlogStandard from "./pages/buyer/BlogStandard";
import BlogDetails from "./pages/buyer/BlogDetails";
       // <- nếu chưa có file, tạo nhanh (placeholder)

// BUYER extras
import Favorites from "./pages/buyer/Favorites";
import BuyerOrders from "./pages/buyer/BuyerOrders";
import BuyerProfile from "./pages/buyer/BuyerProfile";

// SELLER pages
import SellerDashboard from "./pages/seller/SellerDashboard";
import SellerOnboarding from "./pages/seller/SellerOnboarding";
import SellerProducts from "./pages/seller/SellerProducts";
import SellerOrders from "./pages/seller/SellerOrders";
import SellerPromos from "./pages/seller/SellerPromos";
import SellerPayouts from "./pages/seller/SellerPayouts";
import SellerReviews from "./pages/seller/SellerReviews";
import SellerAnalytics from "./pages/seller/SellerAnalytics";

// ADMIN pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminSellers from "./pages/admin/AdminSellers";
import AdminOrders from "./pages/admin/AdminOrders";
import AdminReviews from "./pages/admin/AdminReviews";
import AdminFees from "./pages/admin/AdminFees";
import AdminReports from "./pages/admin/AdminReports";

import Error404 from "./pages/Error404";

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Điểm vào: luôn kiểm tra đăng nhập trước */}
        <Route path="/" element={<StartRedirect />} />

        {/* Auth */}
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />

        {/* ===== BUYER (tất cả trang người mua) ===== */}
        <Route path="/buyer" element={<BuyerLayout />}>
          {/* Trang chủ buyer */}
          <Route index element={<Home />} />

          {/* Trang nội dung */}
          <Route path="about" element={<About />} />
          <Route path="menu-list" element={<MenuList />} />
          <Route path="menu-categories" element={<MenuCategories />} />
          <Route path="book-table" element={<BookTable />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop-details" element={<ShopDetails />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="order-tracking" element={<OrderTracking />} />
          <Route path="single-food-menu" element={<SingleFoodMenu />} />
          <Route path="team" element={<Team />} />
          <Route path="team-details" element={<TeamDetails />} />
          <Route path="restaurant-list" element={<RestaurantList />} />
          <Route path="restaurant-details" element={<RestaurantDetails />} />
          <Route path="blog" element={<BlogGrid />} />
          <Route path="blog-standard" element={<BlogStandard />} />
          <Route path="blog/:id" element={<BlogDetails />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faqs" element={<Faqs />} />

          {/* Trang tài khoản buyer */}
          <Route path="favorites" element={<Favorites />} />
          <Route path="orders" element={<BuyerOrders />} />
          <Route path="profile" element={<BuyerProfile />} />
        </Route>

        {/* ===== Aliases để các đường dẫn cũ KHÔNG 404 ===== */}
        <Route path="/" element={<Navigate to="/buyer" replace />} />
        <Route path="/about" element={<Navigate to="/buyer/about" replace />} />
        <Route path="/menu-list" element={<Navigate to="/buyer/menu-list" replace />} />
        <Route path="/menu-categories" element={<Navigate to="/buyer/menu-categories" replace />} />
        <Route path="/book-table" element={<Navigate to="/buyer/book-table" replace />} />
        <Route path="/shop" element={<Navigate to="/buyer/shop" replace />} />
        <Route path="/shop-details" element={<Navigate to="/buyer/shop-details" replace />} />
        <Route path="/cart" element={<Navigate to="/buyer/cart" replace />} />
        <Route path="/checkout" element={<Navigate to="/buyer/checkout" replace />} />
        <Route path="/order-tracking" element={<Navigate to="/buyer/order-tracking" replace />} />
        <Route path="/contact" element={<Navigate to="/buyer/contact" replace />} />
        <Route path="/faqs" element={<Navigate to="/buyer/faqs" replace />} />
        {/* ... nếu còn alias nào bạn đang dùng, thêm tương tự */}

        {/* ===== SELLER (có guard role) ===== */}
        <Route element={<RequireRole role="seller" />}>
          <Route path="/seller" element={<SellerLayout />}>
            <Route index element={<SellerDashboard />} />
            <Route path="onboarding" element={<SellerOnboarding />} />
            <Route path="products" element={<SellerProducts />} />
            <Route path="orders" element={<SellerOrders />} />
            <Route path="promos" element={<SellerPromos />} />
            <Route path="payouts" element={<SellerPayouts />} />
            <Route path="reviews" element={<SellerReviews />} />
            <Route path="analytics" element={<SellerAnalytics />} />
          </Route>
        </Route>

        {/* ===== ADMIN (có guard role) ===== */}
        <Route element={<RequireRole role="admin" />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="sellers" element={<AdminSellers />} />
            <Route path="orders" element={<AdminOrders />} />
            <Route path="reviews" element={<AdminReviews />} />
            <Route path="fees" element={<AdminFees />} />
            <Route path="reports" element={<AdminReports />} />
          </Route>
        </Route>

        {/* 404 */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </AuthProvider>
  );
}
