import React, { useState } from "react";

import Navigation from "./board/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "tailwindcss/tailwind.css";
import Dashboard from "./Components/Auth/Dashboard";
import ForgotPassword from "./Components/Auth/ForgotPassword";
import Login from "./Components/Auth/Login";
import PrivateRoute from "./Components/Auth/PrivateRoute";
import Signup from "./Components/Auth/Signup";
import UpdateProfile from "./Components/Auth/UpdateProfile";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllWidgets from "./Containers/AllWidgets/AllWidgets";
import HomePage from "./Components/HomePage";

function App() {
  const [spotifyState, setSpotifyState] = useState(null);

  return (
    <div className="App">
      <header className="dash-header">
        <Navigation />
      </header>
      <Router>
        <Route exact path="/" component={HomePage} />
      </Router>
      <Router>
        <Route path="/widgets" component={AllWidgets} />
      </Router>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "80vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path="/profile" component={Dashboard} />
                <PrivateRoute
                  path="/update-profile"
                  component={UpdateProfile}
                />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={ForgotPassword} />
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </Container>
    </div>
  );
}

export default App;
