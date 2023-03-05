import { Link, NavLink, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const curPath = location.pathname;

  const renderLogin = !curPath.includes('admin');

  return (
    <header className="fixed top-0 z-50 flex h-[4rem] w-full items-center justify-between bg-header px-2 sm:px-10">
      <Link
        to="/"
        className="py-2 px-4 text-2xl font-bold tracking-tighter text-red-500"
      >
        NUMBLE.
      </Link>
      {renderLogin && (
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive
              ? 'hidden'
              : 'block' +
                ' py-2 px-4 text-lg font-semibold text-white hover:text-neutral-400'
          }
        >
          로그인
        </NavLink>
      )}
    </header>
  );
}
