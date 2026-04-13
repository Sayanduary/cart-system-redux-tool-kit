import { useSelector } from "react-redux";
import { Link } from "react-router";

function Header() {
  const cartCount = useSelector((store) => store.cartStore.cartCount.length);

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-6">
        <Link
          to="/"
          className="text-lg font-semibold tracking-tight text-slate-900"
        >
          EcomApp
        </Link>

        <ul className="flex items-center gap-3 text-sm font-medium text-slate-700">
          <li>
            <Link
              to="/"
              className="rounded-full px-4 py-2 transition hover:bg-slate-100 hover:text-slate-950"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="rounded-full px-4 py-2 transition hover:bg-slate-100 hover:text-slate-950"
            >
              Cart ({cartCount})
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
