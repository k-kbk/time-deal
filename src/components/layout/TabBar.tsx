import { NavLink } from 'react-router-dom';
import Home from '../../assets/home.svg';
import My from '../../assets/profile.jpg';

export default function TabBar() {
  return (
    <nav className="fixed bottom-0 flex h-[3.5rem] w-screen items-center justify-center border-t bg-white text-xs">
      <NavLink
        to="/"
        className="mx-3 flex flex-col items-center px-2 font-medium"
      >
        <img src={Home} alt="home" className="w-8" />
        HOME
      </NavLink>
      <NavLink
        to="/my"
        className="mx-3 flex flex-col items-center px-2 font-medium"
      >
        <img src={My} alt="my" className="w-8" />
        MY
      </NavLink>
    </nav>
  );
}
