import { useState, useEffect } from "react";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Welcome from "./components/pages/Welcome";
import Reading from "./components/pages/Welcome";
import Question from "./components/pages/Question";


function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <div className="App">
      <Router>
    <NavBar user={user} setUser={setUser} />
      <main>
        
          {user? (
            <Switch>
              <Route path="/welcome">
                <Welcome user={user}/>
              </Route>
              <Route path="/nav">
                <NavBar user={user}/>
              </Route>
              <Route path="/reading">
                <Reading/>
              </Route>
              <Route path="/question">
                <Question user={user}/>
              </Route>
              <Route path="/">
                <Home user={user}/>
              </Route>
            </Switch>
            ) : (
            <Switch>
              <Route path="/login">
                <Login setUser={setUser}/>
              </Route>
              <Route path="/signup">
                <SignUp setUser={setUser}/>
              </Route>
              <Route path="/">
                <Home setUser={setUser}/>
              </Route>
            </Switch>
          )}
        
      </main>
      </Router>
    </div>
  );
}

export default App;