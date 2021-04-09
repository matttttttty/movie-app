import React from "react";
import { Redirect, Route, Switch } from "react-router";
import "./App.css";
import Movie from "./components/movies";
import NavBar from "./components/navBar";
import Customer from "./components/customer";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import MovieForm from "./components/movieForm";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/movies/:id" component={MovieForm} />
          {/* <Route path="/movie" component={MovieForm} /> */}
          <Route path="/movies" exact component={Movie} />
          <Route path="/customers" component={Customer} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/" exact component={Movie} />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
