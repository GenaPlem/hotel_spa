import logo from "../../logo.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between mb-5 md:mb-10">
      <Link to="/">
        <img src={logo} alt="logo" className="logo size-8 sm:size-10" />
      </Link>
      <ul className="flex items-center gap-3 text-sm sm:text-base sm:gap-10">
        <li>
          <Link to="/hotels" className="hover:text-sky-400">
            All Hotels
          </Link>
        </li>
      </ul>
    </header>
  );
}
