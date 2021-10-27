import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavLinks from "../components/NavLinks";
import Home from "../pages/Home";
import About from "../pages/About";
import Todo from "../pages/Todo";
import Teamwork from "../pages/Teamwork";
import Portfolio from "../pages/Portfolio";
import ReactProject from "../pages/ReactProject";
import Explanation from "../pages/Explanation";

export default function Header() {
  return (
    <BrowserRouter>
      <header>
        <NavLinks />
        <h1>MeaningFul Day</h1>
      </header>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/todo" component={Todo} />
        <Route path="/teamwork" exact component={Teamwork} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/react-project" exact component={ReactProject} />
        <Route path="/explanation" exact component={Explanation} />
      </Switch>
    </BrowserRouter>
  );
}
