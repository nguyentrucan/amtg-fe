import { NavLink, Outlet } from "react-router-dom";

const navLink =
  "px-2 py-2 rounded-lg hover:text-white hover-bg-gray-100 dark:hover:bg-gray-800 transition";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container flex items-center justify-between h-16">
          <a href="/" className="font-bold text-xl">
            Ảnh màu<span className="text-brand"> Trường Giang</span>
          </a>
          <nav className="flex gap-2">
            <NavLink to={"/"} className={navLink} end>
              Trang Chủ
            </NavLink>
            <NavLink to={"/gallery"} className={navLink}>
              Gallery
            </NavLink>
            <NavLink to={"/about"} className={navLink} end>
              Giới thiệu
            </NavLink>
            <NavLink to={"/contact"} className={navLink} end>
              Liên hệ
            </NavLink>
          </nav>
        </div>
      </header>
      <main className="flex-1 container py-8">
        <Outlet />
      </main>

      <footer className="border-t">
        <div className="container py-6 text-sm text-center text-gray-500">
          &copy;{new Date().getFullYear()} Ảnh Màu Trường Giang - All rights
          reserved
        </div>
      </footer>
    </div>
  );
}
