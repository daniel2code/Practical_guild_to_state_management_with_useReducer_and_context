import "bootstrap/dist/css/bootstrap.min.css";

import { Switch, Route } from "react-router-dom";

import Home from "./components/layout/home";
import Cart from "./components/layout/cart";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </div>
  );
}

export default App;
