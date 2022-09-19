import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Cart from "./components/Cart";
import Products from "./components/Products";
import "./styles/app.scss";
import { useAppSelector } from './redux/app/hooks';
import { getMemoizedNumitems } from './redux/products/cartSlice';

function App() {
  const numItems = useAppSelector(getMemoizedNumitems);

  return (
    <Router>
      <div>
        <nav className="navigation">
          <ul className="navigation__list">
            <li className="navigation__list__item">
              <div className="icon">{numItems}</div>
              <Link className="link" to="/cart">Cart</Link>
            </li>
            <li className="navigation__list__item">
              <Link className="link" to="/">Products</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <Products />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
