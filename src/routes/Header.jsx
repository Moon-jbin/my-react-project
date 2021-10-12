import { BrowserRouter, Route } from "react-router-dom";
import NavLinks from "../components/NavLinks";
import Home from "../pages/Home";
import About from "../pages/About";
import Todo from "../pages/Todo";

export default function Header() {
  return (
    <BrowserRouter>
      <header>
        <NavLinks />
        <h1>MeaningFul Day</h1>
      </header>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/todo" component={Todo} />
    </BrowserRouter>
  );
}
