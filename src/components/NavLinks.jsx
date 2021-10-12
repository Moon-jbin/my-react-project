import { NavLink } from "react-router-dom";

const activeStyle = { color: "white" };

export default function NavLinks() {
  return (
    <ul id="Nav">
      <li>
        <NavLink className="NavButton" to="/" exact activeStyle={activeStyle}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="NavButton" to="/about" activeStyle={activeStyle}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink className="NavButton" to="/todo" activeStyle={activeStyle}>
          Todo
        </NavLink>
      </li>
    </ul>
  );
}
