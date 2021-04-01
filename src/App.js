import React from "react";
import { Redirect, Route, Switch } from "react-router";
import "./App.css";
import Movie from "./components/movies";
import NavBar from "./components/navBar";
import Customer from "./components/customer";
import Rentals from "./components/rentals";
import MovieDetail from "./components/movieDetails";
import NotFound from "./components/notFound";
import LoginForm from "./components/loginForm";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/movie/:id" component={MovieDetail} />
          <Route path="/movies" exact component={Movie} />
          <Route path="/customers" component={Customer} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/login" component={LoginForm} />
          <Route path="/" exact component={Movie} />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
