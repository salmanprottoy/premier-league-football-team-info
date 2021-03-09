import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import {} from "react-bootstrap";
import About from "./components/About/About";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
