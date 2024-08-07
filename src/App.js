import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Authors from "./components/Authors";
import Author from "./components/Author";
import Books from "./components/Books";
import Book from "./components/Book";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/authors">Authors</a>
            </li>
            <li>
              <a href="/books">Books</a>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/authors" exact component={Authors} />
          <Route path="/authors/:id" component={Author} />
          <Route path="/books" exact component={Books} />
          <Route path="/books/:id" component={Book} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
