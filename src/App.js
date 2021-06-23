
import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Suspense } from 'react';
const Product = React.lazy(() => import('./Components/Product'));
const About = React.lazy(() => import('./Components/About'));
const Contact = React.lazy(() => import('./Components/Contact'));
const Cart = React.lazy(() => import('./Components/Cart'));
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section>
        <Router>
          <Switch>
            <Route path="/product">
              <Product />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path exact="/">
              <Product />
            </Route>
          </Switch>
        </Router>
      </section>
    </Suspense>
  );
}

export default App;