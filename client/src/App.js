import React from "react";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import WorkoutTab from "./components/WorkoutTab";

import Logout from "./components/Logout";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import Footer from "./components/Footer";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar" href="#">
              WF
            </a>
          </div>
          <ul class="nav navbar-nav">
            <div className="welcome">
              <button onClick={LoginForm}>Login</button>
              <button onClick={Logout}>Logout</button>
            </div>
          </ul>
        </div>
      </nav>

      <div class="jumbotron">
        <h1>Workout Finder</h1>

        <p>
          Search workouts posted by trainers for you to use. Log and post your
          own.{" "}
        </p>
      </div>

      <div className="App">
        {localStorage.id_token && localStorage.id_token !== null ? (
          <div className="welcome">
            <WorkoutTab />

            {/* <WorkoutForm/> */}
          </div>
        ) : (
          <>
            <LoginForm Login={LoginForm} />

            <SignupForm Signup={SignupForm} />
          </>
        )}
      </div>

      <div className="flex-column justify-flex-start min-100-vh">
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
