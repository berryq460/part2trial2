import { NavLink } from "react-router-dom";

export default function Header() {
    return (
    <header className="app-links">
      <h1 className="app-title">Animal Time</h1>
      <nav className="app-nav">
        <li>
          <NavLink to="/Home">Home 🏠</NavLink>
        </li>
        <li>
          <NavLink to="/Dog"> Woof! 🐕</NavLink>
        </li>
        <li>
          <NavLink to="/Cats">Meow! 🐈</NavLink>
        </li>
        <li>
          <NavLink to="/BreedSearch">Search Cats 🐈</NavLink>
        </li>
      </nav>
    </header>
  );
}