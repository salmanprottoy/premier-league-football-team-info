import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import {} from "react-bootstrap";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import NoMatch from "./components/NoMatch/NoMatch";
import TeamDetails from "./components/TeamDetails/TeamDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/team/:teamId">
            <TeamDetails />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
