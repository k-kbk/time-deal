import { NavLink } from 'react-router-dom';
import Home from '../../assets/home.svg';
import My from '../../assets/my.svg';

export default function TabBar() {
  return (
    <nav className="fixed bottom-0 flex h-[3.5rem] w-screen items-center justify-center bg-white shadow">
      <NavLink
        to="/"
        className="mx-3 flex flex-col items-center px-2 font-medium"
      >
        홈
      </NavLink>
      <NavLink
        to="/my"
        className="mx-3 flex flex-col items-center px-2 font-medium"
      >
        마이페이지
      </NavLink>
    </nav>
  );
}
