import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="fixed top-0 flex h-[4rem] w-full items-center justify-between bg-header px-8 sm:px-10">
      <p className="text-2xl font-bold tracking-tighter text-red-500">
        NUMBLE.
      </p>
      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive
            ? 'hidden'
            : 'block' + ' py-2 px-4 text-lg font-semibold text-white'
        }
      >
        로그인
      </NavLink>
    </header>
  );
}
