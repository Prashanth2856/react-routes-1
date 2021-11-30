import "./App.css";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { Login } from "./components/Login";
import { Services } from "./components/Services";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route>
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
